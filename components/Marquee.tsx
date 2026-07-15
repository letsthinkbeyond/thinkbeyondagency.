export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden border-y border-ink/10 py-6 dark:border-ink-dark/10">
      <div className="animate-marquee flex shrink-0 gap-10 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-display text-2xl tracking-tight text-secondary md:text-4xl"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      <div className="animate-marquee flex shrink-0 gap-10 group-hover:[animation-play-state:paused]" aria-hidden="true">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-display text-2xl tracking-tight text-secondary md:text-4xl"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
