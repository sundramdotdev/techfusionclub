import { i as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import {
  D as CodeXml,
  E as Cpu,
  F as Award,
  I as ArrowUpRight,
  L as ArrowRight,
  M as CalendarDays,
  O as CircleCheck,
  P as BookOpen,
  S as GraduationCap,
  T as ExternalLink,
  a as Trophy,
  b as Lightbulb,
  c as Sparkles,
  f as Rocket,
  g as MapPin,
  i as UserPlus,
  j as ChevronDown,
  l as Shield,
  o as Terminal,
  p as Quote,
  r as Users,
  t as Zap,
} from "../_libs/lucide-react.mjs";
import {
  c as timeline,
  i as faculty,
  l as useTheme,
  n as cn,
  o as stats,
  r as domains,
  s as testimonial,
  t as club,
  u as values,
} from "./router-DHiAGOZx.mjs";
import {
  i as useCountUp,
  n as Section,
  r as SectionHeading,
  t as Reveal,
} from "./Section-kqI_AlrU.mjs";
import { t as CTABanner } from "./CTABanner-Owv020TI.mjs";
import { t as GlowCard } from "./GlowCard-CBsqC4Cc.mjs";
import { a as formatEventDate, i as featuredEvent, r as events } from "./events-DwZD37OF.mjs";
import { t as galleryPhotos } from "./gallery-DXVzHa-j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uQwSScaj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StatCounter({ value, prefix = "", suffix = "", label, className }) {
  const { ref, value: current, settled } = useCountUp(value);
  const formattedVal = prefix && current < 10 ? `${prefix}${current}` : current;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: cn("text-center sm:text-left", className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: cn(
          "font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
          settled && "animate-flicker",
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            ref,
            children: formattedVal,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-primary-glow",
            children: suffix,
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
        children: label,
      }),
    ],
  });
}
var pillars = [
  {
    number: "01",
    title: "Weekly Hands-on Build Nights",
    subtitle: "Shipping Code Over Slideware",
    description:
      "Every Thursday evening, members gather in the computer labs to write code, debug real-world applications, and collaborate on cross-domain projects.",
    tags: ["Build Nights", "Peer Coding", "Live Demos"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, {
      className: "size-6 text-primary-glow",
    }),
  },
  {
    number: "02",
    title: "1-on-1 Senior Mentorship Ladder",
    subtitle: "From Beginner to Domain Lead",
    description:
      "Every junior is matched with a senior mentor inside their domain for code reviews, project guidance, and technical career advice.",
    tags: ["Code Review", "Career Prep", "1-on-1 Help"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-6 text-accent" }),
  },
  {
    number: "03",
    title: "Production Shipping & Open Source",
    subtitle: "Real Repositories, Real Users",
    description:
      "Members leave university with deployed web apps, open-source pull requests, and production code that interviewers actually ask about.",
    tags: ["GitHub Repos", "Open Source", "Public Deploy"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
      className: "size-6 text-emerald-400",
    }),
  },
  {
    number: "04",
    title: "Flagship Hackathons & Competitions",
    subtitle: "Organize & Compete at Scale",
    description:
      "Lead and participate in Viveka 6.0, Smart India Hackathon campus prep, CTFs, and intra-college tech-culture expos.",
    tags: ["Viveka 6.0", "SIH Prep", "CTF Gauntlets"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-6 text-cyan-400" }),
  },
];
function PillarsSection() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "grid gap-6 sm:grid-cols-2",
    children: pillars.map((p) =>
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        GlowCard,
        {
          className: "glass lift group rounded-2xl p-7 flex flex-col justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center justify-between gap-4 mb-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "rounded-xl border border-border bg-surface-strong p-3",
                      children: p.icon,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className: "font-mono text-xs font-bold text-primary-glow/60",
                      children: ["PILLAR ", p.number],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className:
                    "font-display text-xl font-bold text-foreground group-hover:text-primary-glow transition-colors",
                  children: p.title,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "font-mono text-xs text-primary-glow mt-1 font-semibold",
                  children: p.subtitle,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-3 text-sm text-muted-foreground leading-relaxed",
                  children: p.description,
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-2",
              children: p.tags.map((t) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "span",
                  {
                    className:
                      "rounded-full border border-border/70 bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
                    children: t,
                  },
                  t,
                ),
              ),
            }),
          ],
        },
        p.number,
      ),
    ),
  });
}
var milestones = [
  {
    step: "PHASE 01",
    title: "Onboarding & Domain Selection",
    quarter: "AUG - SEP",
    description: "Orientation week, domain diagnostic test, and 1-on-1 mentor assignment.",
    highlights: ["Orientation Keynote", "Domain Diagnostic", "1-on-1 Mentor Allocation"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {
      className: "size-5 text-primary-glow",
    }),
  },
  {
    step: "PHASE 02",
    title: "Deep-Dive Bootcamps & Build Nights",
    quarter: "OCT - DEC",
    description: "Hands-on domain workshops, weekly build nights, and mini-project submissions.",
    highlights: ["8 Domain Bootcamps", "Weekly Build Nights", "Git & CI/CD Certification"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
      className: "size-5 text-accent",
    }),
  },
  {
    step: "PHASE 03",
    title: "SIH Hackathon & Project Incubation",
    quarter: "JAN - MAR",
    description:
      "Participate in Smart India Hackathon campus rounds and build production-ready projects in teams.",
    highlights: ["SIH Internal Hackathon", "Live Project Demos", "National Level Pitching"],
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, {
      className: "size-5 text-emerald-400",
    }),
  },
  {
    step: "PHASE 04",
    title: "Viveka 6.0 Annual Fest & Leadership",
    quarter: "APR - MAY",
    description:
      "Organize the university's flagship technical festival and step into core leadership roles.",
    highlights: [
      "Viveka 6.0 Flagship Fest",
      "Harmony Tech-Culture Expo",
      "Alumni Placement Network",
    ],
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5 text-cyan-400" }),
  },
];
function ClubRoadmap() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "relative mx-auto max-w-5xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-glow via-accent to-primary/20 opacity-40",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "space-y-8 lg:space-y-12",
        children: milestones.map((m, idx) => {
          const isEven = idx % 2 === 0;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: `relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 size-10 rounded-full border-2 border-primary-glow bg-card items-center justify-center shadow-[0_0_15px_rgba(217,72,15,0.5)]",
                  children: m.icon,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "w-full lg:w-[calc(50%-2.5rem)]",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
                    className:
                      "glass lift rounded-2xl p-6 sm:p-7 border border-border hover:border-primary-glow/60 transition-all",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between gap-4 mb-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "font-mono text-xs uppercase tracking-widest text-primary-glow font-bold",
                            children: m.step,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              "font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-border bg-surface text-muted-foreground",
                            children: m.quarter,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "font-display text-xl font-bold text-foreground",
                        children: m.title,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-2.5 text-sm text-muted-foreground leading-relaxed",
                        children: m.description,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-2",
                        children: m.highlights.map((h) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "span",
                            {
                              className:
                                "inline-flex items-center gap-1 font-mono text-[10px] text-foreground/80 bg-surface-strong px-2.5 py-1 rounded-md",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                                  className: "size-3 text-emerald-400",
                                }),
                                h,
                              ],
                            },
                            h,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            },
            m.step,
          );
        }),
      }),
    ],
  });
}
/**
 * Infinite scrolling marquee strip — SRMU-style ticker.
 * Pure CSS animation, no JS runtime, duplicates children for seamless loop.
 */
function MarqueeStrip({ items, speed = 35, className, reverse = false }) {
  const content = items.map((item, i) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "span",
      {
        className:
          "mx-6 inline-flex items-center gap-2.5 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-wider text-foreground/80 sm:mx-8 sm:text-base",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "size-1.5 rounded-full bg-primary-glow",
          }),
          item,
        ],
      },
      i,
    ),
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: cn(
      "relative overflow-hidden border-y border-border/60 bg-surface/40 py-4 backdrop-blur-md",
      className,
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: cn("flex w-max", reverse ? "animate-marquee-reverse" : "animate-marquee"),
        style: { animationDuration: `${speed}s` },
        children: [content, content],
      }),
    ],
  });
}
var faqs = [
  {
    question: "Who can join Tech Fusion Club?",
    answer:
      "Any student enrolled at Shri Ramswaroop Memorial University (SRMU) — regardless of department, year, or prior coding experience. We run a beginner-friendly onboarding track every semester.",
  },
  {
    question: "Is there any membership fee?",
    answer:
      "No. Tech Fusion Club is a university-recognized student body. There is no membership fee to join. Some flagship events (like Viveka) may have a nominal registration fee for external participants.",
  },
  {
    question: "How often do events and workshops happen?",
    answer:
      "We host weekly build nights every Thursday, monthly domain-specific workshops, and 2–3 large-scale fests and hackathons per academic year — including our flagship Viveka tech fest.",
  },
  {
    question: "What domains does the club cover?",
    answer:
      "Six active domains: Web Development, AI / ML, Cybersecurity, App Development, Cloud & DevOps, and UI/UX Design. Every new member picks a primary domain and gets a senior mentor inside it.",
  },
  {
    question: "Can I switch domains after joining?",
    answer:
      "Absolutely. Cross-domain exploration is encouraged. Many of our strongest members have worked across 2–3 domains during their time in the club.",
  },
  {
    question: "What is Viveka?",
    answer:
      "Viveka is the university's flagship annual technical festival organized entirely by Tech Fusion Club. It features a 36-hour hackathon, SIH internal prep, coding arenas, tech talks, project expos, and ₹1.5L+ in prizes.",
  },
];
function FAQSection() {
  const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "mx-auto max-w-3xl divide-y divide-border/60",
    children: faqs.map((faq, i) => {
      const isOpen = openIndex === i;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
              onClick: () => setOpenIndex(isOpen ? null : i),
              className:
                "flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary-glow",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "font-display text-base font-semibold text-foreground sm:text-lg",
                  children: faq.question,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
                  className: cn(
                    "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180 text-primary-glow",
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0",
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "overflow-hidden",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-sm leading-relaxed text-muted-foreground sm:text-base",
                  children: faq.answer,
                }),
              }),
            }),
          ],
        },
        i,
      );
    }),
  });
}
/**
 * Testimonials section — student quote + faculty coordinator message.
 * Glassmorphism cards with accent quote marks.
 */
function TestimonialsSection() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "grid gap-6 lg:grid-cols-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "glass-strong relative h-full overflow-hidden rounded-2xl p-8 sm:p-10",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
              className: "absolute right-6 top-6 size-12 text-primary/15",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "eyebrow mb-5",
                  children: "Student Voice",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
                  className:
                    "text-pretty text-base italic leading-relaxed text-foreground/90 sm:text-lg",
                  children: ['"', testimonial.quote, '"'],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className: "mt-6 font-display text-sm font-semibold text-primary-glow",
                  children: ["— ", testimonial.author],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
        delay: 100,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "glass-strong relative h-full overflow-hidden rounded-2xl p-8 sm:p-10",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
              className: "absolute right-6 top-6 size-12 text-accent/15",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "eyebrow mb-5",
                  children: "Faculty Coordinator",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
                  className:
                    "text-pretty text-base italic leading-relaxed text-foreground/90 sm:text-lg",
                  children: ['"', faculty.message, '"'],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "mt-6 flex items-center gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: faculty.photo,
                      alt: faculty.name,
                      className: "size-12 rounded-full border-2 border-primary/40 object-cover",
                      loading: "lazy",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "font-display text-sm font-semibold text-primary-glow",
                          children: faculty.name,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className:
                            "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
                          children: faculty.designation,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
/**
 * Upcoming events grid — shows the next 3 events in card format.
 * SRMU-style event cards with cover image, date badge, and action button.
 */
function UpcomingEventsGrid() {
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 3);
  if (upcoming.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
    children: upcoming.map((event, i) =>
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Reveal,
        {
          delay: i * 80,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
            className: "glass lift group flex h-full flex-col overflow-hidden rounded-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "relative h-48 overflow-hidden",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                    src: event.cover,
                    alt: event.title,
                    className:
                      "size-full object-cover transition-transform duration-500 group-hover:scale-105",
                    loading: "lazy",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "absolute left-4 top-4 rounded-full border border-primary/40 bg-card/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-glow backdrop-blur-sm",
                    children: event.category,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex flex-1 flex-col justify-between p-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className:
                          "font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary-glow",
                        children: event.title,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2",
                        children: event.summary,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "mt-5 flex items-center justify-between gap-3 border-t border-border/50 pt-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className:
                          "flex items-center gap-2 font-mono text-[11px] text-muted-foreground",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
                            className: "size-3.5 text-primary-glow",
                          }),
                          formatEventDate(event),
                        ],
                      }),
                      event.attendees &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
                              className: "size-3.5",
                            }),
                            event.attendees,
                            "+",
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        event.slug,
      ),
    ),
  });
}
/**
 * SRMU-style full-screen hero with:
 * - Looping background video
 * - Dark gradient overlay
 * - Left: tagline text (passed as children)
 * - Right: TFC logo with rotating + pulse effects
 */
function VideoHero({ children }) {
  const { theme } = useTheme();
  const logoSrc =
    theme === "light"
      ? "/images/branding/techfusionlogolight.png"
      : "/images/branding/techfusionlogo.png";
  const logoRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    let raf = 0;
    const onMouseMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!logoRef.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        logoRef.current.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
    className: "relative min-h-[100dvh] overflow-hidden",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        preload: "auto",
        className: "absolute inset-0 size-full object-cover",
        poster: "/images/branding/hero.jpg",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
          src: "/images/herosection_background.mp4",
          type: "video/mp4",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "circuit-lines pointer-events-none absolute inset-0 opacity-30",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-center px-5 sm:px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "order-2 lg:order-1",
              children,
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "order-1 flex items-center justify-center lg:order-2",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "relative flex items-center justify-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "absolute size-64 sm:size-80 lg:size-96 rounded-full border border-primary/20 animate-[spin_30s_linear_infinite]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "absolute -top-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-primary-glow shadow-[0_0_12px_4px_rgba(217,72,15,0.8)]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-accent shadow-[0_0_12px_4px_rgba(245,158,11,0.6)]",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "absolute size-52 sm:size-72 lg:size-80 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite_reverse]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "absolute top-1/2 -right-1 -translate-y-1/2 size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_3px_rgba(52,211,153,0.7)]",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "absolute top-1/2 -left-1 -translate-y-1/2 size-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_3px_rgba(34,211,238,0.7)]",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "absolute size-48 sm:size-64 lg:size-72 rounded-full bg-[radial-gradient(circle,_oklch(0.6_0.19_38_/_30%)_0%,_transparent_70%)] animate-pulse",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    ref: logoRef,
                    className:
                      "relative z-10 will-change-transform transition-transform duration-300 ease-out",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: logoSrc,
                      alt: "Tech Fusion Club Logo",
                      className:
                        "size-40 sm:size-56 lg:size-64 object-contain animate-[spin_18s_linear_infinite] drop-shadow-[0_0_30px_rgba(217,72,15,0.6)]",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent",
      }),
    ],
  });
}
/**
 * SRMU-style video/image showcase cards — row of category highlight cards
 * that appear right below the hero. Each shows a domain with icon + title.
 * Replaces the SRMU "AI Learning / Annual Fest / Clubs / Sports" cards.
 */
var showcaseItems = [
  {
    title: "Hackathons & Fests",
    subtitle: "Viveka 6.0, SIH Prep",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6" }),
    image: "/images/events/2026/fusionx-2026/cover.jpg",
    color: "from-primary/80 to-orange-800/80",
  },
  {
    title: "Web & App Dev",
    subtitle: "React, Flutter, APIs",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-6" }),
    image: "/images/events/2025/design-systems-workshop/cover.jpg",
    color: "from-cyan-600/80 to-blue-900/80",
  },
  {
    title: "AI / ML Research",
    subtitle: "PyTorch, LLMs, Data",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-6" }),
    image: "/images/events/2026/intro-to-llm-apps/cover.jpg",
    color: "from-accent/80 to-amber-900/80",
  },
  {
    title: "Cybersecurity & CTF",
    subtitle: "Capture The Flag Events",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-6" }),
    image: "/images/events/2026/capture-the-flag-spring/cover.jpg",
    color: "from-emerald-600/80 to-green-900/80",
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Docker, CI/CD, AWS",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-6" }),
    image: "/images/events/2025/cloud-native-seminar/cover.jpg",
    color: "from-purple-600/80 to-indigo-900/80",
  },
  {
    title: "Design & Creative",
    subtitle: "UI/UX, Branding, Figma",
    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-6" }),
    image: "/images/events/2024/git-good-bootcamp/cover.jpg",
    color: "from-pink-600/80 to-rose-900/80",
  },
];
function DomainShowcase() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4",
    children: showcaseItems.map((item, i) =>
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Reveal,
        {
          delay: i * 60,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
            className: "group relative h-44 sm:h-52 overflow-hidden rounded-2xl cursor-pointer",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                src: item.image,
                alt: item.title,
                loading: "lazy",
                className:
                  "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: `absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 transition-opacity duration-300 group-hover:opacity-85`,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "relative z-10 flex h-full flex-col justify-end p-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "mb-2 text-white/90 transition-transform duration-300 group-hover:-translate-y-1",
                    children: item.icon,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className:
                      "font-display text-sm font-bold text-white leading-tight sm:text-base",
                    children: item.title,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "mt-0.5 font-mono text-[10px] uppercase tracking-wider text-white/70",
                    children: item.subtitle,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "absolute inset-0 z-20 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none",
              }),
            ],
          }),
        },
        item.title,
      ),
    ),
  });
}
function Home() {
  const previewPhotos = galleryPhotos.slice(0, 6);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoHero, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "py-8 lg:py-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "animate-rise [animation-delay:0ms]",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className:
                  "glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-glow border border-primary/30",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }),
                  "Est. ",
                  club.foundedYear,
                  " — ",
                  club.university,
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
              className:
                "mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight animate-rise [animation-delay:100ms] sm:text-5xl lg:text-6xl xl:text-7xl",
              children: [
                "Where ideas",
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-gradient",
                  children: "fuse",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
                " into technology.",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className:
                "mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground animate-rise [animation-delay:200ms] sm:text-lg",
              children: [
                club.name,
                " is the student-run technical collective at SRMU. Six domains, one calendar of workshops and hackathons, and a mentorship ladder running unbroken since ",
                club.foundedYear,
                ".",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "mt-8 flex flex-col gap-3 animate-rise [animation-delay:300ms] sm:flex-row sm:items-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                  to: "/events",
                  className:
                    "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] shadow-[0_0_25px_rgba(217,72,15,0.4)]",
                  children: [
                    "Explore events",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                      className:
                        "size-4 transition-transform duration-300 group-hover:translate-x-1",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/join",
                  className:
                    "glass pulse-glow inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold text-foreground transition-colors hover:text-primary-glow",
                  children: "Join the club",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "mt-8 flex flex-wrap gap-2 animate-rise [animation-delay:400ms]",
              children: [
                {
                  name: "Web Dev",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, {
                    className: "size-3",
                  }),
                },
                {
                  name: "AI / ML",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-3" }),
                },
                {
                  name: "Cyber",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
                    className: "size-3",
                  }),
                },
                {
                  name: "App Dev",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                    className: "size-3",
                  }),
                },
                {
                  name: "Cloud",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
                    className: "size-3",
                  }),
                },
                {
                  name: "Design",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3" }),
                },
              ].map((d) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "span",
                  {
                    className:
                      "inline-flex items-center gap-1.5 rounded-full bg-surface/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/70 border border-border/50 backdrop-blur-sm",
                    children: [d.icon, d.name],
                  },
                  d.name,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "relative z-10 -mt-16 px-5 sm:px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mx-auto max-w-7xl",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DomainShowcase, {}),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mt-12",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, {
          items: [
            "Viveka 6.0 — Flagship Annual Tech Fest",
            "320+ Active Members",
            "6 Technical Domains",
            "Weekly Build Nights",
            "Smart India Hackathon (SIH) Prep",
            "Open Source Contributions",
            "1-on-1 Mentorship Program",
            "Industry Guest Lectures",
          ],
          speed: 40,
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
            className: "grid grid-cols-2 gap-8 sm:grid-cols-4",
            children: stats.map((s) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                StatCounter,
                {
                  value: s.value,
                  prefix: s.prefix,
                  suffix: s.suffix,
                  label: s.label,
                  className: "text-center",
                },
                s.label,
              ),
            ),
          }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "Featured",
            title: "What's next on the calendar",
            body: "Our flagship fest and every workshop in between — all open to students from any department.",
            action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
              to: "/events",
              className:
                "glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow",
              children: [
                "All events ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
            className:
              "glass-strong border-animated mt-12 grid overflow-hidden rounded-[2rem] lg:grid-cols-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "relative min-h-[18rem] overflow-hidden",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                    src: featuredEvent.cover,
                    alt: featuredEvent.title,
                    className: "size-full object-cover opacity-90",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent lg:bg-gradient-to-r",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "p-8 sm:p-12",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent",
                    children:
                      featuredEvent.status === "upcoming" ? "Upcoming" : featuredEvent.category,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className:
                      "mt-5 text-balance font-display text-2xl font-bold leading-snug sm:text-3xl",
                    children: featuredEvent.title,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-4 text-pretty leading-relaxed text-muted-foreground",
                    children: featuredEvent.summary,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                    className:
                      "mt-7 space-y-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                        className: "flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
                            className: "size-3.5 text-primary-glow",
                          }),
                          " ",
                          formatEventDate(featuredEvent),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                        className: "flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                            className: "size-3.5 text-primary-glow",
                          }),
                          " ",
                          featuredEvent.venue,
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "mt-9 flex flex-wrap gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                        to: "/events",
                        className:
                          "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]",
                        children: [
                          "Event details ",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                            className: "size-4",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                        href: "https://vivekatheintelligence.in/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "glass inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-primary-glow",
                        children: [
                          "Viveka 6.0 Site ",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                            className: "size-3.5",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "On the Horizon",
            title: "Upcoming events & competitions",
            body: "Hackathons, workshops, and tech-culture fests — all organized by students, for students.",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-12",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingEventsGrid, {}),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "The Framework",
            title: "Four Pillars of Tech Fusion Club",
            body: "How our technical collective operates week after week to produce industry-ready student engineers.",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-12",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillarsSection, {}),
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "eyebrow",
                  children: "Our mission",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  className: "mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl",
                  children: "A club that measures itself in things shipped.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              delay: 100,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-pretty text-lg leading-relaxed text-foreground/90",
                  children: club.mission,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-5 text-pretty leading-relaxed text-muted-foreground",
                  children: club.vision,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                  to: "/about",
                  className:
                    "group mt-8 inline-flex items-center gap-2 font-semibold text-primary-glow",
                  children: [
                    "Read the full story",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
                      className:
                        "size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "What we work on",
            title: "Six domains, one shared standard of craft",
            body: "Every member picks a domain on day one and gets a mentor inside it. Cross-domain project teams are the norm, not the exception.",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
            children: domains.map((d, i) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Reveal,
                {
                  as: "li",
                  delay: i * 60,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
                    className: "glass lift group h-full rounded-2xl p-7",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex items-baseline justify-between gap-4",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                            className:
                              "font-display text-lg font-bold transition-colors group-hover:text-primary-glow",
                            children: d.name,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "font-mono text-[11px] text-primary-glow/60",
                            children: String(i + 1).padStart(2, "0"),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                        children: d.blurb,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                        className: "mt-5 flex flex-wrap gap-1.5",
                        children: d.stack.map((t) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "li",
                            {
                              className:
                                "rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground",
                              children: t,
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                },
                d.slug,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "What We Stand For",
            title: "Our core values",
            body: "The principles that guide every project, event, and decision inside Tech Fusion Club.",
            align: "center",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
            children: values.map((v, i) => {
              const icons = [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
                  className: "size-6 text-primary-glow",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
                  className: "size-6 text-accent",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
                  className: "size-6 text-emerald-400",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
                  className: "size-6 text-cyan-400",
                }),
              ];
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Reveal,
                {
                  delay: i * 80,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
                    className: "glass lift group h-full rounded-2xl p-6 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "mx-auto mb-4 flex size-14 items-center justify-center rounded-xl border border-border bg-surface-strong",
                        children: icons[i],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className:
                          "font-display text-lg font-bold transition-colors group-hover:text-primary-glow",
                        children: v.title,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                        children: v.body,
                      }),
                    ],
                  }),
                },
                v.title,
              );
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, {
        items: [
          "Web Development",
          "AI / Machine Learning",
          "Cybersecurity & CTF",
          "App Development",
          "Cloud & DevOps",
          "UI/UX Design",
          "Hackathons",
          "Open Source",
        ],
        speed: 30,
        reverse: true,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "The Lifecycle",
            title: "Your 1-Year Journey in Tech Fusion",
            body: "From a beginner joining day one to organizing campus hackathons and landing tech roles.",
            align: "center",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-12",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClubRoadmap, {}),
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "What People Say",
            title: "Voices from the community",
            body: "Hear from the students and faculty who make Tech Fusion Club what it is.",
            align: "center",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-12",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "Since 2019",
            title: "Our journey so far",
            body: "From a handful of students in a CS lab to the university's most active technical community.",
            align: "center",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mx-auto mt-12 max-w-3xl space-y-0",
            children: timeline.map((t, i) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Reveal,
                {
                  delay: i * 60,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "relative flex gap-6 pb-10 last:pb-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/50 bg-card font-mono text-xs font-bold text-primary-glow shadow-[0_0_12px_rgba(217,72,15,0.3)]",
                            children: t.year.slice(-2),
                          }),
                          i < timeline.length - 1 &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "mt-2 w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-transparent",
                            }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "pt-1.5",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className:
                              "font-mono text-[11px] uppercase tracking-widest text-primary-glow",
                            children: t.year,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                            className: "mt-1 font-display text-lg font-bold text-foreground",
                            children: t.title,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                            children: t.body,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                t.year,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "From the floor",
            title: "Recent event photos",
            action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
              to: "/gallery",
              className:
                "glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow",
              children: [
                "Full gallery ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
            className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
            children: previewPhotos.map((p) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                Link,
                {
                  to: "/gallery",
                  className: "group relative overflow-hidden rounded-2xl border border-border",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: p.src,
                      alt: p.alt,
                      loading: "lazy",
                      decoding: "async",
                      className:
                        "aspect-square w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
                      children: p.event,
                    }),
                  ],
                },
                p.src,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
            eyebrow: "Got Questions?",
            title: "Frequently asked questions",
            body: "Everything you need to know about joining and participating in Tech Fusion Club.",
            align: "center",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-12",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQSection, {}),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {}),
    ],
  });
}
//#endregion
export { Home as component };
