import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Toaster } from "sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Styled Toaster customized for your glassmorphic portfolio setup */}
      <Toaster 
        richColors 
        closeButton 
        theme="dark" 
        position="bottom-right"
        toastOptions={{
          className: "glass border border-border/80 text-foreground rounded-xl shadow-elegant backdrop-blur-xl",
          style: {
            background: "rgba(30, 41, 59, 0.5)",
          },
          classNames: {
            success: "!text-primary-glow",
            error: "!text-destructive",
          },
        }}
      />
    </div>
  );
}