import SessionComponent from "@/components/sessionComponent";
import Square from "@/components/square";
import logoGrande from "../app/public/logoGrande.png";
import logoAntiga from "../app/public/logoAntiga.png";
import Image from "next/image";

export default function Home() {
  const sessionFiles = ["parcerias.json", "formacao.json", "metodologia.json"];

  return (
    <div className="-z-10 flex items-center justify-center flex-col mt-24 gap-16">
      <Square>
        <div className="p-16 flex flex-col items-center gap-8">
          <div className="flex flex-row gap-56">
            <Image
              src={logoGrande}
              alt="logo grande"
              width={364}
              height={325}
            />
            <Image
              src={logoAntiga}
              alt="logo antiga"
              width={287}
              height={150}
            />
          </div>

          <div className="text-black flex flex-col gap-10 items-center">
            <h1 className="text-4xl ">
              Centro de competências em Software livre
            </h1>
            <p className="text-2xl text-center">
              Acreditamos no poder do conhecimento compartilhado para
              transformar vidas. Conecte-se, colabore e seja parte da mudança!
            </p>
            <button className="bg-primaria04 text-white text-2xl px-16 py-5 rounded-xl hover:bg-secundaria700Magenta">
              Conhecer projetos
            </button>
          </div>
        </div>
      </Square>
      {sessionFiles.map((session, index) => (
        <SessionComponent key={index} sessionFile={sessionFiles[index]} />
      ))}
    </div>
  );
}
