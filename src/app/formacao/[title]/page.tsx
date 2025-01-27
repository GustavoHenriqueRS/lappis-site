"use client";

import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useNotionData } from "@/app/context/NotionDataContext";

interface IFormacao {
  title: string;
  description: string;
  url_image: string;
  publicacoes?: Publicacao[];
  competencias?: string[];
}

interface Publicacao {
  title: string;
  description: string;
  url: string;
}

export default function Formacao() {
  const pathname = usePathname();
  const { formacoes, loading } = useNotionData();
  const [name, setName] = useState<string>("");
  const [formacao, setFormacao] = useState<IFormacao | null>(null);

  useEffect(() => {
    const formacaoName = decodeURIComponent(pathname.split("/").pop() || "");
    setName(formacaoName);
  }, [pathname]);

  useEffect(() => {
    if (formacoes && formacoes.cards) {
      const foundFormacao = formacoes.cards.find(
        (card: IFormacao) => card.title === name
      );
      setFormacao(foundFormacao || null);
    }
  }, [formacoes, name]);

  if (loading) return <div>Loading...</div>;
  if (!formacao) return <div>Formação não encontrada</div>;

  return (
    <div className="flex items-center justify-center flex-col gap-16">
      <Square className=" text-black px-28 gap-8">
        <SquareTitle title={"Formação"} color={"primaria03"} />
        <div className="mt-28 flex flex-row gap-6 w-full justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl">{formacao.title}</h2>
            <p className="max-w-[499px]">{formacao.description}</p>
          </div>

          <div className="flex w-[499px] h-[398px] rounded-xl overflow-hidden relative">
            <Image
              src={formacao.url_image}
              alt="Imagem da formação"
              className="object-contain"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-6">
          <h1 className="text-3xl self-start">
            Competências desenvolvidas no Projeto
          </h1>
          <div className="flex flex-row gap-6">
            {formacao.competencias &&
              formacao.competencias.map((competencia: string) => (
                <div
                  className="py-2 px-4 bg-primaria04 text-white font-orbitron text-xl rounded-xl"
                  key={competencia}
                >
                  {competencia}
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col w-full gap-6 mb-12">
          <h1 className="text-3xl self-start">
            Publicações relacionadas ao Projeto
          </h1>
          <div>
            {formacao.publicacoes &&
              formacao.publicacoes.map((publicacao: Publicacao) => {
                if (!publicacao) {
                  return null;
                }

                return (
                  <div key={publicacao.title}>
                    <h3>{publicacao.title}</h3>
                    <p>{publicacao.description}</p>
                    <a href={publicacao.url}>{publicacao.url}</a>
                  </div>
                );
              })}

            {!formacao.publicacoes && (
              <p>Ainda não existem publicações relacionadas a este projeto.</p>
            )}
          </div>
        </div>
      </Square>
    </div>
  );
}
