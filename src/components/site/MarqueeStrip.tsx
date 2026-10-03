import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  items: string[];
  speed?: number;
  className?: string;
  reverse?: boolean;
}

/**
 * Infinite scrolling marquee strip — SRMU-style ticker.
 * Pure CSS animation, no JS runtime, duplicates children for seamless loop.
 */
export function MarqueeStrip({
  items,
  speed = 35,
  className,
  reverse = false,
}: MarqueeStripProps) {
  const content = items.map((item, i) => (
    <span
      key={i}
      className="mx-6 inline-flex items-center gap-2.5 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-wider text-foreground/80 sm:mx-8 sm:text-base"
    >
      <span className="size-1.5 rounded-full bg-primary-glow" />
      {item}
    </span>
  ));

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border/60 bg-surface/40 py-4 backdrop-blur-md",
        className,
      )}
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {content}
        {content}
      </div>
    </div>
  );
}
