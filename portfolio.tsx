"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Mail, MapPin, Linkedin, Briefcase, GraduationCap, ChevronRight, Award, Send } from "lucide-react";

// --- UPDATED CV DATA ---
const resumeData = {
  name: "Tamanna Goswami",
  title: "Legal Professional | Legal Advisory | Corporate Law | Commercial Law | Legal Research | Contract Law | Litigation Support",
  summary: "Detail-oriented and commercially aware legal professional with an LLM in International Corporate and Commercial Law and over 5 years of comprehensive experience within diverse legal environments. Proven track record in complex document management, legal research and drafting. Highly adept at managing case materials, digital filing and evidence bundling to support cross-functional teams and external counsel.",
  contact: {
    email: "tamannagoswami1999@gmail.com",
    linkedin: "www.linkedin.com/in/tamanna-goswami",
    location: "London, England, United Kingdom",
  },
  skills: [
    "Corporate & Commercial Law", "M&A Legal Frameworks", "Contract Lifecycle Support", 
    "Legal Compliance", "Dispute Resolution", "Document Bundling & Pagination", 
    "Document Engrossments", "Drafting & Correspondence", "Evidence Management", 
    "WIP & Billing Support", "Digital File Conversions", "Case Management", 
    "Critical Thinking", "Client Relations"
  ],
  awards: [
    { 
      metric: "Commendation for Excellence (2021)", 
      context: "Balaji Associates: Awarded for consistently maintaining rigorous standards in legal documentation and client correspondence." 
    },
    { 
      metric: "Employee of the Year (2020)", 
      context: "Balaji Associates: Acknowledged for outstanding overall contributions, adaptability, and dedication to the firm's success." 
    }
  ],
  experience: [
    { 
      company: "Eversheds Sutherland", 
      role: "Legal PA", 
      dates: "July 2026 - Present", 
      location: "London, United Kingdom", 
      bullets: [
        "Provide comprehensive executive support to a Global Head and multiple partners, managing complex day-to-day diaries and coordinating domestic travel itineraries.",
        "Facilitate the end-to-end setup of client events and deliver targeted administrative support for departmental marketing initiatives.",
        "Coordinate complex document management lifecycles, including the preparation of meticulous document bundles, pagination, and metadata removal for client submissions and court filings.",
        "Produce and process critical transactions and case materials, executing document engrossments, detailed comparisons, and secure digital conversions of highly sensitive files.",
        "Draft, review, and manage core legal documentation such as Letters of Engagement, ensuring strict accuracy and compliance with overarching firm policies.",
        "Administer financial processes and matter management by producing Work-in-Progress (WIP) reports, pre-bills, and cashiering tasks for client accounts."
      ] 
    },
    { 
      company: "Pinsent Masons LLP", 
      role: "Legal PA", 
      dates: "May 2025 - June 2026", 
      location: "London, United Kingdom", 
      bullets: [
        "Coordinate complex document management lifecycles, including the preparation of meticulous document bundles, pagination, and metadata removal for client submissions and court filings.",
        "Produce and process critical transactions and case materials, executing document engrossments, detailed comparisons, and secure digital conversions of highly sensitive files.",
        "Draft, review, and manage core legal documentation such as Letters of Engagement, ensuring strict accuracy and compliance with overarching firm policies.",
        "Administer financial processes and matter management by producing Work-in-Progress (WIP) reports, pre-bills, and cashiering tasks for client accounts."
      ] 
    },
    { 
      company: "Pinsent Masons LLP", 
      role: "Team Administrator", 
      dates: "Oct 2024 - April 2025", 
      location: "Manchester, United Kingdom", 
      bullets: [
        "Process and manage expense claims accurately and in a timely manner, ensuring compliance with firm policies and procedures.",
        "Delivered administrative support with printing, document preparation, and general office tasks to ensure smooth daily operations.",
        "Assisted with client billing and disbursement handling, contributing to efficient financial administration and matter management.",
        "Offered proactive support to PAs and lawyers, helping coordinate tasks and resolve administrative issues to enhance team productivity."
      ] 
    },
    { 
      company: "Forrest recruitment", 
      role: "Legal Secretary | Receptionist | Audio Typist", 
      dates: "Jan 2024 - Oct 2024", 
      location: "Manchester, United Kingdom", 
      bullets: [
        "Collaborating with various client law firms through the recruiting agency, filling roles such as Legal Secretary, Receptionist, and Audio Typist on temporary and contract assignments.",
        "Providing comprehensive administrative support, managing legal documents, and performing precise audio typing to ensure smooth operations in diverse legal environments.",
        "Overseeing front desk operations, coordinating client interactions, and supporting legal teams with document preparation and scheduling."
      ] 
    },
    { 
      company: "Stafflex UK Ltd", 
      role: "Teaching Assistant", 
      dates: "Apr 2023 - Dec 2023", 
      location: "Huddersfield, United Kingdom", 
      bullets: [
        "Delivered in-depth law lessons, ensuring clear communication and active engagement with legal concepts.",
        "Monitored and evaluated student progress, offering detailed feedback to enhance their legal understanding.",
        "Provided exam support, including guidance and resolution of technical issues."
      ] 
    },
    { 
      company: "Balaji Associates", 
      role: "Legal Administrator", 
      dates: "Feb 2018 - Aug 2022", 
      location: "Mumbai, India", 
      bullets: [
        "Managed expense reports with precision, ensuring timely submissions in full compliance with company policies. Provided accurate legal information and prompt responses to clients and colleagues by efficiently handling incoming calls.",
        "Organised and maintained multiple legal calendars, priorities emails, and scheduled meetings to optimise workflow and enhance productivity.",
        "Monitored and responded to legal correspondence promptly, maintaining a high standard of professional communication.",
        "Edited and formatted legal documents and presentations, ensuring accuracy, clarity, and strict adherence to legal standards."
      ] 
    }
  ],
  education: [
    { 
      institution: "University of Huddersfield", 
      degree: "LLM, International Corporate and Commercial Law (Distinction)", 
      dates: "2022 - 2023",
      notes: "Dissertation: Review of Legal Frameworks Employed to Oversee Cross-Border Mergers and Acquisitions in the EU"
    },
    { 
      institution: "K.S.K. Verma Kutch University", 
      degree: "Bachelor of Arts, English Literature (Distinction)", 
      dates: "2017 - 2020",
      notes: "Dissertation: Exploring Themes of Identity in Modern Indian Literature."
    }
  ]
};

