import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const steps = [
  { num: "01", titleKey: "work.step1.title", descKey: "work.step1.desc" },
  { num: "02", titleKey: "work.step2.title", descKey: "work.step2.desc" },
  { num: "03", titleKey: "work.step3.title", descKey: "work.step3.desc" },
  { num: "04", titleKey: "work.step4.title", descKey: "work.step4.desc" },
];

export default function Work() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0d1424] text-white overflow-x-hidden">
      <CursorGlow />
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="animated-blob bg-blue-500/10 w-[500px] h-[500px] top-[-80px] left-[-80px]" />
        <div className="animated-blob bg-purple-500/10 w-[400px] h-[400px] top-[40%] right-[-100px]" style={{ animationDelay: "-6s" }} />
      </div>
      <Navbar />

      {/* Header */}
      <section className="relative z-10 pt-40 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            {t("work.p1.label")}
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight text-gradient mb-5">
            {t("work.title")}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            {t("work.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Project 1 */}
      <section className="relative z-10 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="group relative rounded-3xl overflow-hidden glass-card"
        >
          {/* Top image strip */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-transparent p-2">
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src="https://image.thum.io/get/width/1600/crop/900/noanimate/https://www.rolltech-doors.com"
                alt="Rolltech Doors"
                data-testid="img-rolltech"
                className="w-full h-auto grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent" />
            </div>
          </div>
          {/* Content */}
          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{t("work.p1.label")}</div>
              <h2 className="text-3xl md:text-4xl font-black mb-5">{t("work.p1.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("work.p1.desc")}</p>
              <p className="text-xs text-muted-foreground/60 font-mono">{t("work.p1.tags")}</p>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="grid grid-cols-3 gap-3">
                {[t("work.p1.stat1"), t("work.p1.stat2"), t("work.p1.stat3")].map((s) => (
                  <div key={s} className="glass-card rounded-2xl p-4 text-center">
                    <div className="text-xs text-primary font-bold leading-snug">{s}</div>
                  </div>
                ))}
              </div>
              <a href="https://www.rolltech-doors.com" target="_blank" rel="noreferrer" data-testid="link-rolltech-visit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(96,165,250,0.4)] transition-all">
                {t("work.p1.visit")} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project 2 */}
      <section className="relative z-10 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="group relative rounded-3xl overflow-hidden glass-card"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-secondary/10 to-transparent p-2">
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src="https://image.thum.io/get/width/1600/crop/900/noanimate/https://www.nikolaymihaylovportfolio.com"
                alt="Portfolio System"
                data-testid="img-portfolio"
                className="w-full h-auto grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent" />
            </div>
          </div>
          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">{t("work.p2.label")}</div>
              <h2 className="text-3xl md:text-4xl font-black mb-5">{t("work.p2.title")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("work.p2.desc")}</p>
              <p className="text-xs text-muted-foreground/60 font-mono">{t("work.p2.tags")}</p>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="grid grid-cols-3 gap-3">
                {[t("work.p2.stat1"), t("work.p2.stat2"), t("work.p2.stat3")].map((s) => (
                  <div key={s} className="glass-card rounded-2xl p-4 text-center">
                    <div className="text-xs text-secondary font-bold leading-snug">{s}</div>
                  </div>
                ))}
              </div>
              <a href="https://www.nikolaymihaylovportfolio.com" target="_blank" rel="noreferrer" data-testid="link-portfolio-visit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-bold text-sm hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.4)] transition-all">
                {t("work.p2.visit")} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t("work.process.label")}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-gradient mb-14">
            {t("work.process.title")}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, titleKey, descKey }, i) => (
              <motion.div
                key={num}
                variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1 } } }}
                className="glass-card p-7 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl font-black text-gradient-primary opacity-30 group-hover:opacity-60 transition-opacity">{num}</div>
                <h3 className="font-bold text-lg">{t(titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-white/5 mt-8">
        <p>© {new Date().getFullYear()} NOVA. {t("footer.text")}</p>
      </footer>
    </div>
  );
}
