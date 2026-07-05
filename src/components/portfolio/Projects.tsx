import { motion } from "framer-motion";
import { Section } from "./Section";

// Inline custom SVG component for GitHub to bypass package version mismatch errors
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: "CivilSync: The Construction Project Management System",
    tag: "ConTech",
    body: "Full-stack construction project management application with modern web technologies.",
    stack: ["React (TypeScript)", "Next JS", "PostgreSQL"],
    accent: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    github: "https://github.com/IKM-Products/CivilSync-The-Construction-Project-Management-System.git",
  },
  {
    title: "FARM: AI-based Crop Recommendation App",
    tag: "Agritech",
    body: "AI-powered crop recommendation app that helps farmers choose suitable crops using machine learning.",
    stack: ["Flutter (Dart)", "Python (KNN & RF)", "Firebase & Firestore"],
    accent: "bg-gradient-to-r from-green-300 to-green-500",
    github: "https://github.com/IKM-Products/FARM-AI-based-Crop-Recommendation-App-Frontend.git",
  },
  {
    title: "AxiosCinema: The Movie Browsing Platform",
    tag: "Entertainment",
    body: "Modern movie browsing platform for discovering, searching, and exploring movies.",
    stack: ["React (TypeScript)", "Firebase & Firestore", "TMDB API"],
    accent: "bg-gradient-to-r from-red-400 to-red-600",
    github: "https://github.com/IKM-Products/AxiosCinema-The-Movie-Browsing-Platform.git",
  },
  {
    title: "EventSync: The Event Management System",
    tag: "EventTech",
    body: "Modern event management system for organizing, scheduling, and managing events efficiently.",
    stack: ["React (JavaScript)", "Node JS", "Express JS", "Vite"],
    accent: "bg-gradient-to-r from-blue-500 to-blue-700",
    github: "https://github.com/IKM-Products/EventSync-The-Event-Management-System.git",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I've <span className="text-gradient">built</span></>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group glass relative flex flex-col overflow-hidden rounded-3xl p-8 shadow-elegant transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div
              className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-linear-to-br ${p.accent} opacity-30 blur-3xl transition-all group-hover:opacity-50`}
            />
            
            <div className="relative flex items-start justify-between">
              <span className="rounded-full border border-border bg-surface-elevated/60 px-3 py-1 text-xs tracking-widest text-muted-foreground">
                {p.tag}
              </span>
              
              {/* GitHub Button positioned directly in the top-right corner of the card */}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} GitHub repository`}
                  onClick={(e) => e.stopPropagation()} 
                  className="z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated/60 text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              )}
            </div>

            <h3 className="relative mt-8 font-display text-3xl font-bold">
              {p.title}
            </h3>
            <p className="relative mt-3 text-muted-foreground grow">{p.body}</p>
            
            {/* Action Footer: Tech Stack Display */}
            <div className="relative mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}