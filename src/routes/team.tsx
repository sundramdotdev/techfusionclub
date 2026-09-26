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
      /* =========================
         HERO LOAD ANIMATION
         ========================= */

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".hero-eyebrow", {
          x: -60,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-line",
          {
            x: -120,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
          },
          "-=0.35",
        )
        .from(
          ".hero-description",
          {
            x: -70,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.55",
        )
        .from(
          ".hero-middle-image",
          {
            opacity: 0,
            scale: 0.85,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.7",
        );

      /* =========================
         SCROLL ANIMATION
         ========================= */

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

      /* Text stretches */
      scrollTimeline.to(".hero-content", {
        scaleX: 1.12,
        duration: 0.3,
        transformOrigin: "left center",
        ease: "power2.out",
      });

      /* Middle image slightly moves */
      scrollTimeline.to(
        ".hero-middle-image",
        {
          scale: 1.08,
          duration: 0.5,
          ease: "power2.out",
        },
        0,
      );

      /* Text zooms out */
      scrollTimeline.to(".hero-content", {
        scale: 0.58,
        y: -100,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut",
      });

      /* Image fades away */
      scrollTimeline.to(
        ".hero-middle-image",
        {
          scale: 0.9,
          y: -50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.inOut",
        },
        "<",
      );

      /* Background */
      scrollTimeline.to(
        ".hero-background",
        {
          scale: 1.08,
          opacity: 0.5,
          duration: 1,
          ease: "none",
        },
        0,
      );

      /* Team section */
      gsap.from(".team-sections", {
        y: 100,
        opacity: 0,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-sections",
          start: "top 85%",
          end: "top 45%",
          scrub: 1,
        },
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
          min-h-screen
          overflow-hidden
          flex
          items-center
          pb-8
        "
      >
        {/* =========================
            BACKGROUND
            ========================= */}

        <div
          className="
            hero-background
            pointer-events-none
            absolute
            inset-0
            -z-10
            opacity-40
          "
          aria-hidden="true"
        >
          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
              bg-[size:72px_72px]
            "
          />

          {/* Red glow */}
          <div
            className="
              absolute
              left-[-10%]
              top-[20%]
              h-[420px]
              w-[420px]
              rounded-full
              bg-red-100/40
              blur-3xl
            "
          />

          {/* Blue glow */}
          <div
            className="
              absolute
              right-[-8%]
              top-[15%]
              h-[500px]
              w-[500px]
              rounded-full
              bg-blue-100/50
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
              
              
            "
          >
            {/* =================================================
                LEFT SIDE TEXT
                ================================================= */}

            <div
              className="
                hero-content
                relative
                z-20
                max-w-4xl
                pt-20
                lg:w-[62%]
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
                ONLY MIDDLE IMAGE
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
              {/* 
                This wrapper crops everything except
                the center portion of HeroBackground.
              */}
              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-full
                  opacity-[0.28]
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
              className="py-10 sm:py-12"
            >
              <div className="flex flex-col gap-2 border-b border-border/70 pb-5">
                <p className="font-display text-2xl font-bold text-foreground">
                  {tierMeta[tier].label}
                </p>

                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {tierMeta[tier].description}
                </p>
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
                  <div className="mt-8 grid gap-12">
                    {/* TFC */}
                    {tfcMembers.length > 0 && (
                      <div className="space-y-5">
                        <h3 className="font-display text-lg font-semibold tracking-wide text-primary">
                          Tech Fusion Club
                        </h3>

                        <ul
                          className={`grid gap-5 ${cols}`}
                        >
                          {tfcMembers.map((m, i) => (
                            <li key={m.id}>
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

                    {/* ESPORTS */}
                    {esportsMembers.length > 0 && (
                      <div className="space-y-5">
                        <h3 className="font-display text-lg font-semibold tracking-wide text-primary">
                          TFC Esports Club
                        </h3>

                        <ul
                          className={`grid gap-5 ${cols}`}
                        >
                          {esportsMembers.map((m, i) => (
                            <li key={m.id}>
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