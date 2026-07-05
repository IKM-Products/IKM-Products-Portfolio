import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  CirclePlus,   // Create
  Search,       // Read
  Pencil,       // Update
  Trash2,       // Delete
} from "lucide-react";

const values = [
  { icon: CirclePlus, title: "Create", body: "Bring ideas to life." },
  { icon: Search, title: "Read", body: "Learn from every detail." },
  { icon: Pencil, title: "Update", body: "Improve with every step." },
  { icon: Trash2, title: "Delete", body: "Keep what truly matters." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A little bit <span className="text-gradient">about me</span></>}
    >
      <div className="flex flex-col gap-6 -mt-6">
        
        {/* Paragraph 1: Full width at the top */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-muted-foreground text-justify"
        >
          I'm a Civil Sub-Engineer and currently pursuing Bachelor in Computer Engineering (BCT) with a strong interest in full-stack web & mobile app development, AI/ML, and Research. I enjoy turning ideas into meaningful solutions through creativity, technology, and continuous learning.
        </motion.p>

        {/* Split Grid for underneath Paragraph 1 */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start mt-2">
          
          {/* Left Side: Paragraph 2 & Paragraph 3 */}
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground text-justify">
            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I've developed several academic and personal projects, including AI-powered applications, social platform, management systems, productivity tools, smart city solutions and many more. These experiences have strengthened my skills in full-stack development, mobile apps, research, API integration, authentication, and databases.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Beyond technology, my background is civil engineering has also shaped the way I approach software development. It taught me the value of planning, teamwork, leadership, and problem-solving.
            </motion.p>
          </div>

          {/* Right Side: CRUD boxes */}
          <div className="grid grid-cols-2 gap-4 w-full lg:sticky lg:top-28">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5 text-left transition-transform hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <v.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-display font-semibold text-foreground">{v.title}</div>
                <p className="mt-1 text-sm text-muted-foreground text-justify">{v.body}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}