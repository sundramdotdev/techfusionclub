import { cn } from "@/lib/utils";
export function Logo({ className }: { className?: string }) {
  const defaultSrc = "/images/branding/techfusionlogolight.webp";
  const smSrc = "/images/branding/techfusionlogolight-sm.webp";

  return (
    <img
      src={defaultSrc}
      srcSet={`${smSrc} 256w, ${defaultSrc} 512w`}
      sizes="(max-width: 640px) 256px, 512px"
      alt="Tech Fusion Club Logo"
      width={160}
      height={160}
      className={cn("h-10 w-auto object-contain transition-all duration-300", className)}
    />
  );
}
