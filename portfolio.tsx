import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Linkedin, Trophy, Briefcase, GraduationCap, ChevronRight, Award } from "lucide-react";

const resumeData = {
  name: "Tamanna Goswami",
  title: "Legal Professional | Legal Advisory | Corporate Law | Commercial Law | Legal Research | Contract Law | Litigation Support",
  summary: "I am an experienced Legal Administrator with over 4 years of expertise across various legal domains. Renowned for exceptional organizational skills and deep understanding of legal terminology. Demonstrated success in legal research, drafting, and documentation, with a strong commitment to ethical and professional standards. Acknowledged as Employee of the Year in 2020 for outstanding contributions. I aspires to further leverage legal expertise within a dynamic team while pursuing a path to becoming a proficient lawyer and excelling in the legal profession.",
  contact: {
    email: "tamannagoswami1999@gmail.com",
    linkedin: "www.linkedin.com/in/tamanna-goswami",
    location: "London, England, United Kingdom",
  },
  skills: ["Legal teaching", "Law teaching", "Organizational Leadership"],
  achievements: [
    { metric: "Employee of the Year (2020)", context: "Acknowledged for outstanding contributions and commitment to ethical/professional standards." },
    { metric: "70% Reduction", context: "Reduced document retrieval time by developing a systematic filing system, ensuring quick access to legal documents." }
  ],
  experience: [
    { company: "Eversheds Sutherland", role: "Legal PA", dates: "July 2026 - Present (4 months)", location: "London, England, United Kingdom", bullets: [] },
    { company: "Pinsent Masons", role: "Legal PA", dates: "May 2025 - June 2026 (1 year 2 months)", location: "London, United Kingdom", bullets: [] },
    { company: "Pinsent Masons", role: "Team Administrator", dates: "October 2024 - May 2025 (8 months)", location: "Manchester, England, United Kingdom", bullets: [] },
    { company: "Forrest Recruitment Manchester Ltd", role: "Legal Secretary", dates: "August 2024 - May 2025 (10 months)", location: "Manchester Area, United Kingdom", bullets: ["Collaborated with client law firms through this recruiting agency, filling key temporary and contract roles such as Legal Secretary, Receptionist, and Audio Typist.", "Provided administrative support, managed legal documents, and performed accurate audio typing to ensure efficient legal operations.", "Adapted quickly to various law firm environments, maintained confidentiality, and met tight deadlines.", "Managed front desk operations, coordinated client interactions, and assisted legal teams with document preparation and scheduling, consistently delivering high-quality service across diverse legal assignments."] },
    { company: "Stafflex Limited", role: "Teaching Assistant", dates: "April 2024 - August 2024 (5 months)", location: "Huddersfield, England, United Kingdom", bullets: ["Delivered comprehensive law lessons, ensuring clear communication and active student engagement with legal concepts.", "Monitored and assessed student progress, providing detailed feedback to enhance their understanding.", "Conducted parent-teacher conferences to discuss student performance and strategies for improvement.", "Additionally, provided exam support, offering guidance and resolving technical issues."] },
    { company: "McDonald's", role: "Crew Trainer", dates: "February 2023 - March 2024 (1 year 2 months)", location: "United Kingdom", bullets: [] },
    { company: "Balaji Associates", role: "Legal Administrator", dates: "February 2018 - August 2022 (4 years 7 months)", location: "India", bullets: ["Managed expense reports with precision, ensuring timely submissions in compliance with company policies, while providing accurate legal information and prompt responses to clients and colleagues through efficient call handling.", "Organized and maintained multiple legal calendars, prioritized emails, and scheduled meetings to enhance productivity.", "Developed a systematic filing system that reduced document retrieval time by 70% and ensured quick access to legal documents.", "Monitored and responded to legal correspondence promptly, maintaining professional communication standards.", "Edited and formatted legal documents and presentations, ensuring accuracy, clarity, and adherence to legal standards."] }
  ],
  education: [
    { institution: "The University of Huddersfield", degree: "Master of Laws - LLM, International Corporate and Commercial Law", dates: "2022 - 2023" },
    { institution: "Krantiguru Shyamji Krishna Verma Kachchh University, Kachchh (Gujarat)", degree: "Bachelor of Arts - BA, English Literature", dates: "2017 - 2020" }
  ]
};

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respects prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const connectionDistance = 120;

    class Particle {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update(width, height) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100, 200, 255, 0.5)";
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Cap particle count on mobile
      const particleCount = window.innerWidth < 768 ? 40 : 80;
      particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.15 - distance / connectionDistance * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-slate-900 via-slate-950 to-black pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-none" />
    </div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // 1.8s splash screen as requested
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen relative text-slate-200 antialiased selection:bg-cyan-500/30 overflow-hidden font-sans">
      <AnimatedBackground />

      <AnimatePresence>
        {loading && (
          <motion.div 
            key="splash"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-light tracking-[0.2em] text-cyan-500 mb-8 font-serif"
            >
              TG
            </motion.div>
            <div className="w-48 h-[1px] bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <main className="relative w-full max-w-5xl mx-auto px-6 py-12 md:py-24 z-10">
          <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500/50 origin-left z-50" style={{ scaleX }} />

          {}
          <motion.section 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="min-h-[85vh] flex flex-col justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium uppercase tracking-widest mb-2">
              <span className="h-[1px] w-8 bg-cyan-400 block"></span>
              {resumeData.contact.location}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
              {resumeData.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl">
              {resumeData.title}
            </h2>
            
            <p className="text-base md:text-lg text-slate-300 leading-loose max-w-4xl bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm mt-4">
              {resumeData.summary}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#experience" className="px-8 py-3 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded-full hover:bg-cyan-500/30 transition-all shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                View Experience
              </a>
              <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                Download Resume
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-12 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-500"/> {resumeData.contact.email}
              </span>
              <span className="flex items-center gap-2">
                <Linkedin size={16} className="text-cyan-500"/> {resumeData.contact.linkedin}
              </span>
            </div>
          </motion.section>

          {}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-20">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Trophy className="text-yellow-500"/> Impact Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {resumeData.achievements.map((ach, i) => (
                <div key={i} className="group relative p-6 bg-slate-900/40 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all" />
                  <div className="text-3xl font-bold text-cyan-400 mb-2 relative z-10">{ach.metric}</div>
                  <p className="text-slate-400 leading-relaxed text-sm relative z-10">{ach.context}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {}
          <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-20">
            <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3">
              <Briefcase className="text-cyan-500"/> Professional Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
              {resumeData.experience.map((job, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-cyan-500/30 bg-slate-950 group-hover:border-cyan-500 group-hover:bg-cyan-500/10 shadow-[0_0_10px_rgba(34,211,238,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[2px]">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 rounded-2xl backdrop-blur-md transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{job.role}</h4>
                        <div className="text-cyan-400 text-sm font-medium">{job.company}</div>
                      </div>
                      <div className="text-xs text-slate-500 bg-slate-950/50 px-3 py-1 rounded-full whitespace-nowrap">{job.dates}</div>
                    </div>
                    <div className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                      <MapPin size={12}/> {job.location}
                    </div>
                    {job.bullets.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {job.bullets.map((b, i) => (
                          <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                            <ChevronRight size={14} className="text-cyan-600 mt-1 shrink-0" />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-20 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-cyan-500"/> Education
              </h3>
              <div className="space-y-6">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="p-5 bg-slate-900/40 border border-white/10 rounded-2xl">
                    <h4 className="text-white font-medium mb-1">{edu.degree}</h4>
                    <div className="text-sm text-cyan-400 mb-2">{edu.institution}</div>
                    <div className="text-xs text-slate-500">{edu.dates}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <Award className="text-cyan-500"/> Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm hover:border-cyan-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>
        </main>
      )}
    </div>
  );
}