// --- WEBSITE LAYOUT & COMPONENTS ---
export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <motion.div 
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
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="relative w-full max-w-5xl mx-auto px-6 py-12 md:py-24 z-10">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500/50 origin-left z-50" style={{ scaleX }} />

      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeInUp}
        className="min-h-[85vh] flex flex-col justify-center gap-6"
      >
        <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium uppercase tracking-widest mb-2">
          <span className="h-[1px] w-8 bg-cyan-400 block"></span>
          London, England, UK
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
          <a href="#contact" className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
            Get In Touch
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-12 text-sm text-slate-400">
          <span className="flex items-center gap-2"><Mail size={16} className="text-cyan-500"/> {resumeData.contact.email}</span>
          <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Linkedin size={16} className="text-cyan-500"/> LinkedIn Profile
          </a>
        </div>
      </motion.section>

      {/* Awards & Recognitions */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-20">
        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"><Award className="text-yellow-500"/> Awards & Recognitions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.awards.map((ach, i) => (
            <div key={i} className="group relative p-6 bg-slate-900/40 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all" />
              <div className="text-xl font-bold text-cyan-400 mb-2">{ach.metric}</div>
              <p className="text-slate-400 leading-relaxed text-sm">{ach.context}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-20">
        <h3 className="text-2xl font-semibold text-white mb-10 flex items-center gap-3"><Briefcase className="text-cyan-500"/> Professional Experience</h3>
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
                <div className="text-xs text-slate-500 mb-4 flex items-center gap-1"><MapPin size={12}/> {job.location}</div>
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

      {/* Education & Skills */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"><GraduationCap className="text-cyan-500"/> Education</h3>
          <div className="space-y-6">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="p-5 bg-slate-900/40 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all">
                <h4 className="text-white font-medium mb-1 leading-snug">{edu.degree}</h4>
                <div className="text-sm text-cyan-400 mb-2">{edu.institution}</div>
                <div className="text-xs text-slate-500 mb-3">{edu.dates}</div>
                {edu.notes && (
                  <div className="text-xs text-slate-400 bg-white/5 p-3 rounded-lg border border-white/5">
                    {edu.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3"><Award className="text-cyan-500"/> Core Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {resumeData.skills.map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm hover:border-cyan-500/50 hover:bg-cyan-900/20 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-20 border-t border-white/10 mt-12">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-white mb-4">Get In Touch</h3>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Feel free to reach out regarding legal consultation, professional opportunities, or simply to connect.
          </p>
          
          <form 
            action={`mailto:${resumeData.contact.email}`} 
            method="POST" 
            encType="text/plain" 
            className="space-y-5 text-left bg-slate-900/40 p-8 rounded-2xl border border-white/10"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="Name" 
                required 
                className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 text-white transition-colors" 
                placeholder="Jane Doe" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                name="Message" 
                required 
                rows={5} 
                className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 text-white transition-colors resize-none" 
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </motion.section>
    </main>
  );
}
