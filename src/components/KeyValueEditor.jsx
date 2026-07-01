import { Plus, Trash } from "lucide-react";

export default function KeyValueEditor({ data, setData }) {
  const update = (i, key, value) => {
    const copy = [...data];
    copy[i][key] = value;
    setData(copy);
  };

  const addRow = () => setData([...data, { key: "", value: "" }]);
  const removeRow = i => setData(data.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-2">
      {data.map((row, i) => (
        <div key={i} className="flex gap-2">
          <input
            placeholder="Key"
            value={row.key}
            onChange={e => update(i, "key", e.target.value)}
            className="flex-1 border rounded-lg px-2 py-1.5 text-sm"
          />
          <input
            placeholder="Value"
            value={row.value}
            onChange={e => update(i, "value", e.target.value)}
            className="flex-1 border rounded-lg px-2 py-1.5 text-sm"
          />
          <button onClick={() => removeRow(i)} className="text-red-500">
            <Trash size={16} />
          </button>
        </div>
      ))}
      <button onClick={addRow} className="flex items-center gap-1 text-indigo-500 text-sm">
        <Plus size={14} /> Add
      </button>
    </div>
  );
}
