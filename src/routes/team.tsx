import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { MemberTier } from "@/data/members";
import { membersByTier, tierMeta } from "@/data/members";
import { MemberCard } from "@/components/site/MemberCard";
import { HeroBackground as HeroBackgroundNamed } from "@/components/site/HeroBackground";
import { Section } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      {
        title: "Core Team | Tech Fusion Club (TFC) SRMU",
      },
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

  component: Team,
});

const tiers: {
  tier: MemberTier;
  size: "lg" | "md" | "sm";
  cols: string;
}[] = [
  {
    tier: "faculty",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
  {
    tier: "gsec",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
  {
    tier: "jsec",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
  {
    tier: "head",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
  {
    tier: "core",
    size: "sm",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
];

function Team() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         HERO LOAD ANIMATION
      ========================================= */

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".hero-eyebrow", {
          x: -50,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-line",
          {
            x: -90,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.35",
        )
        .from(
          ".hero-description",
          {
            x: -50,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          ".hero-middle-image",
          {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        );

      /* =========================================
         HERO SCROLL ANIMATION
      ========================================= */

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTimeline.to(".hero-content", {
        scaleX: 1.08,
        duration: 0.3,
        transformOrigin: "left center",
        ease: "power2.out",
      });

      scrollTimeline.to(
        ".hero-middle-image",
        {
          scale: 1.05,
          duration: 0.5,
          ease: "power2.out",
        },
        0,
      );

      scrollTimeline.to(".hero-content", {
        scale: 0.6,
        y: -90,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut",
      });

      scrollTimeline.to(
        ".hero-middle-image",
        {
          scale: 0.92,
          y: -45,
          opacity: 0,
          duration: 0.7,
          ease: "power3.inOut",
        },
        "<",
      );

      scrollTimeline.to(
        ".hero-background",
        {
          scale: 1.06,
          opacity: 0.45,
          duration: 1,
          ease: "none",
        },
        0,
      );

      /* =========================================
         TEAM SECTION REVEAL
      ========================================= */

      gsap.from(".team-sections", {
        y: 70,
        opacity: 0,
        scale: 0.985,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-sections",
          start: "top 88%",
          end: "top 55%",
          scrub: 1,
        },
      });

      /* =========================================
         EACH TEAM SECTION
      ========================================= */

      gsap.utils.toArray<HTMLElement>(".team-tier-section").forEach(
        (section) => {
          gsap.from(section, {
            y: 45,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        },
      );

      /* =========================================
         CARD REVEAL
      ========================================= */

      gsap.utils.toArray<HTMLElement>(".member-grid").forEach((grid) => {
        const cards = grid.querySelectorAll(".member-card-item");

        gsap.from(cards, {
          y: 35,
          opacity: 0,
          scale: 0.98,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="
          hero-section
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
          pb-8
        "
      >
        {/* HERO BACKGROUND */}

        <div
          className="
            hero-background
            pointer-events-none
            absolute
            inset-0
            -z-10
            opacity-35
          "
          aria-hidden="true"
        >
          {/* Subtle grid */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]
              bg-[size:72px_72px]
            "
          />

          {/* Soft red glow */}
          <div
            className="
              absolute
              left-[-12%]
              top-[20%]
              h-[420px]
              w-[420px]
              rounded-full
              bg-red-100/30
              blur-3xl
            "
          />

          {/* Very subtle neutral glow */}
          <div
            className="
              absolute
              right-[-10%]
              top-[12%]
              h-[480px]
              w-[480px]
              rounded-full
              bg-slate-100/60
              blur-3xl
            "
          />
        </div>

        <Section className="relative z-10 w-full">
          <div
            className="
              relative
              flex
              min-h-[720px]
              items-center
            "
          >
            {/* =================================================
                HERO TEXT
            ================================================= */}

            <div
              className="
                hero-content
                relative
                z-20
                max-w-4xl
                pt-8
                lg:w-[62%]
                lg:pt-0
              "
            >
              <p className="hero-eyebrow eyebrow">
                The Leadership & Team
              </p>

              <h1
                className="
                  mt-4
                  max-w-5xl
                  text-balance
                  font-display
                  text-5xl
                  font-bold
                  leading-[1.02]
                  sm:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                "
              >
                <span className="hero-line block text-foreground">
                  The hierarchy powering
                </span>

                <span className="hero-line block text-primary">
                  Tech Fusion Club.
                </span>
              </h1>

              <p
                className="
                  hero-description
                  mt-8
                  max-w-3xl
                  text-pretty
                  text-xl
                  leading-relaxed
                  text-muted-foreground
                  sm:text-2xl
                "
              >
                Tap or click any card to flip it and reveal that member's
                official access badge — domain, branch, year, and ID code.
              </p>
            </div>

            {/* =================================================
                ROTATING HERO IMAGE
            ================================================= */}

            <div
              className="
                hero-middle-image
                pointer-events-none
                absolute
                right-[-10px]
                top-1/2
                hidden
                h-[500px]
                w-[500px]
                -translate-y-1/2
                lg:block
                xl:right-[-150px]
                xl:h-[560px]
                xl:w-[560px]
              "
              aria-hidden="true"
            >
              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-full
                  opacity-[0.24]
                  [clip-path:circle(34%_at_50%_50%)]
                "
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[760px]
                    w-[760px]
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >
                  <HeroBackgroundNamed />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* =====================================================
          TEAM SECTIONS
      ===================================================== */}

      <div className="team-sections">
        {tiers.map(({ tier, size, cols }) => {
          const people = membersByTier(tier);

          if (people.length === 0) return null;

          return (
            <Section
              key={tier}
              className="team-tier-section py-12 sm:py-16"
            >
              {/* Section heading */}
              <div className="relative mb-9 overflow-hidden rounded-2xl border border-red-100/80 bg-white/70 px-5 py-5 shadow-sm backdrop-blur-sm sm:px-7">
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    bg-primary
                  "
                />

                <div className="pl-2">
                  <p
                    className="
                      font-display
                      text-2xl
                      font-bold
                      tracking-tight
                      text-foreground
                      sm:text-3xl
                    "
                  >
                    {tierMeta[tier].label}
                  </p>

                  <p
                    className="
                      mt-2
                      max-w-2xl
                      text-sm
                      leading-relaxed
                      text-muted-foreground
                    "
                  >
                    {tierMeta[tier].description}
                  </p>
                </div>
              </div>

              {(() => {
                const isEsports = (m: typeof people[0]) =>
                  m.club === "Esports" ||
                  m.domain.toLowerCase().includes("e-sports") ||
                  m.domain.toLowerCase().includes("esport");

                const departmentOrder = [
                  "Treasurer",
                  "Documentation",
                  "Technical",
                  "Management",
                  "Creative",
                  "Media",
                ];

                const getDeptIndex = (m: typeof people[0]) => {
                  const d = m.designation;

                  const idx = departmentOrder.findIndex((dept) =>
                    d.includes(dept),
                  );

                  return idx === -1 ? 999 : idx;
                };

                const tfcMembers = people
                  .filter((m) => !isEsports(m))
                  .sort(
                    (a, b) =>
                      getDeptIndex(a) - getDeptIndex(b),
                  );

                const esportsMembers = people
                  .filter((m) => isEsports(m))
                  .sort(
                    (a, b) =>
                      getDeptIndex(a) - getDeptIndex(b),
                  );

                return (
                  <div className="grid gap-14">
                    {/* =================================================
                        TFC
                    ================================================= */}

                    {tfcMembers.length > 0 && (
                      <div className="space-y-7">
                        <div className="flex items-center gap-4">
                          <div className="h-px flex-1 bg-red-100" />

                          <h3
                            className="
                              whitespace-nowrap
                              font-display
                              text-base
                              font-semibold
                              tracking-wide
                              text-primary
                              sm:text-lg
                            "
                          >
                            Tech Fusion Club
                          </h3>

                          <div className="h-px flex-1 bg-red-100" />
                        </div>

                        <ul
                          className={`member-grid grid gap-6 ${cols}`}
                        >
                          {tfcMembers.map((m, i) => (
                            <li
                              key={m.id}
                              className="member-card-item min-w-0"
                            >
                              <MemberCard
                                member={m}
                                size={size}
                                index={i}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* =================================================
                        ESPORTS
                    ================================================= */}

                    {esportsMembers.length > 0 && (
                      <div className="space-y-7">
                        <div className="flex items-center gap-4">
                          <div className="h-px flex-1 bg-red-100" />

                          <h3
                            className="
                              whitespace-nowrap
                              font-display
                              text-base
                              font-semibold
                              tracking-wide
                              text-primary
                              sm:text-lg
                            "
                          >
                            TFC Esports Club
                          </h3>

                          <div className="h-px flex-1 bg-red-100" />
                        </div>

                        <ul
                          className={`member-grid grid gap-6 ${cols}`}
                        >
                          {esportsMembers.map((m, i) => (
                            <li
                              key={m.id}
                              className="member-card-item min-w-0"
                            >
                              <MemberCard
                                member={m}
                                size={size}
                                index={i}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })()}
            </Section>
          );
        })}
      </div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <CTABanner
        eyebrow="Join the roster"
        title="Your badge could be on this page next semester."
        body="Applications open twice a year. Pick a domain, meet your mentor, and start shipping."
      />
    </>
  );
}