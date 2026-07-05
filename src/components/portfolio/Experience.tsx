import { motion } from "framer-motion";
import { Section } from "./Section";

const jobs = [
  {
    role: "Full-Stack Developer",
    company: "Brainztechs IT Solutions",
    period: "Jun 2026 — Present",
    body: "Building full-stack web applications with modern technologies, focusing on performance, scalability, and user experience.",
    tags: ["Go/Golang", "Next JS", "PostgreSQL", "React", "TypeScript", "TailwindCSS", "Vite"],
  },
  {
    role: "Data Collector & Civil Site Engineer",
    company: "Dhulikhel Municipality",
    period: "Jun 2022 — Dec 2022",
    body: "Collected and documented municipal asset data while assisting with site supervision, quantity estimation, valuation, and project documentation.",
    tags: ["AutoCAD & SketchUp", "Data Collection & Documentation for Municipal Assets Management", "Estimate & Valuation", "Site Supervision"],
  },
  {
    role: "Civil Site Engineer",
    company: "Dhulikhel Municipality",
    period: "Aug 2021 — Jan 2022",
    body: "Assisted in site supervision, quantity estimation, quality control, and ensuring construction work followed approved drawings and standards.",
    tags: ["AutoCAD", "Site Supervision"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've <span className="text-gradient">worked</span></>}
    >
      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-linear-to-b from-primary/50 via-border to-transparent md:left-1/2" />
        <div className="space-y-10">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative grid gap-4 pl-12 md:grid-cols-2 md:gap-10 md:pl-0 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-2.5 top-4 h-3 w-3 rounded-full bg-gradient-primary shadow-glow md:left-[calc(50%-6px)]" />
              <div className={`md:text-right ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                <div className="text-sm uppercase tracking-widest text-primary-glow">
                  {job.period}
                </div>
                <div className="mt-1 font-display text-2xl font-bold">{job.role}</div>
                <div className="text-muted-foreground">{job.company}</div>
              </div>
              <div className={`glass rounded-2xl p-6 shadow-elegant ${i % 2 === 0 ? "md:ml-10" : "md:mr-10"}`}>
                <p className="text-muted-foreground">{job.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface-elevated/60 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
