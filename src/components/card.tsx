import Image from "next/image";
import { ImageProps } from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  color: string;
  hoverColor: string;
  img: ImageProps["src"];
  href?: string;
}

export default function Card({
  title,
  description,
  color,
  hoverColor,
  img,
  href,
}: CardProps) {
  return (
    <Link href={href ? href : "#"}>
      <div
        className={`p-6 bg-${color} hover:bg-${hoverColor} text-white rounded-xl  flex flex-col items-center  text-center mt-9 h-card shadow-xl w-[312px] mb-8`}
      >
        <Image
          src={img}
          alt="imagem do card"
          width={290}
          height={290}
          className="rounded-xl"
        />
        <h1 className="text-2xl font-orbitron mt-6">{title}</h1>
        <p className="font-notoSans mt-6 ">{description}</p>
      </div>
    </Link>
  );
}
