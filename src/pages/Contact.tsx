import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Clock, Calendar, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const infoCards = [
  { icon: <Mail className="w-5 h-5" />, labelKey: "contact.email.label", valueKey: "contact.avail.value", value: "hello@example.com", color: "text-primary", border: "border-primary/20" },
  { icon: <Calendar className="w-5 h-5" />, labelKey: "contact.avail.label", valueKey: "contact.avail.value", value: null, color: "text-emerald-400", border: "border-emerald-500/20" },
  { icon: <Clock className="w-5 h-5" />, labelKey: "contact.time.label", valueKey: "contact.time.value", value: null, color: "text-secondary", border: "border-secondary/20" },
];

const socials = [
  { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com", color: "hover:text-white hover:border-white/40" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com", color: "hover:text-blue-400 hover:border-blue-400/40" },
  { icon: <Twitter className="w-5 h-5" />, label: "Twitter / X", url: "https://twitter.com", color: "hover:text-sky-400 hover:border-sky-400/40" },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0d1424] text-white overflow-x-hidden">
      <CursorGlow />
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="animated-blob bg-blue-500/10 w-[500px] h-[500px] top-[5%] left-[-100px]" />
        <div className="animated-blob bg-violet-500/12 w-[450px] h-[450px] bottom-[5%] right-[-100px]" style={{ animationDelay: "-8s" }} />
      </div>
      <Navbar />

      {/* Header */}
      <section className="relative z-10 pt-40 pb-16 px-6 md:px-16 max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Contact
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight text-gradient leading-tight mb-6">
            {t("contact.title")}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t("contact.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="relative z-10 pb-28 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 items-start">

          {/* Info cards */}
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {/* Availability card */}
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-7 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">{t("contact.avail.label")}</span>
              </div>
              <p className="text-white font-semibold">{t("contact.avail.value")}</p>
            </motion.div>

            {/* Response time */}
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-7 border border-secondary/20">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">{t("contact.time.label")}</span>
              </div>
              <p className="text-white font-semibold">{t("contact.time.value")}</p>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-7 border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{t("contact.email.label")}</span>
              </div>
              <a href="mailto:hello@example.com" data-testid="link-email-direct"
                className="text-white font-semibold hover:text-primary transition-colors flex items-center gap-1.5 group">
                hello@example.com
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{t("contact.social.label")}</div>
              <div className="flex flex-col gap-2">
                {socials.map(({ icon, label, url, color }) => (
                  <a key={label} href={url} target="_blank" rel="noreferrer"
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 text-muted-foreground text-sm font-medium transition-all ${color}`}>
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="md:col-span-3 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-10 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-black mb-3">Напиши ми директно</h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Имаш проект? Нужен ти е freelancer? Просто искаш да поговорим за кода? Всичко е добре дошло.
                </p>
              </div>
              <a href="mailto:hello@example.com" data-testid="link-email-cta"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white text-black font-bold text-base hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all self-start">
                <Mail className="w-5 h-5" />
                {t("contact.btn")}
              </a>
            </motion.div>

            {/* What I can help with */}
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-10">
              <h3 className="font-bold mb-5 text-lg">С какво мога да помогна</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Нов уеб сайт от нулата",
                  "Редизайн на съществуващ сайт",
                  "Оптимизация на скоростта",
                  "React / Next.js приложение",
                  "UI/UX консултация",
                  "Landing page за реклама",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-white/5">
        <p>© {new Date().getFullYear()} NOVA. {t("footer.text")}</p>
      </footer>
    </div>
  );
}
