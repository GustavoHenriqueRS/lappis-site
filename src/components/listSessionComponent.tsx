import HorizontalCard from "./horizontalCard";
import Square from "./square";
import fototeste from "../app/public/foto-teste.png";

interface HorizontalCard {
  title: string;
  description: string;
  url_image: string;
  competencias: string[];
}

interface ListSession {
  cards: HorizontalCard[];
  title: string;
  description: string;
  hoverColor: string;
  cardColors: string;
}

interface ListSessionComponentProps {
  listSession: ListSession;
}

export default function ListSessionComponent({
  listSession,
}: ListSessionComponentProps) {
  const horizontalCards: HorizontalCard[] = listSession.cards
    ? Object.values(listSession.cards)
    : [];

  const horizontalCardsToShow = 3;

  return (
    <Square className="py-8 flex flex-col gap-8">
      {horizontalCards.map((horizontalCard, index) => {
        if (index < horizontalCardsToShow) {
          return (
            <HorizontalCard
              key={index}
              color={listSession.cardColors}
              title={horizontalCard.title}
              description={horizontalCard.description}
              img={fototeste}
              className="w-4/5"
            />
          );
        }
      })}
    </Square>
  );
}
