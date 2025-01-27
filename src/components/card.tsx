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
    <Link href={href || "#"}>
      <div
        className={`p-6 bg-${color} hover:bg-${hoverColor} text-white rounded-xl flex flex-col items-center text-center shadow-xl hover:scale-105 transition-transform duration-300 w-[312px] h-[450px] sm:w-[280px] sm:h-[400px]`}
      >
        <Image
          src={img}
          alt="imagem do card"
          width={250}
          height={250}
          className="rounded-xl"
        />
        <h1 className="text-xl sm:text-lg font-orbitron mt-6">{title}</h1>
        <p className="font-notoSans mt-4 text-sm sm:text-xs line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}
