import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border/60">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary-glow"
            >
              <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                  isOpen && "rotate-180 text-primary-glow",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
