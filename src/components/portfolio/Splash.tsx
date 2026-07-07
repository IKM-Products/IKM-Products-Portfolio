import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashProps {
  onComplete: () => void;
}

export function Splash({ onComplete }: SplashProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant, fast loading time that allows the premium entrance animations to land perfectly
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(() => onComplete(), 1000); // Wait for the structural door slides to finish
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-9999 flex flex-col justify-between overflow-hidden bg-background select-none pointer-events-none">
      
      {/* 1. TOP HORIZON PANEL */}
      <motion.div
        initial={{ y: 0 }}
        animate={isDone ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
        className="w-full bg-[#070a10] flex-1 flex flex-col justify-end border-b border-white/10 relative"
      >
        {/* Mirroring your Hero's background blur elements subtly */}
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="w-full max-w-6xl mx-auto px-6 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-[11vw] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/30 uppercase"
          >
            ISMAEL KARKI
          </motion.div>
        </div>
      </motion.div>

      {/* 2. ABSOLUTE CENTER ACTIVE STATUS (Minimalist Focal Laser Line) */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isDone ? { scaleX: 0, opacity: 0 } : { scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-px bg-gradient-primary relative z-20"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full border border-primary/30 bg-background/80 text-[10px] uppercase font-mono tracking-[0.3em] text-primary-glow backdrop-blur-md">
          IKM-Products-Portfolio
        </div>
      </motion.div>

      {/* 3. BOTTOM HORIZON PANEL */}
      <motion.div
        initial={{ y: 0 }}
        animate={isDone ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
        className="w-full bg-[#070a10] flex-1 flex flex-col justify-start border-t border-white/10 relative"
      >
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="w-full max-w-6xl mx-auto px-6 mt-2 flex flex-col justify-between h-full pb-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-gradient font-display text-[11vw] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-t from-primary via-primary/80 to-transparent uppercase"
          >
            MANAAY
          </motion.div>

          {/* Running metadata block matching your premium portfolio details */}
          <div className="w-full flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground/40 border-t border-white/5 pt-4">
            <span>Copyright &copy; Ismael Karki Manaay. All rights reserved.</span>
            <span>Kavre, Nepal</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}