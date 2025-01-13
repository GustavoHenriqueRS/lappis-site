import Image from "next/image";
import { ImageProps } from "next/image";
import clsx from "clsx";

interface HorizontalCardProps {
  color: string | undefined;
  hoverColor?: string;
  title: string;
  description: string;
  img: ImageProps["src"];
  href?: string;
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
    <a
      href={href ? href : "#"}
      className={clsx(
        `flex h-64 rounded-xl p-6 gap-6 text-white transition-colors duration-300`,
        cardColor,
        hoverClass,
        className
      )}
    >
      <div className="relative w-[297px] h-[217px]">
        <Image
          src={img}
          alt="imagem do card"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="text-white font-orbitron flex flex-col gap-6">
        <h2 className="text-xl md:text-3xl truncate">{title}</h2>
        <p className="text-sm md:text-2xl font-light line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  );
}
