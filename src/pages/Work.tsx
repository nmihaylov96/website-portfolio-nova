import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Rocket } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const featuredProject = {
  title: "Elysian Real Estates",
  desc: "Premium real estate platform with focus on UX, performance and conversion.",
  img: "https://image.thum.io/get/width/1600/crop/900/noanimate/https://elysian-realestates.vercel.app",
  link: "https://elysian-realestates.vercel.app",
  impact: "+52% engagement rate",
};

const projects = [
  {
    title: "Rolltech Doors",
    desc: "Industrial door systems with SEO-focused architecture.",
    img: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://www.rolltech-doors.com",
    link: "https://www.rolltech-doors.com",
    tags: ["SEO", "Performance", "UI"],
    impact: "x2 organic traffic",
  },
  {
    title: "Portfolio System",
    desc: "Personal portfolio system with scalable structure.",
    img: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://www.nikolaymihaylovportfolio.com",
    link: "https://www.nikolaymihaylovportfolio.com",
    tags: ["React", "Motion", "UX"],
    impact: "95+ Lighthouse",
  },
  {
    title: "Elysian Lite",
    desc: "Fast real estate listing platform with modern UI system.",
    img: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://elysian-realestates.vercel.app",
    link: "https://elysian-realestates.vercel.app",
    tags: ["Next.js", "SEO", "Speed"],
    impact: "Sub-1s load time",
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand goals, users and business context.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Build structure, UX flow and visual system.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Turn design into fast, scalable web systems.",
  },
  {
    num: "04",
    title: "Optimize",
    desc: "Improve speed, SEO and conversion performance.",
  },
];

export default function Work() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0d1424] text-white overflow-x-hidden">
      <CursorGlow />
      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-3xl top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl top-[40%] right-[-200px]" />
      </div>

      {/* HEADER */}
      <section className="relative z-10 pt-28 pb-16 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-primary text-xs uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Selected Work
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black leading-tight text-gradient"
          >
            Work that actually performs
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mt-5 max-w-xl text-lg"
          >
            I design and build websites focused on performance, UX and real business impact.
          </motion.p>
        </motion.div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass-card rounded-3xl overflow-hidden group"
        >
          <div className="grid md:grid-cols-2">
            <img
              src={featuredProject.img}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700"
            />
            <div className="p-10 flex flex-col justify-center">
              <div className="text-xs text-primary uppercase tracking-widest mb-3">
                Featured Case Study
              </div>
              <h2 className="text-3xl font-black mb-3">
                {featuredProject.title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {featuredProject.desc}
              </p>

              <div className="text-primary font-bold mb-6">
                {featuredProject.impact}
              </div>

              <a
                href={featuredProject.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-bold"
              >
                Visit project <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS GRID */}
      <section className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto mb-28">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1 },
                },
              }}
              className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {p.desc}
                </p>

                <div className="flex gap-2 flex-wrap mt-4">
                  {p.tags.map((t) => (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-primary font-bold text-sm">
                  {p.impact}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  className="inline-flex mt-4 text-sm font-bold items-center gap-2"
                >
                  View <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS (TIMELINE FEEL) */}
      <section className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto mb-28">
        <motion.div variants={stagger} initial="hidden" whileInView="visible">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-black text-gradient mb-12"
          >
            How I work
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                className="relative glass-card p-6 rounded-2xl"
              >
                <div className="text-4xl font-black opacity-20">{s.num}</div>
                <h3 className="font-bold mt-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative z-10 text-center pb-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-black mb-4">
            Let’s build something powerful
          </h2>
          <p className="text-muted-foreground mb-8">
            Open for freelance & collaborations
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition"
          >
            Contact me <Rocket className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-white/5">
        © {new Date().getFullYear()} NOVA. All rights reserved.
      </footer>
    </div>
  );
}