import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Github, 
  Calendar, 
  ArrowRight,
  Play,
  CheckCircle2,
  Download
} from 'lucide-react';
import { PROJECTS, EXPERIENCES, SKILL_GROUPS, CERTIFICATIONS } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [showLoom, setShowLoom] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Scroll-based color transformation (fading effect)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isDarkMode 
      ? ['#052e16', '#064e3b', '#022c22'] 
      : ['#ffffff', '#f0fdf4', '#dcfce7']
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const readPortfolio = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const textToRead = `
      Hey, I'm Arjun Sharma. I bridge the gap between technical products and business outcomes.
      I've raised 6.2 lakh in revenue and closed 11 deals with a 34 percent conversion rate.
      My experience includes being the Vice President of Sponsorship at E-Cell Pune and Marketing Lead at GDSC.
      I specialize in discovery, product demonstrations, and objection handling.
      Let's connect and build something great together.
    `;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => {
      setIsReading(false);
      setShowLoom(true); // Auto-show video after reading
    };
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="min-h-screen font-sans selection:bg-primary/30"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-primary/10 bg-background/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold text-primary"
          >
            AS <span className="text-foreground">✦</span>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={readPortfolio}
              className={cn(
                "p-2 rounded-full transition-all hover:scale-110",
                isReading ? "bg-primary text-white animate-pulse" : "bg-primary/10 text-primary"
              )}
              title="AI Read Portfolio"
            >
              {isReading ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-primary/10 text-primary transition-all hover:scale-110"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href="#contact" 
              className="hidden sm:block px-4 py-2 bg-primary text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <section className="pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to SE & Solutions Roles
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight"
          >
            Hey, I'm <span className="text-primary">Arjun Sharma</span> 👋
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I bridge the gap between technical products and business outcomes — through demos, discovery, and storytelling that converts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['🔧 Sales Engineer', '💡 Solutions Consultant', '📊 Pre-Sales', '🚀 Growth'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 text-sm font-medium hover:bg-primary/10 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button 
              onClick={() => setShowLoom(true)}
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95"
            >
              <Play size={20} fill="currentColor" /> Watch My Demo
            </button>
            <a 
              href="#resume"
              className="px-8 py-4 bg-primary/5 border border-primary/20 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/10 transition-all"
            >
              <Download size={20} /> View Resume
            </a>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Revenue Raised', value: '₹6.2L' },
              { label: 'Deals Closed', value: '11' },
              { label: 'Pitch Conversion', value: '34%' },
              { label: 'Users Onboarded', value: '300+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-primary/5 border border-primary/10 text-center hover:bg-primary/10 transition-colors"
              >
                <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Loom Video Section */}
        <AnimatePresence>
          {showLoom && (
            <motion.section 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="py-12 overflow-hidden"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <iframe 
                  src="https://www.loom.com/embed/your-loom-id-here" 
                  frameBorder="0" 
                  webkitallowfullscreen="true" 
                  mozallowfullscreen="true" 
                  allowFullScreen 
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={() => setShowLoom(false)}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Close Video
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-primary/20" />
            <h2 className="text-3xl font-display font-bold">Proof of <span className="text-primary">Work</span></h2>
            <div className="h-px flex-1 bg-primary/20" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-primary/5 border border-primary/10 hover:border-primary/40 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-6xl">{project.icon}</span>
                </div>
                <div className="text-3xl mb-6">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded-md bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                  View Project <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Where I've <span className="text-primary">Operated</span></h2>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary/20"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="mb-2 flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {exp.period}
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 mt-4">
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.metrics.map(metric => (
                      <span key={metric} className="px-3 py-1 rounded-lg bg-primary/10 text-[10px] font-bold text-primary">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILL_GROUPS.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-primary/5 border border-primary/10"
              >
                <h3 className="text-lg font-bold mb-6 text-primary">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-xl bg-background border border-primary/10 text-sm hover:border-primary/40 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <h2 className="text-2xl font-display font-bold mb-8">Credibility & <span className="text-primary">Certs</span></h2>
          <div className="overflow-x-auto rounded-3xl border border-primary/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="p-4 text-xs font-bold uppercase text-primary">Certification</th>
                  <th className="p-4 text-xs font-bold uppercase text-primary">Platform</th>
                  <th className="p-4 text-xs font-bold uppercase text-primary">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {CERTIFICATIONS.map((cert) => (
                  <tr key={cert.name} className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 text-sm font-medium">{cert.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{cert.platform}</td>
                    <td className="p-4">
                      <span className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase",
                        cert.status === 'done' ? "bg-green-500/10 text-green-600" : "bg-yellow-500/10 text-yellow-600"
                      )}>
                        {cert.status === 'done' ? <CheckCircle2 size={12} /> : null}
                        {cert.status === 'done' ? 'Verified' : 'In Progress'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">Want to <span className="text-primary">Connect?</span></h2>
            <p className="text-muted-foreground mb-12">I'm actively exploring SE and solutions roles. Let's set up a 15-minute call.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <Mail size={20} />, label: 'Email', href: 'mailto:mancc81@gmail.com' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' },
                { icon: <Github size={20} />, label: 'GitHub', href: '#' },
                { icon: <Calendar size={20} />, label: 'Book a Call', href: '#' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary hover:text-white hover:border-primary transition-all font-bold"
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 border-t border-primary/10 text-center text-sm text-muted-foreground">
        <p>Built with intention by Arjun Sharma · 2026 · Pune, India</p>
        <p className="mt-2 opacity-50">Vite + React + Tailwind + AI Voice</p>
      </footer>
    </motion.div>
  );
}
