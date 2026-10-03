import { i as __toESM, n as __exportAll$1 } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
  t as QueryClientProvider,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  _ as Link,
  f as createRouter,
  g as createRootRouteWithContext,
  h as createFileRoute,
  l as Scripts,
  m as lazyRouteComponent,
  p as Outlet,
  u as HeadContent,
  v as useRouter,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import {
  T as ExternalLink,
  _ as Mail,
  h as Menu,
  m as Moon,
  n as X,
  s as Sun,
} from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DHiAGOZx.js
var router_DHiAGOZx_exports = /* @__PURE__ */ __exportAll$1({
  a: () => stats,
  c: () => values,
  getRouter: () => getRouter,
  i: () => faculty,
  l: () => useTheme,
  n: () => club,
  o: () => testimonial,
  r: () => domains,
  s: () => timeline,
  t: () => router_exports,
  u: () => cn,
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
  let target = {};
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
    });
  if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
  return target;
};
var styles_default = "/assets/styles-cjEZjAgN.css";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var ThemeContext = (0, import_react.createContext)(void 0);
/**
 * Reads the initial theme from localStorage (or falls back to "light").
 * The blocking <script> in __root.tsx already sets the correct class on <html>
 * before React mounts, so we just need to keep state in sync here.
 */
function getInitialTheme() {
  if (typeof window !== "undefined") {
    const docClass = document.documentElement.classList;
    if (docClass.contains("dark")) return "dark";
    if (docClass.contains("light")) return "light";
    const saved = localStorage.getItem("tf-theme");
    if (saved === "light" || saved === "dark") return saved;
  }
  return "light";
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = (0, import_react.useState)(getInitialTheme);
  (0, import_react.useEffect)(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem("tf-theme", theme);
  }, [theme]);
  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };
  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
    value: {
      theme,
      setTheme,
      toggleTheme,
    },
    children,
  });
}
function useTheme() {
  const context = (0, import_react.useContext)(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
function Logo({ className }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const defaultSrc = isLight
    ? "/images/branding/techfusionlogolight.webp"
    : "/images/branding/techfusionlogo.webp";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
    src: defaultSrc,
    srcSet: `${isLight ? "/images/branding/techfusionlogolight-sm.webp" : "/images/branding/techfusionlogo-sm.webp"} 256w, ${defaultSrc} 512w`,
    sizes: "(max-width: 640px) 256px, 512px",
    alt: "Tech Fusion Club Logo",
    width: 160,
    height: 160,
    className: cn("h-10 w-auto object-contain transition-all duration-300", className),
  });
}
var links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/governance",
    label: "Governance",
  },
  {
    to: "/events",
    label: "Events",
  },
  {
    to: "/team",
    label: "Team",
  },
  {
    to: "/alumni",
    label: "Alumni",
  },
  {
    to: "/gallery",
    label: "Gallery",
  },
];
function Nav() {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  const { theme, toggleTheme } = useTheme();
  (0, import_react.useEffect)(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  (0, import_react.useEffect)(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
    className: cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-500",
      scrolled
        ? "glass-strong border-b border-border/80 shadow-2xl backdrop-blur-2xl"
        : "border-b border-transparent bg-background/20 backdrop-blur-md",
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
      "aria-label": "Primary",
      className:
        "mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8",
      children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
        to: "/",
        className: "group flex items-center gap-3",
        onClick: () => setOpen(false),
        children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
          className:
            "h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105",
        }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex flex-col",
          children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className:
              "font-display text-xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-glow to-accent drop-shadow-[0_0_12px_rgba(217,72,15,0.4)] sm:text-2xl",
            children: "TECH FUSION",
          }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className:
              "font-mono text-[9px] uppercase tracking-[0.35em] text-primary-glow font-bold -mt-1",
            children: "CLUB",
          }),
          ],
        }),
        ],
      }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
        className: "hidden items-center gap-1 lg:flex",
        children: links.map((link) =>
              /* @__PURE__ */(0, import_jsx_runtime.jsx)(
          "li",
          {
            children:
              "external" in link && link.external
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                  href: link.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "electric-link inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-primary-glow transition-colors hover:text-foreground xl:px-4",
                  children: [
                    link.label,
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                      className: "size-3",
                    }),
                  ],
                })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "to" in link ? link.to : "/",
                  activeOptions: { exact: ("to" in link ? link.to : "/") === "/" },
                  activeProps: { className: "text-foreground font-semibold" },
                  className:
                    "electric-link rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground xl:px-4",
                  children: link.label,
                }),
          },
          "to" in link ? link.to : link.href,
        ),
        ),
      }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-2 sm:gap-3",
        children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          type: "button",
          onClick: toggleTheme,
          "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
          title: `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
          className:
            "glass hover:bg-surface-strong relative inline-flex size-10 items-center justify-center rounded-full text-foreground transition-transform duration-300 hover:scale-110 border border-border",
          children:
            theme === "dark"
              ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
                className: "size-5 text-amber-400 transition-all duration-300",
              })
              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
                className: "size-5 text-indigo-600 transition-all duration-300",
              }),
        }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
          to: "/join",
          className:
            "group pulse-glow relative hidden overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:inline-flex",
          children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "relative z-10",
            children: "Join the Club",
          }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className:
              "pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-primary-foreground/25 opacity-0 group-hover:animate-sheen group-hover:opacity-100",
          }),
          ],
        }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          type: "button",
          onClick: () => setOpen((v) => !v),
          "aria-expanded": open,
          "aria-controls": "mobile-nav",
          "aria-label": open ? "Close menu" : "Open menu",
          className:
            "glass inline-flex size-10 items-center justify-center rounded-full text-foreground lg:hidden",
          children: open
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }),
        }),
        ],
      }),
      ],
    }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      id: "mobile-nav",
      hidden: !open,
      className: "glass-strong border-t px-5 pb-8 pt-4 lg:hidden",
      children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
        className: "flex flex-col",
        children: links.map((link) =>
              /* @__PURE__ */(0, import_jsx_runtime.jsx)(
          "li",
          {
            children:
              "external" in link && link.external
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                  href: link.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => setOpen(false),
                  className:
                    "flex items-center justify-between border-b border-border/60 py-3.5 font-display text-lg font-semibold text-primary-glow",
                  children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: link.label,
                  }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                    className: "size-4",
                  }),
                  ],
                })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "to" in link ? link.to : "/",
                  onClick: () => setOpen(false),
                  activeOptions: { exact: ("to" in link ? link.to : "/") === "/" },
                  activeProps: { className: "text-primary-glow" },
                  className:
                    "block border-b border-border/60 py-3.5 font-display text-lg font-semibold text-muted-foreground",
                  children: link.label,
                }),
          },
          "to" in link ? link.to : link.href,
        ),
        ),
      }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
        to: "/join",
        onClick: () => setOpen(false),
        className:
          "mt-6 block rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground",
        children: "Join the Club",
      }),
      ],
    }),
    ],
  });
}
/**
 * Club-wide content. Edit these values to rebrand the site.
 * Placeholder values are marked with [PLACEHOLDER] in comments.
 */
var club = {
  name: "Tech Fusion Club",
  shortName: "Tech Fusion",
  initials: "TF",
  tagline: "Where ideas fuse into technology.",
  university: "Shri Ramswaroop Memorial University (SRMU)",
  foundedYear: 2019,
  email: "techfusionclub@srmu.ac.in",
  coordinatorEmail: "techfusionclub@srmu.ac.in",
  registrationFormUrl: "https://vivekatheintelligence.in/",
  /**
   * Paste a Formspree form ID here (e.g. "xabcdefg") to make the Join form
   * send real email. Until then the form validates and shows a success state
   * without sending anything.
   */
  formspreeId: "",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/techfusionclub_srmu/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/techfusion-club/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Techfusion-Club/100088111141332/",
    },
    {
      label: "GitHub",
      href: "https://github.com/webdevpraveen/techfusionclub",
    },
  ],
  mission:
    "Tech Fusion Club exists to turn curiosity into shipped work. We give SRMU students a platform to learn in public, build with peers across engineering domains, and graduate with a portfolio of real production projects.",
  vision:
    "To be the campus benchmark for student-led engineering at Shri Ramswaroop Memorial University — a club whose members drive university hackathons, open-source initiatives, and tech fest execution.",
};
var stats = [
  {
    label: "Active members",
    value: 320,
    suffix: "+",
  },
  {
    label: "Events hosted",
    value: 500,
    suffix: "+",
  },
  {
    label: "Years active",
    value: 7,
    prefix: "0",
  },
  {
    label: "Workshops conducted",
    value: 800,
    suffix: "+",
  },
];
var domains = [
  {
    slug: "web-dev",
    name: "Web Development",
    blurb:
      "Product-grade front ends and APIs — from accessibility fundamentals to shipping to real users.",
    stack: ["React", "TypeScript", "Node", "Postgres"],
  },
  {
    slug: "ai-ml",
    name: "AI / ML",
    blurb:
      "Applied machine learning: model training, evaluation, and putting inference behind a usable interface.",
    stack: ["PyTorch", "scikit-learn", "LLM APIs", "Pandas"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    blurb:
      "CTF practice, secure-by-default engineering, and responsible disclosure culture on campus.",
    stack: ["Burp Suite", "Wireshark", "Linux", "Cryptography"],
  },
  {
    slug: "app-dev",
    name: "App Development",
    blurb: "Cross-platform mobile builds, offline-first data, and store-ready release pipelines.",
    stack: ["Flutter", "React Native", "Kotlin", "Firebase"],
  },
  {
    slug: "cloud",
    name: "Cloud & DevOps",
    blurb: "Containers, CI/CD, and infrastructure-as-code — how software actually gets deployed.",
    stack: ["Docker", "GitHub Actions", "AWS", "Terraform"],
  },
  {
    slug: "design",
    name: "Design",
    blurb:
      "Interface craft and design systems: research, prototyping, motion, and visual identity work.",
    stack: ["Figma", "Design tokens", "Prototyping", "Branding"],
  },
];
var values = [
  {
    title: "Innovation",
    body: "We prefer an unfinished original idea to a polished copy. Experiments are budgeted for, and failure is documented rather than hidden.",
  },
  {
    title: "Collaboration",
    body: "Every project pairs juniors with seniors across domains. Nobody ships alone, and nobody carries a team alone either.",
  },
  {
    title: "Learning in public",
    body: "Notes, repos, and recordings from every session stay open so knowledge outlives the batch that created it.",
  },
  {
    title: "Craft",
    body: "Working is the baseline, not the goal. We care about performance, accessibility, and the details a user actually feels.",
  },
];
var timeline = [
  {
    year: "2019",
    title: "Club founded",
    body: "Nine students and one faculty advisor start a weekly build night in the CS department lab.",
  },
  {
    year: "2020",
    title: "First online cohort",
    body: "Sessions move fully remote; the 6-week web development bootcamp reaches 140 students.",
  },
  {
    year: "2021",
    title: "Domain structure introduced",
    body: "The club splits into specialised domains with student leads, formalising the mentorship ladder.",
  },
  {
    year: "2022",
    title: "Viveka 1.0 fest, edition one",
    body: "First flagship 36-hour annual tech fest with 400+ registrations and four industry sponsors.",
  },
  {
    year: "2024",
    title: "Open-source initiative",
    body: "Members land 60+ merged pull requests across public repositories during Hacktoberfest.",
  },
  {
    year: "2026",
    title: "320 members strong",
    body: "Six active domains, a year-round event calendar, and an alumni network across ten companies.",
  },
];
var faculty = {
  name: "Er. Abhishek Kumar Saxena",
  designation: "Assistant Director, IQAC & Head Technical Society, SRMU",
  photo: "https://www.vivekatheintelligence.in/abhishek.jpg",
  email: "abhishek.saxena@srmu.ac.in",
  message:
    "What sets Tech Fusion apart is continuity and hands-on building. Students do not simply attend a workshop and leave — they build real products and return as mentors. My role is to empower our student leads, foster university-wide technical excellence, and ensure every batch steps into industry with production-ready skills.",
};
var testimonial = {
  quote:
    "I joined in my first year knowing almost no code. Two years later I was leading the AI/ML domain and mentoring twenty juniors. This club moves fast, and it takes you with it.",
  author: "Riya Sharma — Lead Student Organizer, AI/ML Domain",
};
var quickLinks = [
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/governance",
    label: "Governance",
  },
  {
    to: "/events",
    label: "Events",
  },
  {
    href: "https://vivekatheintelligence.in/",
    label: "Viveka 6.0 Fest",
    external: true,
  },
  {
    to: "/team",
    label: "Team",
  },
];
var moreLinks = [
  {
    to: "/gallery",
    label: "Gallery",
  },
  {
    to: "/alumni",
    label: "Alumni",
  },
  {
    to: "/join",
    label: "Join Us",
  },
];
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
    className: "border-t border-border/70 px-5 pb-10 pt-16 sm:px-8 sm:pt-20",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto w-full max-w-7xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
            to: "/",
            className: "group flex items-center gap-3",
            children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
              className: "h-10 sm:h-12 w-auto",
            }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex flex-col",
              children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "font-display text-base font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-glow to-accent drop-shadow-[0_0_10px_rgba(217,72,15,0.4)]",
                children: "TECH FUSION",
              }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "font-mono text-[8px] uppercase tracking-[0.3em] text-primary-glow font-bold -mt-0.5",
                children: "CLUB",
              }),
              ],
            }),
            ],
          }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
            children: [
              club.tagline,
              " A student-led technical club at ",
              club.university,
              ", active since",
              " ",
              club.foundedYear,
              ".",
            ],
          }),
          ],
        }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
          "aria-label": "Footer quick links",
          children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            className: "font-mono text-[11px] uppercase tracking-[0.2em] text-foreground",
            children: "Explore",
          }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "mt-4 space-y-3 text-sm text-muted-foreground",
            children: quickLinks.map((l) =>
                    /* @__PURE__ */(0, import_jsx_runtime.jsx)(
              "li",
              {
                children:
                  "external" in l && l.external
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                      href: l.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "inline-flex items-center gap-1 transition-colors hover:text-primary-glow text-primary-glow font-semibold",
                      children: [
                        l.label,
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                          className: "size-3",
                        }),
                      ],
                    })
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                      to: "to" in l ? l.to : "/",
                      className: "transition-colors hover:text-primary-glow",
                      children: l.label,
                    }),
              },
              "to" in l ? l.to : l.href,
            ),
            ),
          }),
          ],
        }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
          "aria-label": "Footer secondary links",
          children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            className: "font-mono text-[11px] uppercase tracking-[0.2em] text-foreground",
            children: "More",
          }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "mt-4 space-y-3 text-sm text-muted-foreground",
            children: moreLinks.map((l) =>
                    /* @__PURE__ */(0, import_jsx_runtime.jsx)(
              "li",
              {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: l.to,
                  className: "transition-colors hover:text-primary-glow",
                  children: l.label,
                }),
              },
              l.to,
            ),
            ),
          }),
          ],
        }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            className: "font-mono text-[11px] uppercase tracking-[0.2em] text-foreground",
            children: "Get in touch",
          }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
            href: `mailto:${club.email}`,
            className:
              "mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-glow",
            children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
              className: "size-4 shrink-0",
            }),
              club.email,
            ],
          }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "mt-6 flex flex-wrap gap-2",
            children: club.socials.map((s) =>
                    /* @__PURE__ */(0, import_jsx_runtime.jsx)(
              "li",
              {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: s.href,
                  target: "_blank",
                  rel: "noreferrer noopener",
                  className:
                    "glass inline-flex rounded-full px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary-glow",
                  children: s.label,
                }),
              },
              s.label,
            ),
            ),
          }),
          ],
        }),
        ],
      }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "divider-glow mt-14" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className:
          "flex flex-col gap-3 pt-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:justify-between sm:text-left",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          children: ["© ", /* @__PURE__ */ new Date().getFullYear(), " ", club.name],
        }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          children: "Built by students, for students",
        }),
        ],
      }),
      ],
    }),
  });
}
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-7xl font-bold text-foreground",
        children: "404",
      }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        className: "mt-4 text-xl font-semibold text-foreground",
        children: "Page not found",
      }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "mt-2 text-sm text-muted-foreground",
        children: "The page you're looking for doesn't exist or has been moved.",
      }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-6",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
          to: "/",
          className:
            "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Go home",
        }),
      }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-xl font-semibold tracking-tight text-foreground",
        children: "This page didn't load",
      }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "mt-2 text-sm text-muted-foreground",
        children: "Something went wrong on our end. You can try refreshing or head back home.",
      }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-6 flex flex-wrap justify-center gap-2",
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className:
            "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again",
        }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          href: "/",
          className:
            "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home",
        }),
        ],
      }),
      ],
    }),
  });
}
var Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Tech Fusion Club (TFC) | SRMU Technical Club" },
      {
        name: "description",
        content:
          "Tech Fusion Club (TFC) is the premier student-led technical club at SRMU. We organize Viveka, engineering hackathons, tech workshops, and coding events. Founded by Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tech club, coding club srmu, technical events, hackathon, student community",
      },
      {
        name: "author",
        content: "Praveen Singh (webdevpraveen)",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        property: "og:site_name",
        content: "Tech Fusion Club SRMU",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: "Tech Fusion Club (TFC) SRMU | Viveka & Tech Events",
      },
      {
        property: "og:description",
        content:
          "Join the official Tech Fusion Club at SRMU. We host the Viveka fest, hackathons, and web development workshops. Lead by Praveen Singh (webdevpraveen).",
      },
      {
        property: "og:image",
        content: "https://techfusionclub.vercel.app/images/branding/og-preview.jpg",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Tech Fusion Club (TFC) SRMU",
      },
      {
        name: "twitter:description",
        content: "The premier student tech community at SRMU. Viveka fest, hackathons & more.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "canonical",
        href: "https://techfusionclub.vercel.app",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tech Fusion Club",
          alternateName: ["TFC SRMU", "Tech Fusion Club SRMU"],
          url: "https://techfusionclub.vercel.app",
          logo: "https://techfusionclub.vercel.app/images/branding/techfusionlogo.png",
          description:
            "Student-led technical club running workshops, hackathons and the Viveka annual fest at SRMU.",
          foundingDate: "2019",
          founder: {
            "@type": "Person",
            name: "Praveen Singh",
            alternateName: "webdevpraveen",
          },
          email: "techfusionclub@srmu.ac.in",
          sameAs: ["https://github.com/webdevpraveen", "https://www.linkedin.com/in/webdevpraveen"],
          keywords:
            "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    suppressHydrationWarning: true,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
      children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap",
      }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap",
        media: "print",
        onLoad: "this.media='all'",
      }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap",
        }),
      }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
        dangerouslySetInnerHTML: {
          __html: `(function(){try{var t=localStorage.getItem("tf-theme");if(t==="dark"||t==="light"){document.documentElement.className=t}else{document.documentElement.className="light"}}catch(e){document.documentElement.className="light"}})()`,
        },
      }),
      ],
    }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
      children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})],
    }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
      client: queryClient,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
        href: "#main",
        className:
          "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-foreground",
        children: "Skip to content",
      }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
        id: "main",
        className: "pt-16 sm:pt-20",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
      }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
      ],
    }),
  });
}
var $$splitComponentImporter$7 = () => import("./routes-uQwSScaj.mjs");
var Route$7 = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Fusion Club (TFC SRMU) | Coding & Viveka Fest" },
      {
        name: "description",
        content:
          "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest. Founded by Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, engineering club, tech community",
      },
      {
        property: "og:title",
        content: "Tech Fusion Club (TFC SRMU) | Viveka Fest & Coding",
      },
      {
        property: "og:description",
        content:
          "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.",
      },
      {
        name: "twitter:title",
        content: "Tech Fusion Club (TFC SRMU)",
      },
      {
        name: "twitter:description",
        content:
          "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
});
var $$splitComponentImporter$6 = () => import("./about-DfJxV0i_.mjs");
var Route$6 = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tech Fusion Club (TFC) | SRMU Coding Club" },
      {
        name: "description",
        content:
          "Discover Tech Fusion Club (TFC) at Shri Ramswaroop Memorial University (SRMU). Founded by Praveen Singh (webdevpraveen), we host Viveka fest, hackathons, and coding events.",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, coding club srmu, tech fusion srmu",
      },
      {
        property: "og:title",
        content: "About Tech Fusion Club (TFC) | SRMU Coding Club",
      },
      {
        property: "og:description",
        content:
          "Discover Tech Fusion Club (TFC) at Shri Ramswaroop Memorial University (SRMU). Founded by Praveen Singh (webdevpraveen), we host Viveka fest, hackathons, and coding events.",
      },
      {
        property: "og:url",
        content: "https://techfusionclub.vercel.app/about",
      },
      {
        name: "twitter:title",
        content: "About Tech Fusion Club (TFC SRMU)",
      },
      {
        name: "twitter:description",
        content:
          "Discover Tech Fusion Club (TFC) at SRMU. Founded by Praveen Singh (webdevpraveen), we host Viveka fest and hackathons.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://techfusionclub.vercel.app/about",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
});
var $$splitComponentImporter$5 = () => import("./alumni-Bmxs01Ou.mjs");
var Route$5 = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni Network | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Explore the successful alumni network of Tech Fusion Club (TFC) at SRMU. Past leaders, members, and tech professionals who built Viveka and the club's legacy alongside Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tfc alumni, srmu alumni",
      },
      {
        property: "og:title",
        content: "Alumni Network | Tech Fusion Club (TFC) SRMU",
      },
      {
        property: "og:description",
        content:
          "Explore the successful alumni network of Tech Fusion Club (TFC) at SRMU. Past leaders who built Viveka.",
      },
      {
        property: "og:url",
        content: "https://techfusionclub.vercel.app/alumni",
      },
      {
        name: "twitter:title",
        content: "Alumni | Tech Fusion Club SRMU",
      },
      {
        name: "twitter:description",
        content:
          "Explore the successful alumni network of Tech Fusion Club (TFC) at SRMU. Past leaders who built Viveka.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://techfusionclub.vercel.app/alumni",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
});
var $$splitComponentImporter$4 = () => import("./gallery-BujJdGII.mjs");
var Route$4 = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Event Gallery | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Photos from Tech Fusion Club (TFC) workshops, engineering hackathons, and the Viveka fest at SRMU. WebDevPraveen and the tech community in action.",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tfc gallery, srmu tech events",
      },
      {
        property: "og:title",
        content: "Event Gallery | Tech Fusion Club (TFC) SRMU",
      },
      {
        property: "og:description",
        content: "Photos from Tech Fusion Club (TFC) workshops and the Viveka fest.",
      },
      {
        property: "og:url",
        content: "https://techfusionclub.vercel.app/gallery",
      },
      {
        name: "twitter:title",
        content: "Event Gallery | Tech Fusion Club SRMU",
      },
      {
        name: "twitter:description",
        content: "Photos from Tech Fusion Club (TFC) workshops and the Viveka fest.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://techfusionclub.vercel.app/gallery",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
});
var $$splitComponentImporter$3 = () => import("./governance-BwA8wmVW.mjs");
var Route$3 = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Meet the visionary patrons, registrar, and faculty coordinators governing Tech Fusion Club (TFC) at Shri Ramswaroop Memorial University (SRMU). Powering Viveka fest and tech communities.",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tfc governance, srmu faculty",
      },
      {
        property: "og:title",
        content: "Governance | Tech Fusion Club (TFC) SRMU",
      },
      {
        property: "og:description",
        content:
          "Meet the visionary patrons, registrar, and faculty coordinators governing Tech Fusion Club (TFC) at SRMU.",
      },
      {
        property: "og:url",
        content: "https://techfusionclub.vercel.app/governance",
      },
      {
        name: "twitter:title",
        content: "Governance | Tech Fusion Club SRMU",
      },
      {
        name: "twitter:description",
        content:
          "Meet the visionary patrons, registrar, and faculty coordinators governing Tech Fusion Club (TFC) at SRMU.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://techfusionclub.vercel.app/governance",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
var $$splitComponentImporter$2 = () => import("./join-OcGqobRq.mjs");
var Route$2 = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Tech Fusion Club (TFC) SRMU | Tech Community" },
      {
        name: "description",
        content:
          "Apply to join Tech Fusion Club (TFC) at SRMU. Get mentored, participate in Viveka hackathons, and learn web development with Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, join tech club, srmu coding community",
      },
      {
        property: "og:title",
        content: "Join Tech Fusion Club (TFC) SRMU",
      },
      {
        property: "og:description",
        content: "Apply to join Tech Fusion Club (TFC) at SRMU. Participate in Viveka hackathons.",
      },
      {
        property: "og:url",
        content: "https://techfusionclub.vercel.app/join",
      },
      {
        name: "twitter:title",
        content: "Join Tech Fusion Club SRMU",
      },
      {
        name: "twitter:description",
        content: "Apply to join Tech Fusion Club (TFC) at SRMU. Participate in Viveka hackathons.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://techfusionclub.vercel.app/join",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
var $$splitComponentImporter$1 = () => import("./team-mvmNg9H4.mjs");
var Route$1 = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Core Team | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Meet the core team of Tech Fusion Club (TFC) at SRMU. Faculty Coordinators, General Secretaries, and department heads driving Viveka fest and tech events. Founded by Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tech fusion team, coding club leaders",
      },
      {
        property: "og:title",
        content: "Core Team | Tech Fusion Club (TFC) SRMU",
      },
      {
        property: "og:description",
        content:
          "Meet the core team of Tech Fusion Club (TFC) at SRMU. Driving Viveka fest and tech events.",
      },
      {
        property: "og:url",
        content: "https://techfusionclub.vercel.app/team",
      },
      {
        name: "twitter:title",
        content: "Team | Tech Fusion Club (TFC SRMU)",
      },
      {
        name: "twitter:description",
        content:
          "Meet the core team of Tech Fusion Club (TFC) at SRMU. Driving Viveka fest and tech events.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://techfusionclub.vercel.app/team",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
var $$splitComponentImporter = () => import("./events.index-UrKhTDOb.mjs");
var Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events & Hackathons | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU. Web development, AI/ML coding events hosted by Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tech events, hackathon srmu, coding workshops",
      },
      {
        property: "og:title",
        content: "Events & Hackathons | Tech Fusion Club SRMU",
      },
      {
        property: "og:description",
        content:
          "Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU.",
      },
      {
        property: "og:url",
        content: "https://techfusionclub.vercel.app/events",
      },
      {
        name: "twitter:title",
        content: "Tech Fusion Club (TFC) Events",
      },
      {
        name: "twitter:description",
        content:
          "Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://techfusionclub.vercel.app/events",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
var rootRouteChildren = {
  IndexRoute: Route$7.update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$8,
  }),
  AboutRoute: Route$6.update({
    id: "/about",
    path: "/about",
    getParentRoute: () => Route$8,
  }),
  AlumniRoute: Route$5.update({
    id: "/alumni",
    path: "/alumni",
    getParentRoute: () => Route$8,
  }),
  GalleryRoute: Route$4.update({
    id: "/gallery",
    path: "/gallery",
    getParentRoute: () => Route$8,
  }),
  GovernanceRoute: Route$3.update({
    id: "/governance",
    path: "/governance",
    getParentRoute: () => Route$8,
  }),
  JoinRoute: Route$2.update({
    id: "/join",
    path: "/join",
    getParentRoute: () => Route$8,
  }),
  TeamRoute: Route$1.update({
    id: "/team",
    path: "/team",
    getParentRoute: () => Route$8,
  }),
  EventsIndexRoute: Route.update({
    id: "/events/",
    path: "/events/",
    getParentRoute: () => Route$8,
  }),
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export {
  router_DHiAGOZx_exports as a,
  timeline as c,
  faculty as i,
  useTheme as l,
  cn as n,
  stats as o,
  domains as r,
  testimonial as s,
  club as t,
  values as u,
};
