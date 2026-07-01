import { useEffect, useState } from "react";
import { X, Mail, Bug, Sparkles } from "lucide-react";

export default function WelcomeDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-2xl p-8 border-4 border-blue-300 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
        <div className="absolute top-4 left-4 text-4xl animate-bounce">⭐</div>
        <div className="absolute top-8 right-8 text-3xl animate-bounce">🎨</div>
        <div className="absolute bottom-8 left-8 text-3xl animate-bounce">🚀</div>
        <div className="absolute bottom-4 right-12 text-2xl animate-bounce">✨</div>
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="text-8xl animate-bounce">🦄</div>
            <div className="absolute -top-2 -right-2 text-3xl animate-spin">✨</div>
            <div className="absolute -bottom-2 -left-2 text-3xl animate-ping">💫</div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Howdy, Code Explorer! 🎉
            </h2>

            <p className="text-lg text-gray-700 font-medium">
              Welcome to the most{" "}
              <span className="text-purple-600 font-bold">magical</span>{" "}
              API testing tool in the universe! 🌟
            </p>

            <p className="text-gray-600">
              If something breaks, don't panic! Just yell at me (via email) 😄
            </p>
          </div>

          <div className="relative w-full rounded-2xl border-4 border-dashed border-purple-300 bg-white/80 p-6 shadow-xl space-y-3">
            <div className="absolute -top-3 -left-3 text-4xl -rotate-12">🐛</div>
            <div className="absolute -top-3 -right-3 text-4xl rotate-12">🔧</div>

            <div className="flex items-center justify-center gap-2">
              <Bug size={24} className="text-red-500 animate-pulse" />
              <span className="text-xl font-bold text-gray-800">Found a Bug?</span>
              <Sparkles size={24} className="text-yellow-500 animate-pulse" />
            </div>

            <p className="text-sm italic text-gray-600">
              "Bugs are just features in disguise!" - Nobody, ever 🤪
            </p>

            <div className="rounded-lg border-2 border-blue-300 bg-gradient-to-r from-blue-100 to-purple-100 p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail size={20} className="text-blue-600" />
                <span className="font-bold text-blue-800">Email Me!</span>
              </div>

              <a
                href="mailto:nihalsharma251717@gmail.com"
                className="block text-lg font-bold text-purple-700 hover:text-purple-900 hover:underline transition-colors"
              >
                nihalsharma251717@gmail.com
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="group relative w-full rounded-2xl py-4 px-6 text-lg font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:scale-105 hover:shadow-2xl transition-all duration-200 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Let's Go! 🚀
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <p className="text-xs italic text-gray-500">
            PS: No unicorns were harmed in making this dialog 🦄💜
          </p>
        </div>
      </div>
    </div>
  );
}
