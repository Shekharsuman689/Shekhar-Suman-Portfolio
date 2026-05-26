// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Send, Mail, Phone, Linkedin, Github, Loader2, Facebook, Instagram } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import emailjs from "@emailjs/browser";

// const ContactSection = () => {
//   const { toast } = useToast();
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.message) {
//       toast({ title: "Please fill all fields", variant: "destructive" });
//       return;
//     }

//     setLoading(true);
//     try {
//       await emailjs.send(
//         "service_b2c8g99",
//         "template_hyeiskk",
//         {
//           from_name: form.name,
//           from_email: form.email,
//           message: form.message,
//         },
//         "K16LIrSjtJ4KsB78v"
//       );
//       toast({ title: "Message sent! ✅", description: "I'll get back to you soon." });
//       setForm({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       toast({ title: "Failed to send ❌", description: "Please try again.", variant: "destructive" });
//     }
//     setLoading(false);
//   };

//   return (
//     <section id="contact" className="py-24 relative">
//       <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />
//       <div className="container mx-auto px-6">
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
//           <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
//             Get In <span className="gradient-text">Touch</span>
//           </h2>
//           <p className="text-muted-foreground text-center mb-16">Let's work together</p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
//           {/* Info */}
//           <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
//             <h3 className="font-heading text-xl font-semibold">Contact Info</h3>
//             <div className="space-y-4">
//               <a href="mailto:shekharsuman689@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
//                 <Mail size={20} className="text-primary" />
//                 shekharsuman689@gmail.com
//               </a>
//               <div className="flex items-center gap-3 text-muted-foreground">
//                 <Phone size={20} className="text-primary" />
//                 +91 7209712408
//               </div>
//             </div>

//             <h3 className="font-heading text-xl font-semibold pt-4">Follow Me</h3>
//             <div className="flex gap-4">
//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/in/shekhar-suman-933a91279/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
//                 <Linkedin size={20} />
//               </a>
//               {/* GitHub */}
//               <a
//                 href="https://github.com/Shekharsuman689"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
//                 <Github size={20} />
//               </a>
//               {/* Facebook */}
//               <a
//                 href="https://www.facebook.com/shekharsuman112"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
//                 <Facebook size={20} />
//               </a>
//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/shekharsuman1199/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </motion.div>

//           {/* Form */}
//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="glass-card rounded-xl p-6 space-y-4"
//           >
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows={5}
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
//             >
//               {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  Linkedin,
  Github,
  Loader2,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_b2c8g99",
        "template_hyeiskk",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "K16LIrSjtJ4KsB78v"
      );

      toast({
        title: "Message sent! ✅",
        description: "I'll get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast({
        title: "Failed to send ❌",
        description: "Please try again.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Blur */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-muted-foreground text-center mb-16">
            Let's work together
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-heading text-xl font-semibold">
              Contact Info
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:shekharsuman689@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} className="text-primary" />
                shekharsuman689@gmail.com
              </a>

              {/* Phone */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-primary" />
                +91 7209712408
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading text-xl font-semibold pt-4 mb-4">
                Follow Me
              </h3>

              <div className="flex gap-4 flex-wrap">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shekhar-suman-933a91279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Shekharsuman689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:scale-110"
                >
                  <Github size={20} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/shekharsuman112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:scale-110"
                >
                  <Facebook size={20} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/shekharsuman1199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-pink-500 hover:border-pink-500/30 transition-all hover:scale-110"
                >
                  <Instagram size={20} />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@shekharsuman9098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-red-500 hover:border-red-500/30 transition-all hover:scale-110"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 space-y-4"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}

              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;