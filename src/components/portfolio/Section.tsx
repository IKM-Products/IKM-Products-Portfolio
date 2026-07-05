import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: React.ReactNode;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">{title}</h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
