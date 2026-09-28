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
        "group relative cursor-pointer overflow-hidden rounded-[1.75rem]",
        "bg-[#A83232] p-2 sm:p-2.5",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1.5",
        "hover:shadow-[0_18px_45px_rgba(168,50,50,0.16)]",
        heights[size],
      )}
    >
      {/* Subtle outer-frame highlight */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-10
          rounded-full
          bg-white/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-30
        "
      />

      {/* White Inner Card */}
      <div
        className={cn(
          "relative z-10 flex h-full flex-col overflow-hidden",
          "rounded-[1.35rem]",
          "bg-white",
          "text-slate-900",
          "shadow-[0_6px_24px_rgba(15,23,42,0.06)]",
          heights[size],
        )}
      >
        {/* Profile Image */}
        <div
          className="
            relative
            h-[15rem]
            overflow-hidden
            bg-slate-100
            sm:h-[17rem]
          "
        >
          <img
            src={member.photo}
            alt={`${member.name}, ${member.designation}`}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            className="
              size-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.035]
            "
          />

          {/* Very subtle image gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-20
              bg-gradient-to-t
              from-black/20
              to-transparent
            "
          />

          {/* Profile Arrow */}
          <div
            className="
              absolute
              right-4
              top-4
              grid
              size-10
              place-items-center
              rounded-full
              border
              border-white/80
              bg-white/90
              text-[#A83232]
              shadow-md
              backdrop-blur-sm
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:bg-[#A83232]
              group-hover:text-white
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
        <div className="relative z-10 flex-1 p-5 sm:p-6">
          {/* Designation */}
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#A83232]
              sm:text-[11px]
            "
          >
            {member.designation}
          </p>

          {/* Name */}
          <h3
            className="
              mt-2
              font-display
              text-xl
              font-bold
              leading-tight
              text-slate-900
              sm:text-2xl
            "
          >
            {member.name}
          </h3>

          {/* Domain */}
          <p
            className="
              mt-2
              text-sm
              font-medium
              leading-relaxed
              text-slate-500
            "
          >
            {member.domain}
          </p>

          {/* Closed State */}
          {!expanded && (
            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-[#A83232]
              "
            >
              <span>View profile</span>

              <ArrowUpRight
                className="
                  size-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </div>
          )}

          {/* Expanded Profile */}
          <div
            className={cn(
              "grid transition-all duration-500 ease-out",
              expanded
                ? "mt-5 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div className="border-t border-[#A83232]/10 pt-5">
                {/* Bio */}
                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-slate-600
                  "
                >
                  {member.bio}
                </p>

                {/* Branch */}
                {member.branch && (
                  <div className="mt-4">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-[#A83232]/15
                        bg-[#A83232]/5
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#8F2929]
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
                        target={
                          href === "#" ? undefined : "_blank"
                        }
                        rel="noreferrer noopener"
                        aria-label={`${member.name} on ${
                          socialLabels[
                            key as keyof typeof socialLabels
                          ]
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();

                          if (href === "#") {
                            e.preventDefault();
                          }
                        }}
                        className={cn(
                          `
                            grid
                            size-9
                            place-items-center
                            rounded-full
                            border
                            transition-all
                            duration-300
                          `,
                          href !== "#"
                            ? `
                              border-[#A83232]/15
                              bg-[#A83232]/5
                              text-[#A83232]
                              hover:scale-105
                              hover:border-[#A83232]
                              hover:bg-[#A83232]
                              hover:text-white
                              hover:shadow-sm
                            `
                            : `
                              cursor-not-allowed
                              border-slate-100
                              bg-slate-50
                              text-slate-300
                            `,
                        )}
                      >
                        <Icon className="size-4" />
                      </a>
                    );
                  })}

                  <span
                    className="
                      ml-auto
                      text-[11px]
                      font-medium
                      text-slate-400
                    "
                  >
                    Click to collapse
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-[#A83232]
            transition-all
            duration-500
            group-hover:w-full
          "
        />
      </div>
    </article>
  );
}