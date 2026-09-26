import { useState } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Link2,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";
import type { Member } from "@/data/members";
import { cn } from "@/lib/utils";
import { useCursorGlow } from "@/lib/motion";

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  portfolio: Link2,
} as const;

const socialLabels = {
  linkedin: "LinkedIn",
  github: "GitHub",
  instagram: "Instagram",
  portfolio: "Portfolio",
} as const;

export function MemberCard({
  member,
  size = "md",
  index = 0,
}: {
  member: Member;
  size?: "lg" | "md" | "sm";
  index?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const heights = {
    lg: "min-h-[30rem]",
    md: "min-h-[26rem]",
    sm: "min-h-[22rem]",
  } as const;

  const glowRef = useCursorGlow<HTMLDivElement>();

  return (
    <article
      ref={glowRef}
      onClick={() => setExpanded((value) => !value)}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-3xl",
        "border border-border/70 bg-surface/90",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:scale-[1.02]",
        "hover:border-primary/40 hover:shadow-2xl",
        heights[size]
      )}
    >
      {/* Subtle hover glow */}
      <div
        className="
          pointer-events-none absolute -inset-20
          bg-primary/10 blur-3xl
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Profile Image */}
      <div className="relative h-[15rem] overflow-hidden sm:h-[17rem]">
        <img
          src={member.photo}
          alt={`${member.name}, ${member.designation}`}
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          className="
            size-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />

        {/* Image gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

        {/* Profile arrow */}
        <div
          className="
            absolute right-4 top-4
            grid size-10 place-items-center
            rounded-full border border-white/20
            bg-black/25 text-white backdrop-blur-md
            transition-all duration-300
            group-hover:scale-110
            group-hover:bg-primary
          "
        >
          {expanded ? (
            <ChevronUp className="size-5" />
          ) : (
            <ArrowUpRight className="size-5" />
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-5 sm:p-6">
        <p className="eyebrow">{member.designation}</p>

        <h3
          className="
            mt-2 font-display text-xl font-bold
            leading-tight sm:text-2xl
          "
        >
          {member.name}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {member.domain}
        </p>

        {/* Closed state */}
        {!expanded && (
          <div
            className="
              mt-5 flex items-center gap-2
              text-xs font-medium text-primary
            "
          >
            <span>View profile</span>

            <ArrowUpRight
              className="
                size-3.5
                transition-transform duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </div>
        )}

        {/* Expanded profile */}
        <div
          className={cn(
            "grid transition-all duration-500 ease-out",
            expanded
              ? "mt-5 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border/70 pt-5">
              
              {/* Bio */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>

              {/* Branch */}
              {member.branch && (
                <div className="mt-4">
                  <span
                    className="
                      inline-flex rounded-full
                      border border-border
                      bg-background/60
                      px-3 py-1.5
                      text-[10px] font-medium
                      uppercase tracking-wider
                      text-muted-foreground
                    "
                  >
                    {member.branch}
                  </span>
                </div>
              )}

              {/* Social Links */}
              <div className="mt-5 flex items-center gap-2">
                {Object.keys(socialIcons).map((key) => {
                  const Icon =
                    socialIcons[key as keyof typeof socialIcons];

                  const href =
                    member.socials?.[
                      key as keyof typeof member.socials
                    ] || "#";

                  return (
                    <a
                      key={key}
                      href={href}
                      target={href === "#" ? undefined : "_blank"}
                      rel="noreferrer noopener"
                      aria-label={`${member.name} on ${
                        socialLabels[key as keyof typeof socialLabels]
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();

                        if (href === "#") {
                          e.preventDefault();
                        }
                      }}
                      className={cn(
                        `
                          grid size-9 place-items-center
                          rounded-full border
                          transition-all duration-300
                        `,
                        href !== "#"
                          ? `
                            border-border
                            bg-background/70
                            text-muted-foreground
                            hover:scale-110
                            hover:border-primary
                            hover:bg-primary
                            hover:text-primary-foreground
                          `
                          : `
                            cursor-not-allowed
                            border-transparent
                            bg-background/40
                            text-muted-foreground/30
                          `
                      )}
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}

                <span className="ml-auto text-xs text-muted-foreground">
                  Click to collapse
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="
          absolute bottom-0 left-0
          h-[2px] w-0
          bg-primary
          transition-all duration-500
          group-hover:w-full
        "
      />
    </article>
  );
}