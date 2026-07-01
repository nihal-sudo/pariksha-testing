import {
  Zap,
  Clock,
  Bug,
  BookOpen,
  Lock,
  DollarSign
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Test REST APIs",
      desc: "Support for all HTTP methods including GET, POST, PUT, DELETE, and more.",
      icon: Zap,
      color: "blue"
    },
    {
      title: "Measure Response Time",
      desc: "Track API performance with accurate response time measurements.",
      icon: Clock,
      color: "purple"
    },
    {
      title: "Debug Errors Easily",
      desc: "Clear error messages and status codes help identify issues quickly.",
      icon: Bug,
      color: "red"
    },
    {
      title: "Beginner-Friendly Tutorial",
      desc: "Step-by-step guide to help you get started with API testing.",
      icon: BookOpen,
      color: "green"
    },
    {
      title: "No Login Required",
      desc: "Start testing immediately without creating an account or signing in.",
      icon: Lock,
      color: "orange"
    },
    {
      title: "Free to Use",
      desc: "Completely free with no hidden costs or premium features.",
      icon: DollarSign,
      color: "indigo"
    }
  ];

  const colorMap = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", ring: "hover:ring-blue-400" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", ring: "hover:ring-purple-400" },
    red: { bg: "bg-red-50", text: "text-red-600", ring: "hover:ring-red-400" },
    green: { bg: "bg-green-50", text: "text-green-600", ring: "hover:ring-green-400" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", ring: "hover:ring-orange-400" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", ring: "hover:ring-indigo-400" }
  };

  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to test, debug, and understand your APIs effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            const c = colorMap[f.color];

            return (
              <div
                key={i}
                className={`
                  group rounded-2xl border bg-white p-8
                  transition-all duration-300
                  hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.25)]
                  hover:ring-1 ${c.ring}
                `}
              >
                <div
                  className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-6
                    ${c.bg}
                    transition-transform duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon className={`${c.text}`} size={22} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {f.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
