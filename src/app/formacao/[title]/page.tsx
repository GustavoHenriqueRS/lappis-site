import Square from "@/components/square";
import path from "path";
import fs from "fs/promises";
import SquareTitle from "@/components/squareTitle";
import Image from "next/image";
import galera from "../../public/foto-teste.png";

interface IFormacao {
  title: string;
  description: string;
  url_image: string;
  publicacoes?: Publicacao[];
  competencias: string[];
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
    "formacao.json"
  );
  const fileContent = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContent);
}

export default async function Formacao({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const title = (await params).title;

  const sessionData = await getSessionData();

  const formacao: IFormacao = sessionData.cards[title];

  return (
    <div className="flex items-center justify-center flex-col mt-24 gap-16">
      <Square className="bg-opacity-95 text-black px-28 gap-8">
        <SquareTitle title={"Formação"} color={"primaria03"} />
        <div className="mt-28 flex flex-row gap-6 w-full justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl">{formacao.title}</h2>
            <p className="max-w-[499px]">{formacao.description}</p>
          </div>

          <div className="flex w-[499px] h-[398px] rounded-xl overflow-hidden relative">
            <Image src={galera} alt="Imagem da formação" fill />
          </div>
        </div>
        <div className="flex flex-col w-full gap-6">
          <h1 className="text-3xl self-start">
            Competências desenvolvidas no Projeto
          </h1>
          <div className="flex flex-row gap-6">
            {formacao.competencias.map((competencia: string) => (
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
