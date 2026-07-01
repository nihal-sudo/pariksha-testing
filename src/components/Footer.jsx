import {
  Heart,
  Github,
  Instagram,
  Linkedin,
  Code,
  Rocket,
  Coffee,
  Palette
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/nihal-sudo",
      bg: "bg-gray-800 hover:bg-gray-900"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/nihal-sharma-sh/",
      bg: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/nihall_sharma/",
      bg: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500"
    }
  ];

  return (
    <footer className="relative py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 border-t border-slate-200 overflow-hidden">

      <span className="absolute top-4 left-10 opacity-20 animate-bounce">💻</span>
      <span className="absolute top-6 right-1/4 opacity-20 animate-bounce">⚡</span>
      <span className="absolute bottom-6 left-1/4 opacity-20 animate-bounce">🎨</span>
      <span className="absolute bottom-6 right-10 opacity-20 animate-bounce">✨</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-600">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              by <span className="font-semibold text-purple-600">NIHAL SHARMA</span>
            </p>
            <p className="mt-1 text-xs text-slate-500">
              © 2026 API Pariksha • For developers & learners
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-11 h-11 flex items-center justify-center rounded-full ${item.bg} text-white shadow-md hover:scale-105 transition`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-2">
              <span className="px-3 py-1 text-[10px] bg-blue-100 text-blue-700 border border-blue-300 rounded-full flex items-center gap-1">
                <Code className="w-3 h-3" /> Open Source
              </span>
              <span className="px-3 py-1 text-[10px] bg-purple-100 text-purple-700 border border-purple-300 rounded-full flex items-center gap-1">
                <Rocket className="w-3 h-3" /> v1.0
              </span>
            </div>

            <div className="flex gap-2">
              <span className="px-2 py-1 text-[9px] bg-green-100 text-green-700 border border-green-300 rounded-full flex items-center gap-1">
                <Coffee className="w-3 h-3" /> Caffeine Powered
              </span>
              <span className="px-2 py-1 text-[9px] bg-orange-100 text-orange-700 border border-orange-300 rounded-full flex items-center gap-1">
                <Palette className="w-3 h-3" /> Designed with ❤️
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
