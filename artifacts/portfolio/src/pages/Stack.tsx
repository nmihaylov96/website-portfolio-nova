import { motion } from "framer-motion";
import { Layout, Zap, Figma, Terminal } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Stack() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Layout className="w-9 h-9 text-primary" />,
      titleKey: "stack.fe.title",
      descKey: "stack.fe.desc",
      tags: ["HTML / CSS / JS", "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      span: "md:col-span-2",
      gradient: "from-primary/5",
    },
    {
      icon: <Zap className="w-9 h-9 text-secondary" />,
      titleKey: "stack.perf.title",
      descKey: "stack.perf.desc",
      tags: ["Lighthouse", "Core Web Vitals", "Web Performance"],
      span: "md:col-span-1",
      gradient: "from-secondary/5",
    },
    {
      icon: <Figma className="w-9 h-9 text-pink-400" />,
      titleKey: "stack.design.title",
      descKey: "stack.design.desc",
      tags: ["Figma", "Design Tokens", "UI Systems", "Glassmorphism"],
      span: "md:col-span-1",
      gradient: "from-pink-500/5",
    },
    {
      icon: <Terminal className="w-9 h-9 text-white" />,
      titleKey: "stack.beyond.title",
      descKey: "stack.beyond.desc",
      tags: ["Node.js", "PostgreSQL", "REST API", "Vercel", "Docker"],
      span: "md:col-span-2",
      gradient: "from-white/5",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0d1424] text-white overflow-hidden">
      <CursorGlow />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="animated-blob bg-blue-500/10 w-[500px] h-[500px] top-[-80px] right-[-80px]" style={{ animationDelay: "-3s" }} />
        <div className="animated-blob bg-purple-500/10 w-[400px] h-[400px] bottom-[10%] left-[-80px]" style={{ animationDelay: "-10s" }} />
      </div>

      <Navbar />

      <div className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto z-10">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16 pt-8 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-gradient">
            {t("stack.title")}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            {t("stack.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map(({ icon, titleKey, descKey, tags, span, gradient }) => (
            <motion.div
              key={titleKey}
              variants={fadeInUp}
              className={`glass-card p-8 rounded-3xl flex flex-col gap-5 group bg-gradient-to-br ${gradient} to-transparent ${span}`}
            >
              <div className="group-hover:scale-110 transition-transform duration-300 w-fit">
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t(titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{t(descKey)}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 z-10 relative mt-16">
        <p>© {new Date().getFullYear()} NOVA. {t("footer.text")}</p>
      </footer>
    </div>
  );
}
