import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-40 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[900px] h-[400px] bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center px-6">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
          Free & Open Source API Testing Tool
        </span>

        <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
          Test, Debug & Understand{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            APIs
          </span>{" "}
          Instantly
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          A clean and beginner-friendly API testing tool for developers. Build,
          test, and debug your REST APIs with confidence.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById("test-api")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-500/30 hover:bg-indigo-600 hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            Start Testing <ArrowRight size={18} />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("how")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 bg-white font-medium hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all duration-200"
          >
            <Play size={18} /> View Tutorial
          </button>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-6xl rounded-2xl bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] border overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-slate-50 to-white">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <div className="px-5 py-1.5 text-sm rounded-full bg-white border shadow-sm flex items-center gap-2">
                🔍{" "}
                <span className="font-medium">
                  API Pariksha – Har API Ka Viva, Ab Yahin
                </span>
              </div>

              <div />
            </div>

            <div className="grid grid-cols-2">
              <div className="p-8 border-r bg-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      △
                    </div>
                    <h3 className="text-lg font-semibold">Request</h3>
                  </div>

                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Ready
                  </span>
                </div>

                <div className="flex gap-3 mb-6">
                  <span className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold">
                    GET
                  </span>
                  <div className="flex-1 px-4 py-2 border rounded-xl text-sm text-slate-600">
                    https://api.nihal.dev/profile
                  </div>
                </div>

                <div className="rounded-xl border p-5 space-y-4 mb-8">
                  <p className="text-sm font-semibold text-slate-600">
                    HEADERS
                  </p>

                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600 font-medium">
                      Content-Type:
                    </span>
                    <span className="text-slate-600">
                      application/json
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600 font-medium">
                      Authorization:
                    </span>
                    <span className="text-slate-400">
                      Bearer ••••••••
                    </span>
                  </div>
                </div>

                <div className="h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  Send Request →
                </div>
              </div>

              <div className="p-8 bg-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                      ✓
                    </div>
                    <h3 className="text-lg font-semibold">Response</h3>
                  </div>

                  <div className="flex gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-green-100 text-green-600 text-sm font-semibold">
                      ✓ 200 OK
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-slate-200 text-slate-600 text-sm">
                      ⚡ 245ms
                    </span>
                  </div>
                </div>

                <div className="flex gap-6 border-b mb-4 text-sm">
                  <span className="pb-2 border-b-2 border-blue-500 text-blue-600 font-medium">
                    📄 Response Body
                  </span>
                  <span className="pb-2 text-slate-500">📋 Headers</span>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-[13px] font-mono mb-6">
                  <div className="space-y-1 leading-relaxed">
                    <div className="text-slate-400">{'{'}</div>

                    <div className="pl-4">
                      <span className="text-[#DF305D]">"status"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-cyan-300">"success"</span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-4">
                      <span className="text-slate-400">"data"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-slate-400">{'{'}</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-[#DF305D]">"name"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-cyan-300">
                        "Nihal Sharma"
                      </span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-[#DF305D]">"rollNo"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-orange-400">"24603"</span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-[#DF305D]">"degree"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-cyan-300">
                        "B.TECH CSE"
                      </span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-[#DF305D]">"cgpa"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-orange-400">5.9</span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-[#DF305D]">"backs"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-cyan-300">
                        "Count karna band kar diya"
                      </span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-[#DF305D]">"motivation"</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-purple-400">null</span>
                      <span className="text-slate-500">,</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-[#DF305D]">
                        "realityCheck"
                      </span>
                      <span className="text-slate-500">: </span>
                      <span className="text-cyan-300">
                        "Life is a REST API with no documentation"
                      </span>
                    </div>

                    <div className="pl-4 text-slate-400">{'}'}</div>
                    <div className="text-slate-400">{'}'}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-xl bg-blue-50 p-4 text-center">
                    <p className="text-xs text-slate-500">STATUS</p>
                    <p className="text-lg font-bold text-green-600">
                      200
                    </p>
                  </div>

                  <div className="rounded-xl bg-purple-50 p-4 text-center">
                    <p className="text-xs text-slate-500">TIME</p>
                    <p className="text-lg font-bold text-purple-600">
                      245ms
                    </p>
                  </div>

                  <div className="rounded-xl bg-pink-50 p-4 text-center">
                    <p className="text-xs text-slate-500">SIZE</p>
                    <p className="text-lg font-bold text-pink-600">
                      651.2KB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
