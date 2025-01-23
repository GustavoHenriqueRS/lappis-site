"use client";

import { useNotionData } from "@/app/context/NotionDataContext";
import PersonCard from "@/components/personCard";
import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface IPessoas {
  title: string[];
  description: string[];
  link_imagem: string[];
  link_pessoa: string[];
}

interface IPesquisaCard {
  title: string;
  description: string;
  url_image: string;
  pessoas: IPessoas;
}
export default function Pesquisa() {
  const pathname = usePathname();
  const { pesquisa, loading } = useNotionData();
  const [name, setName] = useState<string>("");
  const [pesquisaCard, setPesquisaCard] = useState<IPesquisaCard | null>(null);

  useEffect(() => {
    const pesquisaName = decodeURIComponent(pathname.split("/").pop() || "");
    setName(pesquisaName);
  }, [pathname]);

  useEffect(() => {
    if (pesquisa && pesquisa.cards) {
      const foundPesquisa = pesquisa.cards.find(
        (card) => card.title === name
      ) as IPesquisaCard | undefined;
      setPesquisaCard(foundPesquisa || null);
    }
  }, [pesquisa, name]);

  if (!pesquisaCard) return <div>Pesquisa não encontrada</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center flex-col gap-16">
      <Square className="text-black px-28 gap-8 pb-8">
        <SquareTitle title={"Pesquisas"} color={"primaria05"} />
        <div className="flex flex-col gap-6 mt-32">
          <h1 className="text-3xl">{pesquisaCard.title}</h1>
          <p className="text-2xl">{pesquisaCard.description}</p>

          <h1 className="text-3xl">Pessoas</h1>
          <div className="flex justify-between gap-12">
            {pesquisaCard.pessoas.title.map((title, index) => (
              <PersonCard
                key={index}
                title={title}
                description={pesquisaCard.pessoas.description[index]}
                link_imagem={pesquisaCard.pessoas.link_imagem[index]}
                link_pessoa={pesquisaCard.pessoas.link_pessoa[index]}
              />
            ))}
          </div>
        </div>
      </Square>
    </div>
  );
}
