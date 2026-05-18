import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0d1424] text-white overflow-hidden">
      <CursorGlow />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="animated-blob bg-blue-500/10 w-[500px] h-[500px] top-[10%] left-[-100px]" />
        <div className="animated-blob bg-purple-500/12 w-[450px] h-[450px] bottom-[5%] right-[-100px]" style={{ animationDelay: "-8s" }} />
      </div>

      <Navbar />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-3xl w-full py-24"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-semibold tracking-widest uppercase mb-8 text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Contact
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-gradient leading-tight"
          >
            {t("contact.title")}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed"
          >
            {t("contact.subtitle")}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              data-testid="link-email-cta"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white text-black font-bold text-base hover:scale-105 hover:shadow-[0_0_36px_rgba(255,255,255,0.2)] transition-all"
            >
              <Mail className="w-4 h-4" />
              {t("contact.btn")}
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16 pt-12 border-t border-white/5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{t("contact.email.label")}</p>
            <a
              href="mailto:hello@example.com"
              data-testid="link-email-direct"
              className="inline-flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors group"
            >
              hello@example.com
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 z-10 relative">
        <p>© {new Date().getFullYear()} NOVA. {t("footer.text")}</p>
      </footer>
    </div>
  );
}
