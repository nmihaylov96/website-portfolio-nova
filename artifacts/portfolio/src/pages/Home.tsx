import { motion } from "framer-motion";
import { CursorGlow } from "@/components/CursorGlow";
import { ArrowUpRight, Code2, Cpu, Figma, Github, Layout, Layers, Terminal, Zap } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0b1120] text-white selection:bg-primary/30 selection:text-white overflow-hidden">
      <CursorGlow />
      
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="animated-blob bg-blue-500/20 w-[600px] h-[600px] top-[-100px] left-[-100px]" style={{ animationDelay: '0s' }} />
        <div className="animated-blob bg-purple-500/20 w-[500px] h-[500px] top-[40%] right-[-150px]" style={{ animationDelay: '-5s' }} />
        <div className="animated-blob bg-indigo-500/10 w-[700px] h-[700px] bottom-[-200px] left-[20%]" style={{ animationDelay: '-10s' }} />
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 glass-nav py-4 px-6 md:px-12 flex items-center justify-between"
      >
        <div className="text-xl font-black tracking-tighter text-gradient-primary uppercase">NOVA</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Hire Me
        </a>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto z-10 flex flex-col justify-center min-h-[90vh]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold tracking-widest uppercase mb-8 text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-[clamp(3rem,8vw,7rem)] leading-[1.05] font-black tracking-tight text-gradient mb-6"
          >
            I build modern <br />
            web experiences.
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            Crafting cinematic, high-performance interfaces that bridge the gap between rigorous engineering and bold design. Every pixel intentional, every interaction alive.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#work" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-all flex items-center gap-2">
              View Work <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass-card font-semibold hover:-translate-y-1 transition-all">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            <div className="glass-card p-5 rounded-2xl">
              <div className="text-3xl font-black text-gradient-primary mb-1">3+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
            <div className="glass-card p-5 rounded-2xl">
              <div className="text-3xl font-black text-gradient-primary mb-1">20+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Projects Shipped</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Selected Work</h2>
          <p className="text-muted-foreground max-w-xl">Deep dives into recent projects focusing on performance, brand identity, and scalable architecture.</p>
        </motion.div>

        <div className="space-y-24">
          {/* Project 1 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="group grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-7 rounded-3xl overflow-hidden glass-card p-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://image.thum.io/get/width/1200/crop/630/noanimate/https://www.rolltech-doors.com" 
                alt="Rolltech Doors" 
                className="w-full h-auto rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="md:col-span-5 flex flex-col gap-6 md:pl-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Featured Case Study</div>
                <h3 className="text-3xl font-bold mb-4">Rolltech Doors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Industrial brand redesign focused on trust and conversion. Full redesign and frontend development with focus on performance, clarity and user trust.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="glass-card px-4 py-2 rounded-xl text-sm font-semibold">
                  <span className="text-primary">+38%</span> Leads
                </div>
                <div className="glass-card px-4 py-2 rounded-xl text-sm font-semibold">
                  <span className="text-primary">95+</span> Perf
                </div>
              </div>
              <a href="https://www.rolltech-doors.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors w-fit pb-1 border-b border-white/20 hover:border-primary">
                Visit Live Site <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="group grid md:grid-cols-12 gap-8 items-center"
          >
             <div className="md:col-span-5 flex flex-col gap-6 md:pr-8 order-2 md:order-1">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Portfolio System</div>
                <h3 className="text-3xl font-bold mb-4">Nikolay Mihaylov</h3>
                <p className="text-muted-foreground leading-relaxed">
                  High-end personal branding website system. Designed to showcase developers, freelancers and creators in a premium way with custom CMS integrations.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="glass-card px-4 py-2 rounded-xl text-sm font-semibold">
                  <span className="text-secondary">100%</span> Responsive
                </div>
                <div className="glass-card px-4 py-2 rounded-xl text-sm font-semibold">
                  Custom CMS
                </div>
              </div>
              <a href="https://www.nikolaymihaylovportfolio.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-secondary transition-colors w-fit pb-1 border-b border-white/20 hover:border-secondary">
                Visit Live Site <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="md:col-span-7 rounded-3xl overflow-hidden glass-card p-2 relative order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://image.thum.io/get/width/1200/crop/630/noanimate/https://www.nikolaymihaylovportfolio.com" 
                alt="Portfolio System" 
                className="w-full h-auto rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack & Bento Grid */}
      <section id="stack" className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">The Stack</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Tools and philosophies I use to build scalable, beautiful digital experiences.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card p-8 rounded-3xl md:col-span-2 flex flex-col justify-between group"
          >
            <div>
              <Layout className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Frontend Engineering</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Deep expertise in modern React ecosystems, building component-driven interfaces that are robust, accessible, and maintainable.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm">{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card p-8 rounded-3xl flex flex-col justify-between group"
          >
            <div>
              <Zap className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Performance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Obsessed with Core Web Vitals, optimal rendering patterns, and achieving perfect 100s in Lighthouse.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card p-8 rounded-3xl flex flex-col justify-between group"
          >
            <div>
              <Figma className="w-10 h-10 text-pink-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Design Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bridging the gap between Figma and code with exact precision and scalable token architectures.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card p-8 rounded-3xl md:col-span-2 flex flex-col justify-between bg-gradient-to-br from-white/5 to-primary/5 group"
          >
            <div>
              <Terminal className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-3">Beyond The Browser</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comfortable throughout the full stack. Experience building performant APIs, integrating custom CMS solutions, and orchestrating deployment pipelines.
              </p>
            </div>
             <div className="flex flex-wrap gap-2 mt-6">
              {['Node.js', 'PostgreSQL', 'GraphQL', 'Vercel', 'Docker'].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-7xl font-black tracking-tight mb-6 text-gradient"
          >
            Let's build something premium.
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Currently accepting new clients and opportunities. If you're looking for an engineer who treats development as a craft, let's talk.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 z-10 relative">
        <p>© {new Date().getFullYear()} NOVA Portfolio. Crafted with intention.</p>
      </footer>
    </div>
  );
}
