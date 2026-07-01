import WelcomeDialog from "./components/WelcomeDialog";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ApiTester from "./components/ApiTester";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <WelcomeDialog />
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="how">
        <HowItWorks />
      </section>

      <section
        id="test-api"
        className="py-28 bg-slate-50 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900">
              Test Your API
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Make requests and analyze responses in real-time with our
              interactive API testing tool.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <ApiTester />
          </div>

        </div>
      </section>

      <section id="features">
        <Features />
      </section>

      <Footer />
    </>
  );
}
