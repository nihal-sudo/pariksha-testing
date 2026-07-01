export default function CurlPreview({ url, method, headers, params, body }) {
  const h = headers.filter(h => h.key);
  const p = params.filter(p => p.key);

  let curl = `curl -X ${method} "${url}`;

  if (p.length) {
    curl += "?" + p.map(p => `${p.key}=${p.value}`).join("&");
  }

  curl += `"`;

  h.forEach(h => {
    curl += ` \\\n  -H "${h.key}: ${h.value}"`;
  });

  if (body && method !== "GET") {
    curl += ` \\\n  -d '${body}'`;
  }

  return (
    <div className="mt-4">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-semibold">cURL</span>
        <button
          onClick={() => navigator.clipboard.writeText(curl)}
          className="text-xs text-indigo-500"
        >
          Copy
        </button>
      </div>

      <pre className="text-xs bg-slate-100 p-3 rounded-lg overflow-auto">
        {curl}
      </pre>
    </div>
  );
}
