import Image from "next/image";
import { ImageProps } from "next/image";

interface CardProps {
  title: string;
  description: string;
  color: string;
  img: ImageProps["src"];
}

export default function Card({ title, description, color, img }: CardProps) {
  return (
    <div
      className={`p-6 ${color} text-white rounded-xl  flex flex-col items-center w-1/5  text-center mt-9 h-card shadow-xl`}
    >
      <Image src={img} alt="imagem do card" width={290} height={290} />
      <h1 className="text-2xl font-orbitron mt-6">{title}</h1>
      <p className="font-notoSans mt-6 ">{description}</p>
    </div>
  );
}