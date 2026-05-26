import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const titles = [
  "Full Stack Developer",
  "PGDM Student",
  "Tech & Business Enthusiast",
  "Automobile Enthusiast",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium mb-2">Hello, I'm</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
            Shekhar<br />
            <span className="gradient-text">Suman</span>
          </h1>
          <div className="h-8 mb-6">
            <span className="text-lg text-muted-foreground">
              {text}
              <span className="animate-blink text-primary">|</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
            Interested in creating modern and user-friendly digital experiences while combining technology, creativity, and business ideas.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              View Projects <ExternalLink size={16} />
            </button>
            <button
              onClick={() => scrollTo("resume")}
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              Download Resume <ArrowDown size={16} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden gradient-border glow-primary animate-float">
              <img src={profileImg} alt="Shekhar Suman" width={512} height={512} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
