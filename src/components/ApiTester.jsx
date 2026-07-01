import axios from "axios";
import { useState } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import RequestEditor from "./RequestEditor";
import RequestHistory from "./RequestHistory";
import ResponseMetrics from "./ResponseMetrics";
import CurlPreview from "./CurlPreview";
import { Send, Copy, Inbox } from "lucide-react";

export default function ApiTester() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);
  const [params, setParams] = useState([{ key: "", value: "" }]);
  const [body, setBody] = useState("");
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("api-history") || "[]")
  );
  const [activeTab, setActiveTab] = useState("body");

  const [urlError, setUrlError] = useState("");

  const buildObj = arr =>
    Object.fromEntries(arr.filter(i => i.key).map(i => [i.key, i.value]));

  const send = async () => {
    if (!url.trim()) {
      setUrlError("Please enter a request URL");
      return;
    }

    setUrlError("");
    setLoading(true);
    setRes(null);

    let parsedBody;
    try {
      parsedBody = body ? JSON.parse(body) : undefined;
    } catch {
      setUrlError("Invalid JSON body");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/request`, {
        url,
        method,
        headers: buildObj(headers),
        params: buildObj(params),
        body: parsedBody
      });

      setRes(response.data);

      const record = { url, method };
      const updated = [record, ...history].slice(0, 5);
      setHistory(updated);
      localStorage.setItem("api-history", JSON.stringify(updated));
    } catch (err) {
      setRes({
        status: err.response?.status || 0,
        statusText: err.response?.statusText || "Network Error",
        responseTime: 0,
        responseSize: 0,
        data: err.response?.data || { error: err.message },
        headers: err.response?.headers || {}
      });
    } finally {
      setLoading(false);
    }
  };

  const statusColor =
    res?.status >= 200 && res?.status < 300
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <PanelGroup
      direction="horizontal"
      className="h-[620px] bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <Panel defaultSize={45}>
        <div className="h-full flex flex-col">
          <div className="px-6 py-4 border-b bg-slate-50">
            <h3 className="font-semibold text-slate-800">Request</h3>
            <p className="text-xs text-slate-500">
              Configure endpoint, headers & body
            </p>
          </div>

          <div className="p-6 flex-1 overflow-auto space-y-2">
            <RequestHistory
              history={history}
              onSelect={item => {
                setUrl(item.url);
                setMethod(item.method);
                setUrlError("");
              }}
              onDelete={index => {
                const updated = history.filter((_, i) => i !== index);
                setHistory(updated);
                localStorage.setItem("api-history", JSON.stringify(updated));
              }}
              onClear={() => {
                setHistory([]);
                localStorage.removeItem("api-history");
              }}
            />

            <input
              value={url}
              onChange={e => {
                setUrl(e.target.value);
                if (urlError) setUrlError("");
              }}
              placeholder="https://api.example.com/users"
              className={`w-full border rounded-lg px-3 py-2 ${
                urlError ? "border-red-500 focus:ring-red-500" : ""
              }`}
            />

            {urlError && (
              <p className="text-xs text-red-500 mt-1">
                {urlError}
              </p>
            )}

            <select
              value={method}
              onChange={e => setMethod(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mt-2"
            >
              {["GET", "POST", "PUT", "DELETE", "PATCH"].map(m => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <RequestEditor
              method={method}
              headers={headers}
              setHeaders={setHeaders}
              params={params}
              setParams={setParams}
              body={body}
              setBody={setBody}
            />

            <button
              onClick={send}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Request"}
            </button>

            <CurlPreview
              url={url}
              method={method}
              headers={headers}
              params={params}
              body={body}
            />
          </div>
        </div>
      </Panel>

      <PanelResizeHandle className="w-1 bg-slate-200 hover:bg-indigo-400 transition-all duration-200 cursor-col-resize" />

      <Panel defaultSize={55}>
        <div className="h-full flex flex-col">

          <div className="px-6 py-4 border-b bg-slate-50 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-800">Response</h3>
              <p className="text-xs text-slate-500">
                Status, body & headers
              </p>
            </div>

            {res && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                {res.status} {res.statusText}
              </span>
            )}
          </div>

          <div className="p-6 flex-1 overflow-auto">
            {!res && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <Inbox size={48} />
                <p className="mt-4 font-medium">No response yet</p>
                <p className="text-sm">
                  Send a request to see the response here
                </p>
              </div>
            )}

            {loading && <p className="text-indigo-500">Loading...</p>}

            {res && (
              <>
                <ResponseMetrics res={res} />

                <div className="mt-4 border rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b">
                    <div className="flex gap-6 text-sm">
                      <button
                        onClick={() => setActiveTab("body")}
                        className={`pb-2 ${
                          activeTab === "body"
                            ? "text-indigo-600 border-b-2 border-indigo-600"
                            : "text-slate-500"
                        }`}
                      >
                        Response Body
                      </button>
                      <button
                        onClick={() => setActiveTab("headers")}
                        className={`pb-2 ${
                          activeTab === "headers"
                            ? "text-indigo-600 border-b-2 border-indigo-600"
                            : "text-slate-500"
                        }`}
                      >
                        Response Headers
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(
                          JSON.stringify(
                            activeTab === "body" ? res.data : res.headers,
                            null,
                            2
                          )
                        )
                      }
                      className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
                    >
                      <Copy size={14} />
                      Copy
                    </button>
                  </div>

                  <pre className="text-xs p-4 bg-slate-100 max-h-[260px] overflow-auto">
{JSON.stringify(
  activeTab === "body" ? res.data : res.headers,
  null,
  2
)}
                  </pre>
                </div>
              </>
            )}
          </div>
        </div>
      </Panel>
    </PanelGroup>
  );
}
