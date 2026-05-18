import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, ArrowDown, Sparkles, Code2, Zap, Layers, Monitor } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRoleRotator } from "@/hooks/useRoleRotator";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const projectPreviews = [
  {
    title: "Rolltech Doors",
    labelKey: "work.p1.label",
    descKey: "work.p1.desc",
    img: "https://image.thum.io/get/width/1200/crop/630/noanimate/https://www.rolltech-doors.com",
    url: "https://www.rolltech-doors.com",
    color: "from-blue-500/20",
    tags: ["HTML", "CSS", "JS", "SEO"],
    stat: "+38% Leads",
  },
  {
    title: "Nikolay Mihaylov",
    labelKey: "work.p2.label",
    descKey: "work.p2.desc",
    img: "https://image.thum.io/get/width/1200/crop/630/noanimate/https://www.nikolaymihaylovportfolio.com",
    url: "https://www.nikolaymihaylovportfolio.com",
    color: "from-purple-500/20",
    tags: ["React", "Framer", "CMS"],
    stat: "Lighthouse 95+",
  },
];

const services = [
  { icon: <Monitor className="w-7 h-7" />, titleKey: "service1.title", descKey: "service1.desc", color: "text-primary", bg: "from-primary/10" },
  { icon: <Zap className="w-7 h-7" />, titleKey: "service2.title", descKey: "service2.desc", color: "text-yellow-400", bg: "from-yellow-500/10" },
  { icon: <Layers className="w-7 h-7" />, titleKey: "service3.title", descKey: "service3.desc", color: "text-pink-400", bg: "from-pink-500/10" },
  { icon: <Code2 className="w-7 h-7" />, titleKey: "service4.title", descKey: "service4.desc", color: "text-secondary", bg: "from-secondary/10" },
];

