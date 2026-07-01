import { Code2, Menu } from "lucide-react";
import logo from "../assets/logo.png"; 
import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home", gradient: "gradient-home" },
  { id: "how", label: "How It Works", gradient: "gradient-how" },
  { id: "test-api", label: "Test API", gradient: "gradient-test" },
  { id: "features", label: "Features", gradient: "gradient-features" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [flicker, setFlicker] = useState(false);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
    triggerFlicker();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      triggerFlicker();
    }, 10000);

    return () => clearInterval(interval);
  }, [active]);

  const triggerFlicker = () => {
    setFlicker(false);
    requestAnimationFrame(() => setFlicker(true));
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="Logo"
        className="h-36 w-auto object-contain"
      />
    </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {SECTIONS.map(item => {
            const isActive = active === item.id;

            return (
              <MagneticButton
                key={item.id}
                active={isActive}
                flicker={isActive && flicker}
                gradient={item.gradient}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </MagneticButton>
            );
          })}
        </nav>

        <button
          onClick={() => scrollTo("test-api")}
          className="hidden md:block bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition"
        >
          Start Testing
        </button>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
    </header>
  );
}

function MagneticButton({ children, onClick, active, flicker, gradient }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = e => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPos({ x, y });
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={`
        relative px-3 py-1.5 rounded-lg
        transition-[transform,color] duration-200
        ${active ? "text-white" : "text-slate-600 hover:text-indigo-500"}
      `}
    >
      {active && (
        <>
          <span
            className={`
              absolute inset-0 -z-10 rounded-lg blur-md opacity-80
              ${gradient}
              animate-gradient
              ${flicker ? "flicker" : ""}
            `}
          />
          <span
            className={`
              absolute inset-0 -z-10 rounded-lg
              ${gradient}
              animate-gradient
              ${flicker ? "flicker" : ""}
            `}
          />
        </>
      )}

      {children}
    </button>
  );
}
