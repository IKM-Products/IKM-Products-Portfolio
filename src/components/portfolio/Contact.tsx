import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { Github, Linkedin, Instagram, Facebook } from "./BrandIcons";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_prxn4g2",
        "template_hjjl5oa",
        formRef.current,
        "f5cGhetKd7AWJprrh"
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast.success("Message sent successfully!", {
            description: "Thanks for reaching out. I'll get back to you soon.",
          });
          formRef.current?.reset();
        },
        (error: any) => {
          setIsSubmitting(false);
          console.error("EmailJS Error:", error);
          toast.error("Delivery Failed", {
            description: "Something went wrong. Please try emailing directly.",
          });
        }
      );
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32 w-full max-w-6xl mx-auto px-6">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold sm:text-6xl mb-6">
            Let's talk & build <span className="text-gradient">something great.</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            I'm always excited to discuss new ideas, collaborate on projects, or simply connect. Feel free to send me a message.
          </p>
        </div>

        {/* Layout Grid: Info Column & Form Column */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Brands */}
          <div className="md:col-span-2 flex flex-col gap-8 justify-center h-full py-2">
            
            {/* 1. Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Kavre, Nepal</p>
              </div>
            </div>

            {/* 2. Contact Number */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Contact Number</h4>
                <a href="tel:+9779768599027" className="text-muted-foreground hover:text-primary transition-colors">
                  +977 9768599027
                </a>
              </div>
            </div>

            {/* 3. Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email</h4>
                <a href="mailto:karkianish873@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  karkianish873@gmail.com
                </a>
              </div>
            </div>
            
            <hr className="border-border/60 w-full my-2" />

            {/* Social Network Array */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/IKM-Products", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ismael-karki-manaay-9675213b4/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/vibes_ikm", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/vibesikm", label: "Facebook"},
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground backdrop-blur transition-all hover:-translate-y-1 hover:border-primary hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Interactive Form */}
          <div className="md:col-span-3">
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="glass border border-border p-8 rounded-4xl flex flex-col gap-6 shadow-elegant"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="from_name"
                    required
                    className="bg-secondary/30 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Ismael Karki Manaay"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="reply_to"
                    required
                    className="bg-secondary/30 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="ismael@example.com"
                  />
                </div>
              </div>

              {/* Phone Input Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                  Phone Number <span className="text-xs text-muted-foreground/60">(Optional)</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-muted-foreground/70 text-sm select-none pointer-events-none">+977</span>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone_number"
                    pattern="[0-9]{10}"
                    className="w-full bg-secondary/30 border border-border rounded-xl pl-16 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="97XXXXXXXX"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="bg-secondary/30 border border-border rounded-xl px-4 py-3 text-foreground resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-2 bg-gradient-primary text-primary-foreground font-medium py-4 rounded-xl flex items-center justify-center gap-2 shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Footer Section */}
        <div className="mt-20 border-t border-border/40 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="font-display font-bold text-xl tracking-tight text-foreground flex items-center gap-2 group">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-display text-xs font-bold">
                IKM
              </div>
              <span>Ismael Karki Manaay</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Designed & Developed by IKM-Products.
            </p>
          </div>

          <div className="text-sm text-muted-foreground/60 text-center md:text-right">
            Copyright &copy; {currentYear} Ismael Karki Manaay. <br className="md:hidden" /> All rights reserved.
          </div>
        </div>
      </motion.div>
    </section>
  );
}