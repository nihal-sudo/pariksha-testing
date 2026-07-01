import {
  CheckCircle,
  Timer,
  Database,
  AlertTriangle
} from "lucide-react";

const styles = {
  success:
    "bg-green-50 text-green-600 outline outline-2 outline-transparent hover:outline-green-400 hover:shadow-[0_12px_30px_rgba(34,197,94,0.25)]",

  error:
    "bg-red-50 text-red-600 outline outline-2 outline-transparent hover:outline-red-400 hover:shadow-[0_12px_30px_rgba(239,68,68,0.25)]",

  time:
    "bg-purple-50 text-purple-600 outline outline-2 outline-transparent hover:outline-purple-400 hover:shadow-[0_12px_30px_rgba(168,85,247,0.25)]",

  size:
    "bg-sky-50 text-sky-600 outline outline-2 outline-transparent hover:outline-sky-400 hover:shadow-[0_12px_30px_rgba(14,165,233,0.25)]",

  debug:
    "bg-amber-50 text-amber-600 outline outline-2 outline-transparent hover:outline-amber-400 hover:shadow-[0_12px_30px_rgba(245,158,11,0.25)]"
};

export default function ResponseMetrics({ res }) {
  if (!res) return null;

  const isSuccess =
    typeof res.status === "number" && res.status < 300;

  const statusMessages = {
    200: "OK",
    201: "Created",
    204: "No Content",
    301: "Moved Permanently",
    302: "Found",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error"
  };

  const statusLabel = `${res.status} ${
    statusMessages[res.status] || "Unknown"
  }`;

  return (
    <div className="grid grid-cols-4 gap-4">
      <Metric
        icon={CheckCircle}
        label="Status"
        value={statusLabel}
        type={isSuccess ? "success" : "error"}
      />

      <Metric
        icon={Timer}
        label="Time"
        value={`${res.responseTime || 0} ms`}
        type="time"
      />

      <Metric
        icon={Database}
        label="Size"
        value={`${res.responseSize || 0} bytes`}
        type="size"
      />

      <Metric
        icon={AlertTriangle}
        label="Debug"
        value={isSuccess ? "No Issues" : "Check Error"}
        type="debug"
      />
    </div>
  );
}

function Metric({ icon: Icon, label, value, type }) {
  return (
    <div
      className={`
        metric-card
        rounded-xl p-4 cursor-pointer
        transform-gpu
        transition-transform transition-shadow
        duration-120 ease-out
        hover:-translate-y-1
        hover:scale-[1.03]
        ${styles[type]}
      `}
    >
      <Icon size={18} className="mb-1" />
      <p className="text-xs">{label}</p>
      <p className="font-semibold break-all">{value}</p>
    </div>
  );
}
