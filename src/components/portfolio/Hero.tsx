import { motion } from "framer-motion";
import { Mail, Download, ArrowDown } from "lucide-react";
import { Github, Instagram, Linkedin, Facebook } from "./BrandIcons";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-12"
    >
      {/* animated blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.2fr_1fr] flex-1">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-widest text-primary-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
            </span>
            Home
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Ismael Karki Manaay</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Bringing imagination, creativity, and technology together to solve meaningful real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://docs.google.com/uc?export=download&id=1CMdikR8oSt00gYleavMO1cvV6l5DE2VY"
              download="Ismael_Karki_Manaay_CV.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <span>Download CV</span>
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="ml-2 flex gap-2">
              {[
                { icon: Github, href: "https://github.com/IKM-Products" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ismael-karki-manaay-9675213b4/" },
                { icon: Instagram, href: "https://www.instagram.com/vibes_ikm" },
                { icon: Facebook, href: "https://www.facebook.com/vibesikm" },
                { icon: Mail, href: "#contact" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/50 text-muted-foreground transition-all hover:border-primary hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-4xl bg-gradient-primary opacity-40 blur-2xl" />
          <div className="relative overflow-hidden rounded-4xl border border-border shadow-elegant">
            <img
              src={portrait}
              alt="Ismael Karki Manaay portrait"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-elegant"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Currently
            </div>
            <div className="font-display text-sm font-semibold">
              Full Stack Developer Intern @ Brainztechs IT Solutions
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="w-full mt-auto pt-8">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll To Explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

