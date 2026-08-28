import { markColors } from "@/lib/content";

export function Mark({ size = 30 }: { size?: number }) {
  const cell = Math.round((size - 6) / 3);

  return (
    <div
      aria-hidden
      className="grid grid-cols-3 gap-[3px]"
      style={{ width: size, height: size }}
    >
      {markColors.map((color, i) => (
        <span
          key={`${color}-${i}`}
          className="rounded-[1px]"
          style={{ width: cell, height: cell, backgroundColor: color }}
        />
      ))}
    </div>
  );
}
