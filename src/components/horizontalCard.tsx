import Image from "next/image";
import { ImageProps } from "next/image";

interface HorizontalCardProps {
  color: string | undefined;
  text: string;
  description: string;
  img: ImageProps["src"];
}

export default function HorizontalCard({
  color,
  text,
  description,
  img,
}: HorizontalCardProps) {
  return (
    <div className={`${color} w-4/5 h-64 rounded-xl p-6 gap-6 text-white`}>
      <Image src={img} alt="imagem do card" width={200} height={200} />
      <div className="text-white">
        <h2>{text}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
