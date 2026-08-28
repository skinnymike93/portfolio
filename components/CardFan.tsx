"use client";

import { useState } from "react";
import { practiceCards, waveform, type PracticeCard } from "@/lib/content";

const tones: Record<
  PracticeCard["tone"],
  { card: string; title: string; body: string }
> = {
  orange: {
    card: "bg-card-orange",
    title: "text-white",
    body: "text-white/92",
  },
  cream: {
    card: "bg-card-cream",
    title: "text-ink",
    body: "text-ink/80",
  },
  blue: {
    card: "bg-card-blue",
    title: "text-card-black",
    body: "text-card-black/80",
  },
  green: {
    card: "bg-card-green",
    title: "text-card-black",
    body: "text-card-black/80",
  },
  black: {
    card: "bg-card-black",
    title: "text-white",
    body: "text-white/80",
  },
};

const stack = [
  {
    className:
      "left-[72px] top-[48px] rotate-[10deg] md:left-[120px] md:top-[68px] md:rotate-[11deg]",
  },
  {
    className:
      "left-[54px] top-[36px] rotate-[7deg] md:left-[90px] md:top-[50px] md:rotate-[8deg]",
  },
  {
    className:
      "left-[36px] top-[24px] rotate-[4deg] md:left-[60px] md:top-[32px] md:rotate-[5deg]",
  },
  {
    className:
      "left-[16px] top-[10px] rotate-[1.5deg] md:left-[28px] md:top-[14px] md:rotate-[2deg]",
  },
  {
    className: "left-0 top-0 rotate-0",
  },
];

function orderFromFront(front: number, count: number) {
  return Array.from(
    { length: count },
    (_, i) => (front - (i + 1) + count) % count,
  );
}

function Waveform() {
  return (
    <div className="flex h-[88px] shrink-0 items-end gap-[5px] px-4 pt-4 pb-1.5 md:h-[118px] md:gap-[7px] md:px-[22px] md:pt-5 md:pb-2">
      {waveform.map((height, i) => (
        <span
          key={i}
          className="w-[3px] shrink-0 rounded-[2px] bg-white/90"
          style={{ height }}
        />
      ))}
    </div>
  );
}

export function CardFan() {
  const [front, setFront] = useState(0);
  const order = orderFromFront(front, practiceCards.length);

  return (
    <div className="flex w-full justify-center overflow-hidden pt-7 md:overflow-visible md:pt-10">
      <div className="relative h-[280px] w-[340px] md:h-[340px] md:w-[560px]">
        {order.map((cardIndex, stackIndex) => {
          const card = practiceCards[cardIndex];
          const isFront = stackIndex === order.length - 1;
          const tone = tones[card.tone];

          return (
            <button
              key={card.id}
              type="button"
              aria-pressed={isFront}
              aria-label={`Show ${card.title}`}
              onClick={() => setFront(cardIndex)}
              className={`absolute flex h-[200px] w-[268px] origin-top-left flex-col overflow-hidden rounded-card border-0 p-0 text-left transition-transform duration-300 ease-out md:h-[248px] md:w-[400px] ${tone.card} ${stack[stackIndex].className} ${isFront ? "cursor-default" : "cursor-pointer"} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink`}
              style={{ zIndex: stackIndex + 1 }}
            >
              {isFront && card.tone === "orange" ? <Waveform /> : null}
              {isFront && card.tone !== "orange" ? (
                <div className="flex-1" />
              ) : null}
              <div
                className={`flex flex-col gap-1.5 px-4 pb-4 md:gap-2 md:px-[22px] md:pb-[22px] ${isFront && card.tone === "orange" ? "pt-1 md:pt-2" : "mt-auto pt-4"}`}
              >
                <span
                  className={`font-serif text-[18px] leading-[22px] md:text-[22px] md:leading-[26px] ${tone.title}`}
                >
                  {card.title}
                </span>
                {isFront ? (
                  <span
                    className={`font-sans text-[13px] leading-[18px] font-medium ${tone.body}`}
                  >
                    {card.description}
                  </span>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
