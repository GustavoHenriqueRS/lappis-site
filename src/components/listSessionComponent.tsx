"use client";

import React, { useState, useEffect } from "react";
import HorizontalCard from "./horizontalCard";
import Square from "./square";
import SquareTitle from "./squareTitle";
import { createMotionComponent } from "@/utils/createMotionComponent";

interface HorizontalCard {
  title: string;
  description: string;
  url_image: string;
  competencias?: string[];
}

interface ListSession {
  cards: HorizontalCard[];
  title: string;
  buttonLink?: string;
  description: string;
  hoverColor: string;
  cardColors: string;
}

interface ListSessionComponentProps {
  listSession: ListSession;
}

const AnimatedSquare = createMotionComponent(Square, "AnimatedSquare");

const AnimatedSquareTitle = createMotionComponent(
  SquareTitle,
  "AnimatedSquareTitle"
);

export default function ListSessionComponent({
  listSession,
}: ListSessionComponentProps) {
  const horizontalCards: HorizontalCard[] = listSession.cards
    ? Object.values(listSession.cards)
    : [];

  const [cardLimit, setCardLimit] = useState(3);
  const gridLimit = 6;

  useEffect(() => {
    const updateCardLimit = () => {
      const isGrid = window.innerWidth >= 1536;
      setCardLimit(isGrid ? gridLimit : 3);
    };

    updateCardLimit();
    window.addEventListener("resize", updateCardLimit);
    return () => window.removeEventListener("resize", updateCardLimit);
  }, [gridLimit]);

  const visibleCards = horizontalCards.slice(0, cardLimit);

  return (
    <AnimatedSquare
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <AnimatedSquareTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        title={listSession.title}
        color={listSession.cardColors}
      />
      <div className="mt-32"></div>
      <div className="mt-12 flex flex-col gap-8 items-center 2xl:gap-12 2xl:w-4/5">
        {visibleCards.map((horizontalCard, index) => (
          <HorizontalCard
            key={index}
            color={listSession.cardColors}
            hoverColor={listSession.hoverColor}
            href={`${listSession.buttonLink}/${horizontalCard.title}`}
            title={horizontalCard.title}
            description={horizontalCard.description}
            img={horizontalCard.url_image}
            className="w-4/5 2xl:w-full"
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        {listSession.buttonLink !== "/pesquisas" && (
          <a
            href={listSession.buttonLink}
            className={`px-24 py-3 bg-${listSession.cardColors} text-white rounded-lg text-center hover:bg-${listSession.hoverColor} transition hover:scale-105 ease-out `}
          >
            Veja Mais
          </a>
        )}
      </div>
    </AnimatedSquare>
  );
}
