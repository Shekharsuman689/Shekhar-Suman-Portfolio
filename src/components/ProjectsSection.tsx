
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import resumeImg from "@/assets/project-resume.jpg";
import youtubeImg from "@/assets/project-youtube.jpg";
import entertainmentImg from "@/assets/project-entertainment.jpg";
import amazonImg from "@/assets/project-amazon.jpg";
import aobImg from "@/assets/project-aob.png";

const projects = [
  {
    title: "Resume Builder App",
    desc: "A frontend application that helps users create professional resumes with customizable templates and real-time preview.",
    image: resumeImg,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/Shekharsuman689",
    demo: "https://resume-builder-shekhar-rho.vercel.app/",
  },
  {
    title: "YouTube Subscriber App",
    desc: "A backend application to manage YouTube subscriber data with RESTful APIs, CRUD operations, and database integration.",
    image: youtubeImg,
    tech: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
    github: "https://github.com/Shekharsuman689",
    demo: "https://get-youtube-subscribers-x7ks.onrender.com/",
  },
  {
    title: "Entertainment App",
    desc: "A full-stack streaming platform clone with user authentication, media browsing, and responsive UI inspired by Netflix.",
    image: entertainmentImg,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    github: "https://github.com/Shekharsuman689",
    demo: "https://entertainment-web-app-orpin.vercel.app/",
  },
  {
    title: "Amazon Clone App",
    desc: "An e-commerce clone with product listing, cart functionality, user auth, and payment integration using Stripe.",
    image: amazonImg,
    tech: ["React", "Firebase", "Stripe", "CSS"],
    category: "Full Stack",
    github: "https://github.com/Shekharsuman689",
    demo: "https://amazon-clone-react-one.vercel.app/",
  },
  {
    title: "Alien On Board",
    desc: "Built a responsive web platform for Alien on Board, a portable and eco-friendly air purifier solution designed to reduce the impact of air pollution in metro cities.",
    image: aobImg,
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
    category: "Full Stack",
    github: "https://github.com/Shekharsuman689",
    demo: "https://alien-on-board.vercel.app/",
  },
];

const filters = ["All", "Frontend", "Backend", "Full Stack"];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-muted-foreground text-center mb-10">
            Some things I've built
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-xl overflow-hidden group hover:border-primary/20 transition-colors"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;