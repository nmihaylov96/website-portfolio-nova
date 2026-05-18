import { createContext, useContext, useState } from "react";

export type Lang = "bg" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "bg",
  setLang: () => {},
  t: (k) => k,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("bg");

  function t(key: string): string {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry["en"] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.work": { bg: "Работа", en: "Work" },
  "nav.stack": { bg: "Стек", en: "Stack" },
  "nav.contact": { bg: "Контакт", en: "Contact" },
  "nav.hire": { bg: "Наеми ме", en: "Hire Me" },

  // Hero
  "hero.tag": { bg: "Налична за нови проекти", en: "Available for new opportunities" },
  "hero.headline": { bg: "Изграждам модерни уеб изживявания.", en: "I build modern web experiences." },
  "hero.subtitle": {
    bg: "Създавам кинематографични, висококачествени интерфейси, съчетаващи прецизно инженерство и смело дизайнерско мислене. Всеки пиксел е обмислен, всяко взаимодействие — живо.",
    en: "Crafting cinematic, high-performance interfaces that bridge the gap between rigorous engineering and bold design. Every pixel intentional, every interaction alive.",
  },
  "hero.cta.work": { bg: "Виж проектите", en: "View Work" },
  "hero.cta.contact": { bg: "Свържи се", en: "Contact Me" },
  "hero.stat.years.value": { bg: "3+", en: "3+" },
  "hero.stat.years.label": { bg: "Години опит", en: "Years Experience" },
  "hero.stat.projects.value": { bg: "20+", en: "20+" },
  "hero.stat.projects.label": { bg: "Реализирани проекта", en: "Projects Shipped" },

  // Work page
  "work.title": { bg: "Избрани проекти", en: "Selected Work" },
  "work.subtitle": {
    bg: "Задълбочен поглед в последните проекти — фокус върху производителност, идентичност на марката и висококачествен потребителски опит.",
    en: "Deep dives into recent projects focusing on performance, brand identity, and premium user experience.",
  },
  "work.p1.label": { bg: "Основен казус", en: "Featured Case Study" },
  "work.p1.title": { bg: "Rolltech Doors", en: "Rolltech Doors" },
  "work.p1.desc": {
    bg: "Цялостен редизайн на индустриална марка с фокус върху доверие и конверсия. Разработка на frontend с акцент върху производителност, яснота и доверие на потребителя.",
    en: "Industrial brand redesign focused on trust and conversion. Full redesign and frontend development with focus on performance, clarity and user trust.",
  },
  "work.p1.stat1": { bg: "+38% Запитвания", en: "+38% Leads" },
  "work.p1.stat2": { bg: "95+ Производ.", en: "95+ Perf" },
  "work.p1.visit": { bg: "Виж живия сайт", en: "Visit Live Site" },
  "work.p2.label": { bg: "Личен бранд", en: "Personal Brand" },
  "work.p2.title": { bg: "Nikolay Mihaylov", en: "Nikolay Mihaylov" },
  "work.p2.desc": {
    bg: "Висококачествена система за личен сайт. Проектирана да представя разработчици, фрийлансъри и творци по премиум начин с персонализирани CMS интеграции.",
    en: "High-end personal branding website system. Designed to showcase developers, freelancers and creators in a premium way with custom CMS integrations.",
  },
  "work.p2.stat1": { bg: "100% Responsive", en: "100% Responsive" },
  "work.p2.stat2": { bg: "Собствен CMS", en: "Custom CMS" },
  "work.p2.visit": { bg: "Виж живия сайт", en: "Visit Live Site" },

  // Stack page
  "stack.title": { bg: "Технологичен стек", en: "The Stack" },
  "stack.subtitle": {
    bg: "Инструменти и философии, с които изграждам мащабируеми и красиви дигитални преживявания.",
    en: "Tools and philosophies I use to build scalable, beautiful digital experiences.",
  },
  "stack.fe.title": { bg: "Frontend разработка", en: "Frontend Engineering" },
  "stack.fe.desc": {
    bg: "Задълбочена експертиза в модерни React екосистеми — изграждане на компонентно-базирани интерфейси, достъпни и лесни за поддръжка.",
    en: "Deep expertise in modern React ecosystems, building component-driven interfaces that are robust, accessible, and maintainable.",
  },
  "stack.perf.title": { bg: "Производителност", en: "Performance" },
  "stack.perf.desc": {
    bg: "Фокус върху Core Web Vitals, оптимални модели на рендиране и постигане на перфектен резултат в Lighthouse.",
    en: "Obsessed with Core Web Vitals, optimal rendering patterns, and achieving perfect 100s in Lighthouse.",
  },
  "stack.design.title": { bg: "Дизайн системи", en: "Design Systems" },
  "stack.design.desc": {
    bg: "Свързване на Figma и код с точност и мащабируема архитектура от токени.",
    en: "Bridging the gap between Figma and code with exact precision and scalable token architectures.",
  },
  "stack.beyond.title": { bg: "Отвъд браузъра", en: "Beyond The Browser" },
  "stack.beyond.desc": {
    bg: "Удобно в целия стек. Опит с производителни API-та, персонализирани CMS решения и деплой процеси.",
    en: "Comfortable throughout the full stack. Experience building performant APIs, integrating custom CMS solutions, and orchestrating deployment pipelines.",
  },

  // Contact page
  "contact.title": { bg: "Нека създадем нещо изключително.", en: "Let's build something premium." },
  "contact.subtitle": {
    bg: "Приемам нови клиенти и проекти. Ако търсите разработчик, за когото кодът е занаят — нека поговорим.",
    en: "Currently accepting new clients and opportunities. If you're looking for an engineer who treats development as a craft, let's talk.",
  },
  "contact.btn": { bg: "Пиши ми", en: "Get in Touch" },
  "contact.or": { bg: "или", en: "or" },
  "contact.email.label": { bg: "Директен имейл", en: "Direct email" },

  // Footer
  "footer.text": { bg: "Изработено с внимание.", en: "Crafted with intention." },

  // Back link
  "back.home": { bg: "Начало", en: "Home" },
};
