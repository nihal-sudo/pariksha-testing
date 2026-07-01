import * as Tabs from "@radix-ui/react-tabs";
import KeyValueEditor from "./KeyValueEditor";

export default function RequestEditor({
  method,
  headers,
  setHeaders,
  params,
  setParams,
  body,
  setBody
}) {
  return (
    <div className="border rounded-xl bg-white">
      <div className="px-5 py-3 border-b bg-slate-50 rounded-t-xl">
        <h3 className="text-sm font-semibold text-slate-800">Request</h3>
      </div>

      <Tabs.Root defaultValue="headers" className="px-5 py-4">
        <Tabs.List className="flex gap-8 border-b text-sm font-medium">
          <Tabs.Trigger
            value="headers"
            className="pb-2 data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 border-indigo-600"
          >
            Headers
          </Tabs.Trigger>

          <Tabs.Trigger
            value="params"
            className="pb-2 data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 border-indigo-600"
          >
            Params
          </Tabs.Trigger>

          <Tabs.Trigger
            value="body"
            className="pb-2 data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 border-indigo-600"
          >
            Body
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="headers" className="pt-4">
          <KeyValueEditor data={headers} setData={setHeaders} />
        </Tabs.Content>

        <Tabs.Content value="params" className="pt-4">
          <KeyValueEditor data={params} setData={setParams} />
        </Tabs.Content>

        <Tabs.Content value="body" className="pt-4">
          {method === "GET" ? (
            <div className="text-sm text-slate-400">
              Body is disabled for GET requests
            </div>
          ) : (
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              className="w-full min-h-[220px] rounded-xl border p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={`{
  "title": "Test Post",
  "body": "This is a test",
  "userId": 1
}`}
            />
          )}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
