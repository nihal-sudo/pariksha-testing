import { Link, Settings, FileText, Send, BarChart } from "lucide-react";

const steps = [
  { icon: Link, title: "Enter API URL", text: "Paste your API endpoint URL." },
  { icon: Settings, title: "Select HTTP Method", text: "Choose GET, POST, PUT, DELETE." },
  { icon: FileText, title: "Add Headers & Body", text: "Configure headers and JSON body." },
  { icon: Send, title: "Send Request", text: "Send request instantly." },
  { icon: BarChart, title: "Analyze Response", text: "Check data, status & time." }
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="mt-3 text-slate-600">
          Testing your APIs is simple and straightforward.
        </p>

        <div className="mt-16 grid md:grid-cols-5 gap-10">
          {steps.map((s, i) => (
            <div key={i} className="space-y-4">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-indigo-50">
                <s.icon className="text-indigo-500" size={28} />
              </div>
              <span className="text-sm text-indigo-500 font-semibold">
                STEP {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