export default function Home() {
  const { t, ta } = useLanguage();
  const roles = ta("hero.roles");
  const marqueeItems = ta("marquee.items");
  const { current: currentRole, index: roleIndex } = useRoleRotator(roles);

  return (
    <div className="relative bg-[#0d1424] text-white overflow-x-hidden">
      <CursorGlow />

      {/* Fixed background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="animated-blob bg-blue-600/10 w-[700px] h-[700px] top-[-150px] left-[-150px]" />
        <div className="animated-blob bg-violet-600/10 w-[500px] h-[500px] top-[40%] right-[-150px]" style={{ animationDelay: "-7s" }} />
        <div className="animated-blob bg-indigo-500/8 w-[600px] h-[600px] bottom-[-200px] left-[20%]" style={{ animationDelay: "-14s" }} />
      </div>

      <Navbar />

      {/* ──────────────── HERO ──────────────── */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold tracking-widest uppercase mb-10 text-primary w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            {t("hero.tag")}
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp} className="mb-8">
            <h1 className="text-[clamp(3rem,8vw,6.5rem)] leading-[1.06] font-black tracking-tight">
              <span className="text-gradient block">{t("hero.line1")}</span>
              <span className="relative block overflow-hidden h-[1.12em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="text-gradient-primary absolute inset-0"
                  >
                    {currentRole}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-16">
            <Link href="/work" data-testid="link-view-work"
              className="group px-8 py-4 rounded-full bg-primary text-white font-bold hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(96,165,250,0.45)] transition-all flex items-center gap-2 text-sm">
              {t("hero.cta.work")}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link href="/contact" data-testid="link-contact"
              className="px-8 py-4 rounded-full glass-card font-semibold hover:-translate-y-1 transition-all text-sm">
              {t("hero.cta.contact")}
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[
              { v: t("hero.stat.years.value"), l: t("hero.stat.years.label") },
              { v: t("hero.stat.projects.value"), l: t("hero.stat.projects.label") },
              { v: t("hero.stat.clients.value"), l: t("hero.stat.clients.label") },
              { v: t("hero.stat.score.value"), l: t("hero.stat.score.label") },
            ].map(({ v, l }) => (
              <div key={l} className="glass-card px-5 py-4 rounded-2xl">
                <div className="text-2xl md:text-3xl font-black text-gradient-primary mb-0.5">{v}</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold leading-tight">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[11px] uppercase tracking-widest">{t("hero.scroll")}</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────── MARQUEE ──────────────── */}
      <div className="relative z-10 py-5 border-y border-white/5 overflow-hidden bg-white/[0.02]">
        <div className="marquee-track flex gap-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item flex items-center gap-3 px-6 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ──────────────── ABOUT ──────────────── */}
      <section className="relative z-10 py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Visual side */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square glass-card p-1">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent flex items-center justify-center relative overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 grid-pattern opacity-30" />
                {/* Central glow orb */}
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/60 to-secondary/60 blur-2xl opacity-70" />
                <div className="absolute bottom-6 right-6 text-right">
                  <div className="text-5xl font-black text-gradient-primary">NOVA</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Portfolio 2026</div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-card px-5 py-3 rounded-2xl border border-primary/20">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{t("hero.stat.score.label")}</div>
              <div className="text-2xl font-black text-gradient-primary">95+</div>
            </div>
            <div className="absolute -top-4 -right-4 glass-card px-5 py-3 rounded-2xl border border-secondary/20">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{t("hero.stat.projects.label")}</div>
              <div className="text-2xl font-black text-gradient-primary">20+</div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              {t("about.label")}
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black leading-tight text-gradient">
              {t("about.title")}
            </motion.h2>

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              {t("about.desc1")}
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              {t("about.desc2")}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              {[t("about.badge1"), t("about.badge2"), t("about.badge3")].map((b) => (
                <span key={b} className="px-4 py-1.5 rounded-full glass-card text-sm font-medium border border-white/10">{b}</span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/stack"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors pb-1 border-b border-white/20 hover:border-primary">
                {t("about.cta")} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────── FEATURED WORK ──────────────── */}
      <section className="relative z-10 py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t("featured.label")}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tight text-gradient mb-4">
            {t("featured.title")}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            {t("featured.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projectPreviews.map(({ title, labelKey, descKey, img, url, color, tags, stat }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } } }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className={`relative overflow-hidden bg-gradient-to-br ${color} to-transparent p-1`}>
                <div className="rounded-2xl overflow-hidden relative">
                  <img src={img} alt={title} className="w-full h-auto grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <a href={url} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:scale-105 transition-transform">
                      {t("featured.visit")} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Card body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-primary mb-1">{t(labelKey)}</div>
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t(descKey)}</p>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-primary">{stat}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <Link href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card font-semibold hover:-translate-y-1 hover:border-primary/30 transition-all text-sm border border-white/10">
            {t("featured.cta")} <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* ──────────────── SERVICES ──────────────── */}
      <section className="relative z-10 py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t("services.label")}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tight text-gradient">
            {t("services.title")}
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon, titleKey, descKey, color, bg }, i) => (
            <motion.div
              key={titleKey}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } } }}
              className={`glass-card p-7 rounded-3xl flex flex-col gap-5 group bg-gradient-to-br ${bg} to-transparent hover:-translate-y-2 transition-all duration-300`}
            >
              <div className={`${color} group-hover:scale-110 transition-transform duration-300 w-fit`}>
                {icon}
              </div>
              <div>
                <h3 className="font-bold text-base mb-2 leading-snug">{t(titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────── HOME CTA ──────────────── */}
      <section className="relative z-10 py-28 px-6 md:px-16">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative rounded-3xl overflow-hidden p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl" />
            <div className="relative glass-card rounded-[calc(1.5rem-4px)] p-12 md:p-20">
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-gradient">
                {t("home.cta.title")}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                {t("home.cta.subtitle")}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black font-bold text-base hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all">
                  {t("home.cta.btn")} <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-white/5">
        <p>© {new Date().getFullYear()} NOVA. {t("footer.text")}</p>
      </footer>
    </div>
  );
}
