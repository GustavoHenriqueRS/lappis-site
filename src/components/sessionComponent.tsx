import Square from "./square";
import SquareTitle from "./squareTitle";
import fototeste from "../app/public/foto-teste.png";
import Card from "./card";
import { promises as fs } from "fs";

interface Partner {
  title: string;
  description: string;
}

interface SessionComponentProps {
  title: string;
  description: string;
  hoverColor: string;
  cardColors: string;
  partners: Partner[];
}

export default async function SessionComponent({
  title,
  description,
  hoverColor,
  cardColors,
}: SessionComponentProps) {
  const file = await fs.readFile("./src/app/public/data/header.json", "utf8");
  const data = JSON.parse(file);

  const partnerships: Partner[] = Object.values(data.parcerias);

  return (
    <Square>
      <SquareTitle title={title} color={cardColors} />
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
            hoverColor={hoverColor}
            img={fototeste}
          />
        ))}
      </div>
    </Square>
  );
}
