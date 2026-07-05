import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    items: ["C", "C++", "Java", "Dart", "HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "Go/Golang", "Latex"],
  },
  {
    title: "Frameworks, Platforms & Libraries",
    items: ["Flutter", "Next JS", "React", "TailwindCSS", "Vite"],
  },
  {
    title: "Databases",
    items: ["Firebase", "MySQL", "PostgreSQL"],
  },
  {
    title: "Others",
    items: ["Git", "GitHub", "AutoCAD", "SketchUp"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>What I <span className="text-gradient">work with</span></>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-gradient-primary" />
              <h3 className="font-display text-xl font-bold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 + i * 0.03 }}
                  className="rounded-full border border-border bg-surface-elevated/60 px-4 py-1.5 text-sm text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary-glow"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
