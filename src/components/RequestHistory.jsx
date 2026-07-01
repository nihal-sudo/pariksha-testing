import { Trash2 } from "lucide-react";

export default function RequestHistory({ history, onSelect, onDelete, onClear }) {
  return (
    <div className="border rounded-lg p-3 bg-slate-50 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold">Recent Requests</h4>

        {history.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-red-500 flex items-center gap-1"
          >
            <Trash2 size={14} /> Clear
          </button>
        )}
      </div>

      {history.length === 0 && (
        <p className="text-xs text-slate-400">No requests yet</p>
      )}

      <ul className="space-y-2">
        {history.map((item, i) => (
          <li
            key={i}
            className="flex items-center justify-between gap-2 text-xs bg-white p-2 rounded border"
          >
            <span
              onClick={() => onSelect(item)}
              className="cursor-pointer hover:text-indigo-500 truncate"
            >
              <b className="text-indigo-500">{item.method}</b> {item.url}
            </span>

            <button
              onClick={() => onDelete(i)}
              className="text-red-500 hover:scale-110"
            >
              <Trash2 size={14} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
