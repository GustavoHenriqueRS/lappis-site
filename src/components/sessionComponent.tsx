"use client";
import React, { useState, useEffect, useRef } from "react";
import Square from "./square";
import SquareTitle from "./squareTitle";
import fototeste from "../app/public/foto-teste.png";
import { ChevronLeft, ChevronRight } from "./chevron";
import Image from "next/image";
import Card from "./card";
import { createMotionComponent } from "@/utils/createMotionComponent";

interface Card {
  title: string;
  description: string;
  url_image: string;
  competencias: string[];
}

interface Session {
  title: string;
  description: string;
  hoverColor: string;
  cardColors: string;
  cards: Card[];
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
  const [cardsToShow, setCardsToShow] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const singleCardWidth = 312 + 56;
      const visibleCards = Math.floor(containerWidth / singleCardWidth);

      setCardsToShow(Math.max(visibleCards, 1));
      setCardWidth(singleCardWidth);
      setMaxIndex(Math.max(0, cards.length - visibleCards));
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [cards.length]);

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <AnimatedSquare
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <AnimatedSquareTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 1, duration: 0.5 }}
        title={session.title}
        color={session.cardColors}
      />
      <div className="mt-32">
        <p className="text-2xl text-black font-notoSans">
          {session.description}
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-16 pb-9">
        <div className="w-16">
          {startIndex > 0 && (
            <button onClick={handlePrev}>
              <ChevronLeft color={session.cardColors} />
            </button>
          )}
        </div>
        <div ref={containerRef} className="overflow-hidden w-[80%]">
          <div
            className="flex transition-transform duration-300 gap-14"
            style={{
              transform: `translateX(-${startIndex * cardWidth}px)`,
              width: `${cards.length * cardWidth}px`,
            }}
          >
            {cards.map((card, index) => (
              <Card
                title={card.title}
                description={card.description}
                color={session.cardColors}
                hoverColor={session.hoverColor}
                img={fototeste}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="w-16">
          {startIndex + cardsToShow < cards.length && (
            <button onClick={handleNext}>
              <ChevronRight color={session.cardColors} />
            </button>
          )}
        </div>
      </div>
    </AnimatedSquare>
  );
}
