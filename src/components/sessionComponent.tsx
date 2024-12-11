import Square from "./square";
import SquareTitle from "./squareTitle";
import fototeste from "../app/public/foto-teste.png";
import Card from "./card";
import { promises as fs } from "fs";

interface SessionComponentProps {
  title: string;
  description: string;
  color: string;
  cardColors: string;
}

export default async function SessionComponent({
  title,
  description,
  color,
  cardColors,
}: SessionComponentProps) {
  const file = await fs.readFile("./src/app/public/data/header.json", "utf8");
  const data = JSON.parse(file);

  const partnerships = Object.values(data.parcerias);

  return (
    <Square>
      <SquareTitle title={title} color={color} />
      <div className="mt-32">
        <p className="text-2xl text-black font-notoSans">{description}</p>
      </div>
      <div className="flex w-full items-center justify-center gap-16  pb-9">
        {partnerships.map((partner, index) => (
          <Card
            key={index}
            title={partner.title}
            description={partner.description}
            color={cardColors}
            hoverColor={color}
            img={fototeste}
          />
        ))}
      </div>
    </Square>
  );
}
