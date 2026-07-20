import Image from "next/image";
import type { StaticImageData } from "next/image";

function LogoTrack({ logos }: { logos: StaticImageData[] }) {
  return (
    <>
      {logos.map((logo, i) => (
        <div
          key={i}
          className="flex h-16 w-36 shrink-0 items-center justify-center px-4 md:h-20 md:w-44"
        >
          <Image
            src={logo}
            alt="Brand partner logo"
            // className="max-h-full max-w-full object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            className="max-h-28 max-w-full object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            sizes="(max-width: 768px) 144px, 176px"
          />
        </div>
      ))}
    </>
  );
}

export default function BrandMarquee({ logos }: { logos: StaticImageData[] }) {
  const loop = [...logos, ...logos];

  return (
    <div className="group relative flex overflow-hidden border-y border-ink/10 py-8 dark:border-ink-dark/10">
      <div className="animate-marquee flex shrink-0 items-center gap-12 group-hover:[animation-play-state:paused] md:gap-16">
        <LogoTrack logos={loop} />
      </div>
      <div
        className="animate-marquee flex shrink-0 items-center gap-12 group-hover:[animation-play-state:paused] md:gap-16"
        aria-hidden="true"
      >
        <LogoTrack logos={loop} />
      </div>
    </div>
  );
}
