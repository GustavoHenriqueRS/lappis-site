import Image from "next/image";
import { ImageProps } from "next/image";

interface HorizontalCardProps {
  color: string | undefined;
  hoverColor?: string;
  title: string;
  description: string;
  img: ImageProps["src"];
}

export default function HorizontalCard({
  color,
  hoverColor,
  title,
  description,
  img,
}: HorizontalCardProps) {
  const cardColor = color ? color : "secundaria05";
  const cardHoverColor = hoverColor ? hoverColor : "primaria05";

  return (
    <div
      className={`bg-${cardColor} flex w-4/5 h-64 rounded-xl p-6 gap-6 text-white hover:bg-${cardHoverColor}`}
    >
      <Image src={img} alt="imagem do card" width={297} height={217} />
      <div className="text-white font-orbitron flex flex-col gap-6">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-2xl font-light">{description}</p>
      </div>
    </div>
  );
}
