import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Toaster } from "sonner";
import { Splash } from "@/components/portfolio/Splash";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scrolling while splash page loading is true
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <>
      {/* Handles exit animation state tracking safely for unmounting hooks */}
      <AnimatePresence mode="wait">
        {isLoading && <Splash onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Mount your global custom theme cursor */}
      <CustomCursor />

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
    </>
  );
}