"use client";

import React, { useState, useRef, useEffect } from "react";
import Square from "./square";
import SquareTitle from "./squareTitle";
import { ChevronLeft, ChevronRight } from "./chevron";
import Card from "./card";
import { createMotionComponent } from "@/utils/createMotionComponent";

interface Card {
  title: string;
  description: string;
  url_image: string;
  competencias?: string[];
}

interface Session {
  title: string;
  description: string;
  hoverColor: string;
  cardColors: string;
  buttonLink?: string;
  cards: {
    title: string;
    description: string;
    url_image: string;
    competencias?: string[];
  }[];
}

interface SessionComponentProps {
  session: Session;
}

const AnimatedSquare = createMotionComponent(Square, "AnimatedSquare");
const AnimatedSquareTitle = createMotionComponent(
  SquareTitle,
  "AnimatedSquareTitle"
);

export default function SessionComponent({ session }: SessionComponentProps) {
  const cards: Card[] = Object.values(session.cards);
  const containerRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateLayout = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const visibleCards = containerWidth < 640 ? 1 : containerWidth < 1024 ? 3 : 4;
      setCardsToShow(visibleCards);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + 1, cards.length - cardsToShow));

  return (
    <AnimatedSquare
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedSquareTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        title={session.title}
        color={session.cardColors}
      />
      <div className="mt-16 md:mt-24">
        <p className="text-2xl text-black font-notoSans text-center">
          {session.description}
        </p>
      </div>
      <div className="flex items-center justify-center w-full mt-10 gap-8 px-4">
        {/* Left Button */}
        <div className="flex-shrink-0">
          {startIndex > 0 && (
            <button
              className="p-2 sm:p-1 text-2xl sm:text-xl bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={handlePrev}
            >
              <ChevronLeft color={session.cardColors} />
            </button>
          )}
        </div>

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="overflow-hidden w-[90%] flex justify-center"
        >
          <div
            className="flex gap-6 transition-transform duration-300"
            style={{
              transform: `translateX(-${startIndex * (312 + 24)}px)`,
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                color={session.cardColors}
                hoverColor={session.hoverColor}
                href={`${session.buttonLink}/${card.title}`}
                img={card.url_image}
              />
            ))}
          </div>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0">
          {startIndex + cardsToShow < cards.length && (
            <button
              className="p-2 sm:p-1 text-2xl sm:text-xl bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={handleNext}
            >
              <ChevronRight color={session.cardColors} />
            </button>
          )}
        </div>
      </div>
    </AnimatedSquare>
  );
}
