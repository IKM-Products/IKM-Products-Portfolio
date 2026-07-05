import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, GraduationCap } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "BE, Computer Engineering",
    org: "Pokhara University",
    period: "2022 — 2026",
    body: "CGPA: Pending",
  },
  {
    icon: GraduationCap,
    title: "9-12 degree in Civil Engineering",
    org: "Sanjiwani Model Secondary School",
    period: "2018 — 2022",
    body: "GPA: 3.24 / 4.0 (SEE) & 3.09 / 4.0 (SLC)",
  },
  {
    icon: GraduationCap,
    title: "Basic Level Education",
    org: "Vidhya Sagar English Secondary School",
    period: "2007 — 2018",
    body: "GPA: 2.93 / 4.0 (BLE)",
  },
  // {
  //   // icon: Award,
  // }
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Where I <span className="text-gradient">learned the craft</span></>}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 shadow-elegant transition-transform hover:-translate-y-1"
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <it.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-glow">
                  {it.period}
                </div>
                <div className="mt-1 font-display text-lg font-bold">{it.title}</div>
                <div className="text-sm text-muted-foreground">{it.org}</div>
                <p className="mt-3 text-sm text-muted-foreground">{it.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
