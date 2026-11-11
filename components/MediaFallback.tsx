type MediaFallbackProps = {
  label: string;
};

export function MediaFallback({ label }: MediaFallbackProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#efe6d6] text-clay"
    >
      <svg viewBox="0 0 120 120" className="h-24 w-24" aria-hidden="true">
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="28"
          fill="currentColor"
        >
          LV
        </text>
      </svg>
      <p className="mt-4 font-serif text-lg tracking-wide">Lorena Vaz</p>
    </div>
  );
}
