import Image from "next/image";
import { ImageProps } from "next/image";
import clsx from "clsx";
import Link from "next/link";

interface HorizontalCardProps {
  color: string | undefined;
  hoverColor?: string;
  title: string;
  description: string;
  img: ImageProps["src"];
  href: string;
  className?: string;
}

export default function HorizontalCard({
  color,
  hoverColor,
  title,
  description,
  img,
  href,
  className,
}: HorizontalCardProps) {
  const cardColor = color ? `bg-${color}` : "bg-secundaria05";
  const hoverClass = hoverColor
    ? `hover:bg-${hoverColor}`
    : "hover:bg-primaria01";

  return (
    <Link
      href={href}
      className={clsx(
        `flex h-40 md:h-64 rounded-lg p-4 md:p-6 gap-4 md:gap-6 text-white w-full hover:scale-105 transition-transform duration-150 ease-in-out shadow-xl`,
        cardColor,
        hoverClass,
        className
      )}
    >
      <div className="relative w-1/2 sm:w-[184px] sm:h-[135px] md:w-[297px] md:h-[217px] flex-shrink-0">
        <Image
          src={img}
          alt="imagem do card"
          fill
          className="rounded-lg object-contain"
        />
      </div>
      <div className="text-white font-orbitron flex flex-col gap-6 overflow-hidden">
        <h2 className="text-xl md:text-3xl line-clamp-2 break-words">
          {title}
        </h2>
        <p className="text-sm md:text-2xl font-light line-clamp-3 break-words">
          {description}
        </p>
      </div>
    </Link>
  );
}
