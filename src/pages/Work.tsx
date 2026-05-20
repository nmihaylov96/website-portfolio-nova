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

const projects = [
  {
    title: "Rolltech Doors",
    desc: "Industrial door systems website.",
    img: "https://www.rolltech-doors.com",
    link: "https://www.rolltech-doors.com",
    stats: ["Speed", "SEO", "UI"],
  },
  {
    title: "Portfolio System",
    desc: "Personal portfolio system with CMS-like structure.",
    img: "https://www.nikolaymihaylovportfolio.com",
    link: "https://www.nikolaymihaylovportfolio.com",
    stats: ["Design", "React", "Motion"],
  },
  {
    title: "Elysian Real Estates",
    desc: "Modern real estate platform with listings.",
    img: "https://elysian-realestates.vercel.app/",
    link: "https://elysian-realestates.vercel.app/",
    stats: ["Fast UI", "Responsive", "SEO"],
  },
];

export default function Work() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0d1424] text-white overflow-x-hidden pt-20">
      <CursorGlow />

      {/* background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="animated-blob bg-blue-500/10 w-[500px] h-[500px] top-[-80px] left-[-80px]" />
        <div
          className="animated-blob bg-purple-500/10 w-[400px] h-[400px] top-[40%] right-[-100px]"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <Navbar />

      {/* HEADER */}
      <section className="relative z-10 pt-20 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 mb-5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t("work.p1.label")}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black text-gradient mb-5"
          >
            {t("work.title")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl text-lg"
          >
            {t("work.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="relative z-10 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } },
              }}
              className="group glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* IMAGE FIXED */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/5">
                <img
                  src={`https://image.thum.io/get/width/1200/crop/0/delay/3/noanimate/https://${p.img.replace(
                    "https://",
                    ""
                  )}`}
                  alt={p.title}
                  className="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition duration-300" />
              </div>

              <div className="p-6">
                <h2 className="text-lg font-bold mb-2">{p.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  {p.stats.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  Visit <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t("work.process.label")}
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-black text-gradient mb-14"
          >
            {t("work.process.title")}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } },
                }}
                className="glass-card p-7 rounded-3xl"
              >
                <div className="text-4xl font-black opacity-30">{s.num}</div>
                <h3 className="font-bold mt-2">{t(s.titleKey)}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {t(s.descKey)}
                </p>
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