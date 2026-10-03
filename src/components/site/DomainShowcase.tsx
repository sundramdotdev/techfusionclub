import { Reveal } from "./Reveal";
import { GlowCard } from "./GlowCard";
import { Code2, Cpu, Shield, Sparkles, Terminal, Zap } from "lucide-react";

/**
 * SRMU-style video/image showcase cards — row of category highlight cards
 * that appear right below the hero. Each shows a domain with icon + title.
 * Replaces the SRMU "AI Learning / Annual Fest / Clubs / Sports" cards.
 */

const showcaseItems = [
  {
    title: "Hackathons & Fests",
    subtitle: "Viveka 6.0, SIH Prep",
    icon: <Sparkles className="size-6" />,
    image: "/images/events/2026/fusionx-2026/cover.jpg",
    color: "from-primary/80 to-orange-800/80",
  },
  {
    title: "Web & App Dev",
    subtitle: "React, Flutter, APIs",
    icon: <Code2 className="size-6" />,
    image: "/images/events/2025/design-systems-workshop/cover.jpg",
    color: "from-cyan-600/80 to-blue-900/80",
  },
  {
    title: "AI / ML Research",
    subtitle: "PyTorch, LLMs, Data",
    icon: <Cpu className="size-6" />,
    image: "/images/events/2026/intro-to-llm-apps/cover.jpg",
    color: "from-accent/80 to-amber-900/80",
  },
  {
    title: "Cybersecurity & CTF",
    subtitle: "Capture The Flag Events",
    icon: <Shield className="size-6" />,
    image: "/images/events/2026/capture-the-flag-spring/cover.jpg",
    color: "from-emerald-600/80 to-green-900/80",
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Docker, CI/CD, AWS",
    icon: <Terminal className="size-6" />,
    image: "/images/events/2025/cloud-native-seminar/cover.jpg",
    color: "from-purple-600/80 to-indigo-900/80",
  },
  {
    title: "Design & Creative",
    subtitle: "UI/UX, Branding, Figma",
    icon: <Zap className="size-6" />,
    image: "/images/events/2024/git-good-bootcamp/cover.jpg",
    color: "from-pink-600/80 to-rose-900/80",
  },
];

export function DomainShowcase() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
      {showcaseItems.map((item, i) => (
        <Reveal key={item.title} delay={i * 60}>
          <GlowCard className="group relative h-44 sm:h-52 overflow-hidden rounded-2xl cursor-pointer">
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Color Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 transition-opacity duration-300 group-hover:opacity-85`}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-4">
              <div className="mb-2 text-white/90 transition-transform duration-300 group-hover:-translate-y-1">
                {item.icon}
              </div>
              <h3 className="font-display text-sm font-bold text-white leading-tight sm:text-base">
                {item.title}
              </h3>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-white/70">
                {item.subtitle}
              </p>
            </div>

            {/* Hover shine effect */}
            <div className="absolute inset-0 z-20 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          </GlowCard>
        </Reveal>
      ))}
    </div>
  );
}
