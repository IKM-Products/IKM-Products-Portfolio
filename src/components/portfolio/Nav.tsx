import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.href.slice(1)));
      const y = window.scrollY + 200;
      for (const s of sections) {
        if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass shadow-elegant" : ""
          }`}
        >
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">IKM</span>
            <span className="text-foreground">-Products</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105 md:inline-block"
          >
            Let's talk
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 flex flex-col rounded-2xl p-2 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
