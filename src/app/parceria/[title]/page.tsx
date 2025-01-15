import Square from "@/components/square";
import path from "path";
import fs from "fs/promises";
import SquareTitle from "@/components/squareTitle";
import Image from "next/image";
import galera from "../../public/foto-teste.png";

interface IParceria {
  title: string;
  description: string;
  url_image: string;
  external_link: string;
  publicacoes?: Publicacao[];
  competencias: string[];
  status?: "ativo" | "finalizado";
}

interface Publicacao {
  title: string;
  description: string;
  url: string;
}

async function getSessionData() {
  const filePath = path.join(
    process.cwd(),
    "src/app/public/data",
    "parcerias.json"
  );
  const fileContent = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContent);
}

export default async function Parceria({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const title = (await params).title;

  const sessionData = await getSessionData();

  const parceria: IParceria = sessionData.cards[title];

  return (
    <div className="flex items-center justify-center flex-col gap-16">
      <Square className="bg-opacity-95 text-black px-28">
        <SquareTitle title={"Parceria"} color={"primaria03"} />
        <div className="flex flex-col mt-28 w-full gap-8 items-center">
          {parceria.status && (
            <p className="font-orbitron text-2xl text-white py-2 px-4 rounded-xl bg-secundaria700Azul self-end font-bold">
              {parceria.status}
            </p>
          )}
          <div className="flex flex-row gap-6 w-full justify-between">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl">{parceria.title}</h2>
              <p className="max-w-[499px]">{parceria.description}</p>
            </div>

            <div className="flex w-[499px] h-[398px] rounded-xl overflow-hidden relative">
              <Image src={galera} alt="Imagem da parceria" fill />
            </div>
          </div>
          <a
            href={parceria.external_link}
            className="text-2xl text-white px-12 py-3 bg-primaria06 rounded-xl"
          >
            Acessar projeto
          </a>
          <div className="flex flex-col w-full gap-6">
            <h1 className="text-3xl self-start">
              Competências desenvolvidas no Projeto
            </h1>
            <div className="flex flex-row gap-6">
              {parceria.competencias.map((competencia: string) => (
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
              {parceria.publicacoes &&
                parceria.publicacoes.map((publicacao: Publicacao) => {
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

              {!parceria.publicacoes && (
                <p>
                  Ainda não existem publicações relacionadas a este projeto.
                </p>
              )}
            </div>
          </div>
        </div>
      </Square>
    </div>
  );
}
