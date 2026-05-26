import { motion } from "framer-motion";
import { Code2, Server, Database, Layout, FileCode, Palette } from "lucide-react";

// Import logos
import cbsLogo from "@/assets/cbs-logo.jpeg";
import ranchiLogo from "@/assets/ranchi-university.png";
import davLogo from "@/assets/dav-logo.jpeg";

const skills = [
  { name: "React.js", icon: Code2, color: "text-primary" },
  { name: "Node.js", icon: Server, color: "text-primary" },
  { name: "MongoDB", icon: Database, color: "text-primary" },
  { name: "Express.js", icon: FileCode, color: "text-primary" },
  { name: "JavaScript", icon: Code2, color: "text-primary" },
  { name: "Tailwind CSS", icon: Palette, color: "text-primary" },
  { name: "TypeScript", icon: Layout, color: "text-primary" },
  { name: "Git & GitHub", icon: Code2, color: "text-primary" },
];

const education = [
  {
    degree: "PGDM",
    field: "OSCM & MARKETING MANAGEMENT",
    institution: "Calcutta Business School",
    year: "2025 - 2027",
    logo: cbsLogo,
  },

  {
    degree: "Bachelor of Science",
    field: "Chemistry",
    institution: "Ranchi University",
    year: "2017 - 2020",
    logo: ranchiLogo,
  },

  {
    degree: "Higher Secondary (12th)",
    field: "Science (PCB)",
    institution: "DAV Senior Secondary Public School Ara Kuju, Ramgarh",
    year: "2015 - 2017",
    logo: davLogo,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[120px]" />

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          PGDM student and MERN Stack Developer passionate about business,
          technology, and digital innovation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-xl font-semibold mb-4">
            Who I Am
          </h3>

          <ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed mb-6">
            <li>
              PGDM student in Operations & Marketing Management
            </li>

            <li>
              Full Stack Developer skilled in the MERN stack
            </li>

            <li>
              Interested in business, technology, and innovation
            </li>

            <li>
              Experience through internships and real-world projects
            </li>

            <li>
              Automobile enthusiast and automotive content creator
            </li>

            <li>
              Focused on learning and professional growth
            </li>
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-xl font-semibold mb-4">
            Education
          </h3>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="glass-card rounded-lg p-5 flex items-center gap-4"
              >
                {/* Logo */}
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-14 h-14 object-contain rounded-md bg-white p-1"
                />

                {/* Text */}
                <div>
                  <p className="text-sm text-primary font-medium">
                    {edu.year}
                  </p>

                  <p className="font-heading font-semibold mt-1">
                    {edu.degree}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {edu.field}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="font-heading text-xl font-semibold mb-6 text-center">
          Tech Stack
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="glass-card rounded-lg p-4 flex flex-col items-center gap-2 hover:border-primary/30 transition-colors group cursor-default"
            >
              <skill.icon
                size={28}
                className={`${skill.color} group-hover:scale-110 transition-transform`}
              />

              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;