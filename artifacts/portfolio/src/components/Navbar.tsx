import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [location] = useLocation();

  const links = [
    { key: "nav.work", href: "/work" },
    { key: "nav.stack", href: "/stack" },
    { key: "nav.contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 glass-nav py-4 px-6 md:px-12 flex items-center justify-between"
    >
      <Link href="/" className="text-xl font-black tracking-tighter text-white uppercase hover:opacity-80 transition-opacity">
        NOVA
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        {links.map(({ key, href }) => (
          <Link
            key={key}
            href={href}
            className={`hover:text-white transition-colors relative pb-0.5 ${location === href ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-primary" : ""}`}
          >
            {t(key)}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setLang(lang === "bg" ? "en" : "bg")}
          data-testid="button-lang-toggle"
          className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-muted-foreground hover:text-white transition-all"
        >
          {lang === "bg" ? "EN" : "БГ"}
        </button>
        <Link
          href="/contact"
          data-testid="link-hire-me"
          className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
        >
          {t("nav.hire")}
        </Link>
      </div>
    </motion.nav>
  );
}
