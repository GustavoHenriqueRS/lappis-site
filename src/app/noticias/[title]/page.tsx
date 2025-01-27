"use client";
import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import Image from "next/image";
import { useNotionData } from "@/app/context/NotionDataContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface INoticia {
  title: string;
  description: string;
  url_image: string;
  competencias?: string[];
}

export default function Page() {
  const { noticia, loading } = useNotionData();
  const pathName = usePathname();
  const [name, setName] = useState<string>("");
  const [noticiaData, setNoticia] = useState<INoticia | null>(null);

  useEffect(() => {
    const noticiaName = decodeURIComponent(pathName.split("/").pop() || "");
    setName(noticiaName);
  }, [pathName]);

  useEffect(() => {
    if (noticia && noticia.cards) {
      const foundNoticia = noticia.cards.find(
        (card: INoticia) => card.title === name
      );
      setNoticia(foundNoticia || null);
    }
  }, [noticia, name]);

  if (loading) return <div>Loading...</div>;
  if (!noticiaData) return <div> Notícia não encontrada</div>;

  return (
    <div className="flex items-center justify-center flex-col gap-8 md:gap-16 px-4 sm:px-8">
      <Square className="text-black px-6 sm:px-10 md:px-28 gap-8 md:gap-12">
        <SquareTitle title={"Notícias"} color={"primaria01"} />

        <div className="mt-24 md:mt-32 flex flex-col gap-6 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-notoSans flex self-start">
            {noticiaData.title}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-pretinho leading-relaxed font-notoSans self-start">
            {noticiaData.description}
          </p>
          <Image
            src={noticiaData.url_image}
            alt="galera"
            objectFit="contain"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-lg mt-6 mb-6 sm:mb-8 self-center"
          />
        </div>
      </Square>
    </div>
  );
}
