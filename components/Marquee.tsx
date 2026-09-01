type MarqueeProps = {
  items?: string[];
  className?: string;
};

const DEFAULT_ITEMS = ["Marcar uma consulta", "Presentear-se com uma pausa"];

export function Marquee({ items = DEFAULT_ITEMS, className = "" }: MarqueeProps) {
  const sequence = Array.from({ length: 8 }, () => items).flat();

  return (
    <div
      className={`overflow-hidden border-y border-sand ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee py-4 will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {sequence.map((item, index) => (
              <span
                key={`${copy}-${item}-${index}`}
                className="flex items-center whitespace-nowrap px-1 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-ink"
              >
                {item}
                <span className="mx-6 text-sand" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
