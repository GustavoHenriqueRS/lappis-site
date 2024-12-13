"use client";

import Square from "./square";
import SquareTitle from "./squareTitle";
import fototeste from "../app/public/foto-teste.png";
import chevRonLeft from "../app/public/chevronLeft.svg";
import chevRonRight from "../app/public/chevronRight.svg";
import Image from "next/image";
import Card from "./card";
import { useState } from "react";

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

export default function SessionComponent({ session }: SessionComponentProps) {
  const cards: Card[] = Object.values(session.cards);
  const [startIndex, setStartIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  const cardsToShow = 3;
  const maxIndex = cards.length - cardsToShow;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 0.2, 0));
    setNextIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 0.2, maxIndex));
    setNextIndex((prev) => prev + 1);
  };

  return (
    <Square>
      <SquareTitle title={session.title} color={session.cardColors} />
      <div className="mt-32">
        <p className="text-2xl text-black font-notoSans">
          {session.description}
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-16 pb-9">
        <div className="w-16">
          {cards.length > cardsToShow && nextIndex != 0 && (
            <button onClick={handlePrev} disabled={startIndex === 0}>
              <Image src={chevRonLeft} alt="icon" width={71} height={79} />
            </button>
          )}
        </div>
        <div className="overflow-hidden w-[80%]">
          <div
            className="flex transition-transform duration-300 gap-14"
            style={{
              transform: `translateX(-${startIndex * 100}%)`,
              width: `${(cards.length * 100) / cardsToShow}%`,
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
          {cards.length > cardsToShow && nextIndex + 3 != cards.length && (
            <button onClick={handleNext} disabled={startIndex === maxIndex}>
              <Image src={chevRonRight} alt="icon" width={71} height={79} />
            </button>
          )}
        </div>
      </div>
    </Square>
  );
}
