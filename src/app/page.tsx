import path from "path";
import fs from "fs/promises";
import SessionComponent from "@/components/sessionComponent";
import Square from "@/components/square";
import logoGrande from "../app/public/logoGrande.png";
import logoAntiga from "../app/public/logoAntiga.png";
import Image from "next/image";
import ListSessionComponent from "@/components/listSessionComponent";

async function getSessionData() {
  const sessionFiles = ["parcerias.json", "formacao.json", "metodologia.json"];
  const sessionData = await Promise.all(
    sessionFiles.map(async (file) => {
      const filePath = path.join(process.cwd(), "src/app/public/data", file);
      const fileContent = await fs.readFile(filePath, "utf8");
      return JSON.parse(fileContent);
    })
  );
  return sessionData;
}

export default async function Home() {
  const sessionData = await getSessionData();

  return (
    <div className="flex items-center justify-center flex-col mt-8 gap-16">
      <Square className="p-16 flex flex-col items-center gap-8">
        <div className="flex justify-center w-full">
        <video
        className="w-full h-[400px] rounded-[12px]"
        controls
        > 
           <source src="/videoteste.mp4" type="video/mp4" />
          </video>
    </div>
  <div className="text-black flex flex-col gap-10 items-center">
    <h1 className="text-4xl">
      Centro de competências em Software livre
    </h1>
    <p className="text-2xl text-center">
      Acreditamos no poder do conhecimento compartilhado para transformar
      vidas. Conecte-se, colabore e seja parte da mudança!
    </p>
    <button className="bg-primaria04 text-white text-2xl px-16 py-5 rounded-xl hover:bg-secundaria700Magenta">
      Conhecer projetos
    </button>
    </div>
    </Square>
    
      {sessionData.map((session, index) => (
        <SessionComponent key={index} session={session}/>
      ))}
      {sessionData.map((listSession, index) => (
        <ListSessionComponent key={index} listSession={listSession} />
      ))}
    </div>
  );
}
