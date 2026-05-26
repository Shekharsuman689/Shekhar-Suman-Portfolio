// import { motion } from "framer-motion";
// import { Download, Briefcase, GraduationCap, Wrench } from "lucide-react";

// const experience = [
//   {
//     role: "Full Stack Developer (Freelance)",
//     company: "Self-Employed",
//     period: "2024 - Present",
//     desc: "Building full-stack web applications for clients using React, Node.js, and MongoDB.",
//   },
//   {
//     role: "Teaching Assistant Intern",
//     company: "AlmaBetter",
//     period: "July 2024 - September 2024",
//     desc: "Worked as a Teaching Assistant at AlmaBetter, resolving daily queries of 10–15 students and supporting them in understanding full-stack development concepts.",
//   },
// ];

// const ResumeSection = () => (
//   <section id="resume" className="py-24 relative">
//     <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />
//     <div className="container mx-auto px-6">
//       <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
//         <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
//           My <span className="gradient-text">Resume</span>
//         </h2>
//         <p className="text-muted-foreground text-center mb-8">A summary of my professional journey</p>
//         <div className="flex justify-center mb-16">
//           <a
//             // href="#"
//             href="/Shekhar_Suman_Cv.pdf"
//             download = "Shekhar_Suman_Cv.pdf"
      
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
//           >
//             <Download size={18} /> Download Resume
//           </a>
//         </div>
//       </motion.div>

//       <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
//         {/* Experience */}
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//           <div className="flex items-center gap-2 mb-6">
//             <Briefcase size={20} className="text-primary" />
//             <h3 className="font-heading text-xl font-semibold">Experience</h3>
//           </div>
//           <div className="space-y-4">
//             {experience.map((exp, i) => (
//               <div key={i} className="glass-card rounded-lg p-5 border-l-2 border-primary">
//                 <p className="text-sm text-primary font-medium">{exp.period}</p>
//                 <p className="font-heading font-semibold mt-1">{exp.role}</p>
//                 <p className="text-sm text-muted-foreground">{exp.company}</p>
//                 <p className="text-sm text-muted-foreground mt-2">{exp.desc}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Skills summary */}
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
//           <div className="flex items-center gap-2 mb-6">
//             <Wrench size={20} className="text-primary" />
//             <h3 className="font-heading text-xl font-semibold">Core Skills</h3>
//           </div>
//           <div className="glass-card rounded-lg p-5 space-y-4">
//             {[
//               { name: "React.js / Next.js", level: 90 },
//               { name: "Node.js / Express", level: 85 },
//               { name: "MongoDB", level: 80 },
//               { name: "JavaScript / TypeScript", level: 88 },
//               { name: "Tailwind CSS", level: 92 },
//               { name: "Git & DevOps", level: 75 },
//             ].map((skill) => (
//               <div key={skill.name}>
//                 <div className="flex justify-between text-sm mb-1">
//                   <span>{skill.name}</span>
//                   <span className="text-muted-foreground">{skill.level}%</span>
//                 </div>
//                 <div className="h-2 rounded-full bg-muted overflow-hidden">
//                   <motion.div
//                     className="h-full rounded-full"
//                     style={{ background: "var(--gradient-primary)" }}
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1, delay: 0.3 }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// export default ResumeSection;

import { motion } from "framer-motion";
import { Download, Briefcase, Wrench } from "lucide-react";

const experience = [
  {
    role: "Full Stack Developer (Freelance)",
    company: "Self-Employed",
    period: "2024 - Present",
    desc: "Building full-stack web applications for clients using React, Node.js, and MongoDB.",
    logo: "/freelancer-logo.jpg",
  },
  {
    role: "Teaching Assistant Intern",
    company: "AlmaBetter",
    period: "July 2024 - September 2024",
    desc: "Worked as a Teaching Assistant at AlmaBetter, resolving daily queries of 10–15 students and supporting them in understanding full-stack development concepts.",
    logo: "/almabetter-logo.jpeg",
  },
];

const skills = [
  { name: "React.js / Next.js", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Git & DevOps", level: 75 },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative">
      {/* Background Blur */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="gradient-text">Resume</span>
          </h2>

          <p className="text-muted-foreground text-center mb-8">
            A summary of my professional journey
          </p>

          {/* Resume Download Button */}
          <div className="flex justify-center mb-16">
            <a
              href="/Shekhar_Suman_Cv.pdf"
              download="Shekhar_Suman_Cv.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={20} className="text-primary" />
              <h3 className="font-heading text-xl font-semibold">
                Experience
              </h3>
            </div>

            <div className="space-y-5">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-5 border-l-4 border-primary hover:translate-x-1 transition-transform"
                >
                  {/* Company */}
                  <div className="flex items-center gap-3 mb-2">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 rounded-md object-contain bg-white p-1"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center text-sm font-bold text-primary">
                        {exp.company.charAt(0)}
                      </div>
                    )}

                    <div>
                      <p className="font-heading font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* Role */}
                  <p className="font-heading font-semibold mt-3">
                    {exp.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Wrench size={20} className="text-primary" />
              <h3 className="font-heading text-xl font-semibold">
                Core Skills
              </h3>
            </div>

            <div className="glass-card rounded-xl p-6 space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "var(--gradient-primary)",
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;