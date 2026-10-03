import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { club, testimonial, faculty } from "@/data/club";

/**
 * Testimonials section — student quote + faculty coordinator message.
 * Glassmorphism cards with accent quote marks.
 */
export function TestimonialsSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Student Testimonial */}
      <Reveal>
        <div className="glass-strong relative h-full overflow-hidden rounded-2xl p-8 sm:p-10">
          <Quote className="absolute right-6 top-6 size-12 text-primary/15" />
          <div className="relative">
            <p className="eyebrow mb-5">Student Voice</p>
            <blockquote className="text-pretty text-base italic leading-relaxed text-foreground/90 sm:text-lg">
              "{testimonial.quote}"
            </blockquote>
            <p className="mt-6 font-display text-sm font-semibold text-primary-glow">
              — {testimonial.author}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Faculty Coordinator */}
      <Reveal delay={100}>
        <div className="glass-strong relative h-full overflow-hidden rounded-2xl p-8 sm:p-10">
          <Quote className="absolute right-6 top-6 size-12 text-accent/15" />
          <div className="relative">
            <p className="eyebrow mb-5">Faculty Coordinator</p>
            <blockquote className="text-pretty text-base italic leading-relaxed text-foreground/90 sm:text-lg">
              "{faculty.message}"
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="size-12 rounded-full border-2 border-primary/40 object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-display text-sm font-semibold text-primary-glow">
                  {faculty.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {faculty.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
