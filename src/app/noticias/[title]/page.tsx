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
  if (!noticiaData) return <div> Noticia não encontrada</div>;

  return (
    <div className="flex items-center justify-center flex-col gap-16">
      <Square className=" text-black px-28 gap-12">
        <SquareTitle title={"Notícias"} color={"primaria04"} />

        <div className="mt-32">
          <h1 className="text-4xl mb-6">{noticiaData.title}</h1>
          <p className="text-2xl text-pretinho">{noticiaData.description}</p>
          <Image
            src={noticiaData.url_image}
            alt="galera"
            width={100}
            height={100}
          />
        </div>
      </Square>
    </div>
  );
}
