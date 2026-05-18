import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Work() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0d1424] text-white overflow-hidden">
      <CursorGlow />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="animated-blob bg-blue-500/10 w-[500px] h-[500px] top-[-80px] left-[-80px]" />
        <div className="animated-blob bg-purple-500/10 w-[400px] h-[400px] top-[40%] right-[-100px]" style={{ animationDelay: "-6s" }} />
      </div>

      <Navbar />

      <div className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto z-10">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16 pt-8"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-gradient">
            {t("work.title")}
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            {t("work.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-28">
          {/* Project 1 — Rolltech Doors */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="group grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-7 rounded-3xl overflow-hidden glass-card p-2 relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img
                src="https://image.thum.io/get/width/1200/crop/630/noanimate/https://www.rolltech-doors.com"
                alt="Rolltech Doors"
                data-testid="img-rolltech"
                className="w-full h-auto rounded-2xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="md:col-span-5 flex flex-col gap-5 md:pl-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  {t("work.p1.label")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("work.p1.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">{t("work.p1.desc")}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="glass-card px-4 py-2 rounded-xl text-sm font-semibold">
                  <span className="text-primary">{t("work.p1.stat1")}</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-xl text-sm font-semibold">
                  <span className="text-primary">{t("work.p1.stat2")}</span>
                </div>
              </div>
              <a
                href="https://www.rolltech-doors.com"
                target="_blank"
                rel="noreferrer"
                data-testid="link-rolltech-visit"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors w-fit pb-1 border-b border-white/20 hover:border-primary"
              >
                {t("work.p1.visit")} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Project 2 — Portfolio System */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="group grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5 flex flex-col gap-5 md:pr-8 order-2 md:order-1">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                  {t("work.p2.label")}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("work.p2.title")}</h2>
                <p className="text-muted-foreground leading-relaxed">{t("work.p2.desc")}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="glass-card px-4 py-2 rounded-xl text-sm font-semibold">
                  <span className="text-secondary">{t("work.p2.stat1")}</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-xl text-sm font-semibold text-muted-foreground">
                  {t("work.p2.stat2")}
                </div>
              </div>
              <a
                href="https://www.nikolaymihaylovportfolio.com"
                target="_blank"
                rel="noreferrer"
                data-testid="link-portfolio-visit"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-secondary transition-colors w-fit pb-1 border-b border-white/20 hover:border-secondary"
              >
                {t("work.p2.visit")} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="md:col-span-7 rounded-3xl overflow-hidden glass-card p-2 relative order-1 md:order-2">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img
                src="https://image.thum.io/get/width/1200/crop/630/noanimate/https://www.nikolaymihaylovportfolio.com"
                alt="Portfolio System"
                data-testid="img-portfolio"
                className="w-full h-auto rounded-2xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 z-10 relative mt-16">
        <p>© {new Date().getFullYear()} NOVA. {t("footer.text")}</p>
      </footer>
    </div>
  );
}
