import { createContext, useContext, useState } from "react";

export type Lang = "bg" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  ta: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "bg",
  setLang: () => {},
  t: (k) => k,
  ta: () => [],
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

  function ta(key: string): string[] {
    const entry = arrayTranslations[key];
    if (!entry) return [];
    return entry[lang] ?? entry["en"] ?? [];
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, ta }}>
      {children}
    </LanguageContext.Provider>
  );
}

const arrayTranslations: Record<string, Record<Lang, string[]>> = {
  "hero.roles": {
    bg: ["Frontend разработчик", "UI/UX дизайнер", "React инженер", "Перфектен партньор"],
    en: ["Frontend Developer", "UI/UX Designer", "React Engineer", "Your Perfect Partner"],
  },
  "marquee.items": {
    bg: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Figma", "Node.js", "PostgreSQL", "Performance", "UI Systems", "Design Systems", "Glassmorphism"],
    en: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Figma", "Node.js", "PostgreSQL", "Performance", "UI Systems", "Design Systems", "Glassmorphism"],
  },
};

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.work": { bg: "Работа", en: "Work" },
  "nav.stack": { bg: "Стек", en: "Stack" },
  "nav.contact": { bg: "Контакт", en: "Contact" },
  "nav.hire": { bg: "Наеми ме", en: "Hire Me" },

  // Hero
  "hero.tag": { bg: "Налична за нови проекти", en: "Available for new opportunities" },
  "hero.line1": { bg: "Изграждам", en: "I build" },
  "hero.subtitle": {
    bg: "Създавам кинематографични, висококачествени интерфейси, съчетаващи прецизно инженерство и смело дизайнерско мислене. Всеки пиксел е обмислен.",
    en: "Crafting cinematic, high-performance interfaces that bridge the gap between engineering precision and bold design thinking. Every pixel is intentional.",
  },
  "hero.cta.work": { bg: "Виж проектите", en: "View Work" },
  "hero.cta.contact": { bg: "Свържи се", en: "Contact Me" },
  "hero.scroll": { bg: "Скрол надолу", en: "Scroll down" },
  "hero.stat.years.value": { bg: "3+", en: "3+" },
  "hero.stat.years.label": { bg: "Години опит", en: "Years Experience" },
  "hero.stat.projects.value": { bg: "20+", en: "20+" },
  "hero.stat.projects.label": { bg: "Проекта", en: "Projects" },
  "hero.stat.clients.value": { bg: "15+", en: "15+" },
  "hero.stat.clients.label": { bg: "Доволни клиенти", en: "Happy Clients" },
  "hero.stat.score.value": { bg: "95+", en: "95+" },
  "hero.stat.score.label": { bg: "Lighthouse резултат", en: "Lighthouse Score" },

  // About section (on Home)
  "about.label": { bg: "За мен", en: "About Me" },
  "about.title": { bg: "Страстта ми е да правя уеб изживявания, които хората обичат.", en: "My passion is building web experiences people love." },
  "about.desc1": {
    bg: "С над 3 години опит в изграждането на модерни уеб приложения, специализирам в превръщането на сложни идеи в интуитивни, красиви и бързи дигитални продукти.",
    en: "With over 3 years of experience building modern web applications, I specialize in transforming complex ideas into intuitive, beautiful, and fast digital products.",
  },
  "about.desc2": {
    bg: "Вярвам, че добрият дизайн и добрият код са неделими. Работя на пресечната точка между визуалното изкуство и инженерната прецизност.",
    en: "I believe great design and great code are inseparable. I work at the intersection of visual art and engineering precision.",
  },
  "about.cta": { bg: "Виж пълния стек", en: "See Full Stack" },
  "about.badge1": { bg: "Дизайн-фокусиран", en: "Design-focused" },
  "about.badge2": { bg: "Перформанс-ориентиран", en: "Performance-driven" },
  "about.badge3": { bg: "Детайлно мислене", en: "Detail-obsessed" },

  // Featured work section (on Home)
  "featured.label": { bg: "Избрани проекти", en: "Featured Work" },
  "featured.title": { bg: "Работата говори сама за себе си.", en: "The work speaks for itself." },
  "featured.subtitle": {
    bg: "Последните ми проекти — фокус върху производителност, идентичност и конверсия.",
    en: "Recent projects with a focus on performance, brand identity, and conversion.",
  },
  "featured.cta": { bg: "Виж всички проекти", en: "View All Projects" },
  "featured.visit": { bg: "Виж сайта", en: "Visit Site" },

  // Services section
  "services.label": { bg: "Услуги", en: "Services" },
  "services.title": { bg: "Какво правя за теб.", en: "What I do for you." },
  "service1.title": { bg: "Уеб дизайн и разработка", en: "Web Design & Development" },
  "service1.desc": {
    bg: "От Figma до продуктова среда. Изграждам бързи, красиви и достъпни уеб сайтове, оптимизирани за конверсия.",
    en: "From Figma to production. I build fast, beautiful, and accessible websites optimized for conversion.",
  },
  "service2.title": { bg: "Оптимизация на производителността", en: "Performance Optimization" },
  "service2.desc": {
    bg: "Анализ и подобряване на скоростта на сайта. Lighthouse 95+, Core Web Vitals, SEO — всичко в едно.",
    en: "Analysis and improvement of site speed. Lighthouse 95+, Core Web Vitals, SEO — all in one.",
  },
  "service3.title": { bg: "UI системи и бранд идентичност", en: "UI Systems & Brand Identity" },
  "service3.desc": {
    bg: "Изграждане на кохезивни дизайн системи, типография, цветови палитри и компонентни библиотеки.",
    en: "Building cohesive design systems, typography, color palettes, and component libraries.",
  },
  "service4.title": { bg: "React / Next.js приложения", en: "React / Next.js Applications" },
  "service4.desc": {
    bg: "Сложни SPA и SSR приложения с модерен React стек, TypeScript, анимации и интеграции.",
    en: "Complex SPA and SSR applications with modern React stack, TypeScript, animations, and integrations.",
  },

  // Home CTA
  "home.cta.title": { bg: "Готов за нов проект?", en: "Ready for a new project?" },
  "home.cta.subtitle": { bg: "Нека заедно изградим нещо, с което да се гордееш.", en: "Let's build something together you'll be proud of." },
  "home.cta.btn": { bg: "Нека поговорим", en: "Let's talk" },

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
  "work.p1.stat3": { bg: "100% Responsive", en: "100% Responsive" },
  "work.p1.visit": { bg: "Виж живия сайт", en: "Visit Live Site" },
  "work.p1.tags": { bg: "HTML · CSS · JS · SEO · Performance", en: "HTML · CSS · JS · SEO · Performance" },
  "work.p2.label": { bg: "Личен бранд", en: "Personal Brand" },
  "work.p2.title": { bg: "Nikolay Mihaylov", en: "Nikolay Mihaylov" },
  "work.p2.desc": {
    bg: "Висококачествена система за личен сайт. Проектирана да представя разработчици, фрийлансъри и творци по премиум начин с персонализирани CMS интеграции.",
    en: "High-end personal branding website system. Designed to showcase developers, freelancers and creators in a premium way with custom CMS integrations.",
  },
  "work.p2.stat1": { bg: "100% Responsive", en: "100% Responsive" },
  "work.p2.stat2": { bg: "Собствен CMS", en: "Custom CMS" },
  "work.p2.stat3": { bg: "Lighthouse 95+", en: "Lighthouse 95+" },
  "work.p2.visit": { bg: "Виж живия сайт", en: "Visit Live Site" },
  "work.p2.tags": { bg: "React · Framer Motion · CMS · Branding", en: "React · Framer Motion · CMS · Branding" },
  "work.process.label": { bg: "Процесът", en: "The Process" },
  "work.process.title": { bg: "Как работя", en: "How I work" },
  "work.step1.title": { bg: "Открий", en: "Discover" },
  "work.step1.desc": { bg: "Разбиране на бизнес целите, потребителите и конкурентната среда.", en: "Understanding business goals, users, and competitive landscape." },
  "work.step2.title": { bg: "Проектирай", en: "Design" },
  "work.step2.desc": { bg: "Wireframes, прототипи и дизайн системи в Figma с клиентска обратна връзка.", en: "Wireframes, prototypes, and design systems in Figma with client feedback." },
  "work.step3.title": { bg: "Изгради", en: "Build" },
  "work.step3.desc": { bg: "Чист, performant код с модерен React стек и строго тестване.", en: "Clean, performant code with modern React stack and rigorous testing." },
  "work.step4.title": { bg: "Стартирай", en: "Launch" },
  "work.step4.desc": { bg: "Деплой, SEO оптимизация, Lighthouse аудит и следпродажбена поддръжка.", en: "Deploy, SEO optimization, Lighthouse audit, and post-launch support." },

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
  "contact.email.label": { bg: "Директен имейл", en: "Direct email" },
  "contact.avail.label": { bg: "Наличност", en: "Availability" },
  "contact.avail.value": { bg: "Свободна за проекти", en: "Available for projects" },
  "contact.time.label": { bg: "Отговор в рамките на", en: "Response within" },
  "contact.time.value": { bg: "24 часа", en: "24 hours" },
  "contact.social.label": { bg: "Социални мрежи", en: "Social" },

  // Footer
  "footer.text": { bg: "Изработено с внимание.", en: "Crafted with intention." },
  "back.home": { bg: "Начало", en: "Home" },
};
