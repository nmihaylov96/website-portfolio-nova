import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0d1424] text-white overflow-hidden">
      <CursorGlow />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="animated-blob bg-blue-500/10 w-[500px] h-[500px] top-[-80px] left-[-80px]" />
        <div className="animated-blob bg-purple-500/10 w-[400px] h-[400px] top-[50%] right-[-100px]" style={{ animationDelay: "-7s" }} />
        <div className="animated-blob bg-indigo-500/8 w-[600px] h-[600px] bottom-[-150px] left-[15%]" style={{ animationDelay: "-14s" }} />
      </div>

      <Navbar />

      <section className="relative pt-36 pb-24 md:pt-52 md:pb-36 px-6 md:px-12 max-w-7xl mx-auto z-10 flex flex-col justify-center min-h-screen">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl">

          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-semibold tracking-widest uppercase mb-8 text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t("hero.tag")}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-[clamp(2.8rem,7vw,6rem)] leading-[1.08] font-black tracking-tight text-gradient mb-6"
          >
            {t("hero.headline")}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              href="/work"
              data-testid="link-view-work"
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(96,165,250,0.35)] transition-all flex items-center gap-2 text-sm"
            >
              {t("hero.cta.work")} <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              data-testid="link-contact"
              className="px-8 py-4 rounded-full glass-card font-semibold hover:-translate-y-1 transition-all text-sm"
            >
              {t("hero.cta.contact")}
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <div className="glass-card px-6 py-5 rounded-2xl">
              <div className="text-3xl font-black text-gradient-primary mb-1">{t("hero.stat.years.value")}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{t("hero.stat.years.label")}</div>
            </div>
            <div className="glass-card px-6 py-5 rounded-2xl">
              <div className="text-3xl font-black text-gradient-primary mb-1">{t("hero.stat.projects.value")}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{t("hero.stat.projects.label")}</div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 z-10 relative">
        <p>© {new Date().getFullYear()} NOVA. {t("footer.text")}</p>
      </footer>
    </div>
  );
}
