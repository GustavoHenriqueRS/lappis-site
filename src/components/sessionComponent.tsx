import Square from "./square";
import SquareTitle from "./squareTitle";
import fototeste from "../app/public/foto-teste.png";
import Card from "./card";
import { promises as fs } from "fs";

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
  sessionFile: string;
}

export default async function SessionComponent({
  sessionFile,
}: SessionComponentProps) {
  const file = await fs.readFile(
    "./src/app/public/data/" + sessionFile,
    "utf8"
  );
  const data = JSON.parse(file);

  const session: Session = data;
  console.log(session);
  const cards: Card[] = Object.values(session.cards);
  console.log(cards);

  return (
    <Square>
      <SquareTitle title={session.title} color={session.cardColors} />
      <div className="mt-32">
        <p className="text-2xl text-black font-notoSans">
          {session.description}
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-16  pb-9">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            color={session.cardColors}
            hoverColor={session.hoverColor}
            img={fototeste}
          />
        ))}
      </div>
    </Square>
  );
}
