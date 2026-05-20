import { motion } from "framer-motion";
import { Layout, Zap, Figma, Terminal, Code2, Globe, Database, Cpu, Sparkles } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const toolGroups = [
  {
    label: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    color: "text-primary",
    border: "border-primary/20",
    tools: ["HTML5", "CSS3", "JavaScript ES2024", "TypeScript", "React 19", "Next.js 15", "Vite", "Framer Motion", "Tailwind CSS", "GSAP"],
  },
  {
    label: "Design",
    icon: <Figma className="w-5 h-5" />,
    color: "text-pink-400",
    border: "border-pink-500/20",
    tools: ["Figma", "Design Tokens", "Glassmorphism", "Motion Design", "Responsive UI", "Accessibility", "Typography Systems"],
  },
  {
    label: "Performance",
    icon: <Zap className="w-5 h-5" />,
    color: "text-yellow-400",
    border: "border-yellow-500/20",
    tools: ["Core Web Vitals", "Lighthouse 95+", "Image Optimization", "Code Splitting", "Lazy Loading", "Bundle Analysis", "SEO"],
  },
  {
    label: "Backend",
    icon: <Terminal className="w-5 h-5" />,
    color: "text-secondary",
    border: "border-secondary/20",
    tools: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Drizzle ORM", "Zod", "JWT Auth"],
  },
  {
    label: "Tooling",
    icon: <Cpu className="w-5 h-5" />,
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    tools: ["Git / GitHub", "Docker", "Vercel", "Netlify", "CI/CD", "ESLint", "Prettier", "VS Code"],
  },
  {
    label: "CMS & Integrations",
    icon: <Database className="w-5 h-5" />,
    color: "text-orange-400",
    border: "border-orange-500/20",
    tools: ["Sanity CMS", "Contentful", "Strapi", "Webhooks", "REST APIs", "Third-party SDKs"],
  },
];

const mainCards = [
  {
    icon: <Layout className="w-10 h-10 text-primary" />,
    titleKey: "stack.fe.title",
    descKey: "stack.fe.desc",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    span: "md:col-span-2",
    gradient: "from-primary/10",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    titleKey: "stack.perf.title",
    descKey: "stack.perf.desc",
    tags: ["Lighthouse", "Core Web Vitals"],
    span: "md:col-span-1",
    gradient: "from-yellow-500/10",
  },
  {
    icon: <Figma className="w-10 h-10 text-pink-400" />,
    titleKey: "stack.design.title",
    descKey: "stack.design.desc",
    tags: ["Figma", "Design Systems"],
    span: "md:col-span-1",
    gradient: "from-pink-500/10",
  },
  {
    icon: <Terminal className="w-10 h-10 text-secondary" />,
    titleKey: "stack.beyond.title",
    descKey: "stack.beyond.desc",
    tags: ["Node.js", "PostgreSQL", "Vercel"],
    span: "md:col-span-2",
    gradient: "from-secondary/10",
  },
];

export default function Stack() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0d1424] text-white overflow-x-hidden">
      <CursorGlow />
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="animated-blob bg-blue-500/10 w-[500px] h-[500px] top-[-80px] right-[-80px]" style={{ animationDelay: "-3s" }} />
        <div className="animated-blob bg-purple-500/10 w-[400px] h-[400px] bottom-[10%] left-[-80px]" style={{ animationDelay: "-10s" }} />
      </div>
      <Navbar />

      {/* Header */}
      <section className="relative z-10 pt-40 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            {t("stack.title")}
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight text-gradient mb-5">
            {t("stack.title")}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            {t("stack.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Main bento cards */}
      <section className="relative z-10 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {mainCards.map(({ icon, titleKey, descKey, tags, span, gradient }) => (
            <motion.div
              key={titleKey}
              variants={fadeUp}
              className={`glass-card p-8 rounded-3xl flex flex-col gap-5 group bg-gradient-to-br ${gradient} to-transparent hover:-translate-y-2 transition-all duration-300 ${span}`}
            >
              <div className="group-hover:scale-110 transition-transform duration-300 w-fit">{icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t(titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Detailed tool list */}
      <section className="relative z-10 pb-28 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 mb-4">
            <Code2 className="w-3.5 h-3.5" />
            Всички инструменти
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {toolGroups.map(({ label, icon, color, border, tools }, i) => (
              <motion.div
                key={label}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.07 } } }}
                className={`glass-card rounded-2xl p-6 border ${border} flex flex-col gap-4`}
              >
                <div className={`flex items-center gap-2 ${color} font-bold text-sm`}>
                  {icon}
                  {label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-muted-foreground">{tool}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-white/5">
        <p>© {new Date().getFullYear()} NOVA. {t("footer.text")}</p>
      </footer>
    </div>
  );
}
