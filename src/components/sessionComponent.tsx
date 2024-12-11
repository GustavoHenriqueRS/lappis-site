import Square from "./square";
import SquareTitle from "./squareTitle";
import fototeste from "../app/public/foto-teste.png";
import Card from "./card";

interface SessionComponentProps {
  title: string;
  description: string;
  hoverColor: string;
  cardColors: string;
  partnerships: Partner[];
}

interface Partner {
  id: string;
  title: string;
  description: string;
}

export default function SessionComponent({
  title,
  description,
  hoverColor,
  cardColors,
  partnerships,
}: SessionComponentProps) {
  return (
    <Square>
      <SquareTitle title={title} color={cardColors} />
      <div className="mt-32">
        <p className="text-2xl text-black font-notoSans">{description}</p>
      </div>
      <div className="flex w-full items-center justify-center gap-16 pb-9">
        {partnerships?.map((partner) => (
          <Card
            key={partner.id}
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
