"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logoGrande from "../app/public/logoGrande.png";
import logoAntiga from "../app/public/logoAntiga.png";
import SessionComponent from "@/components/sessionComponent";
import Square from "@/components/square";
import ListSessionComponent from "@/components/listSessionComponent";
import OurTeam from "@/components/OurTeam";
import Support from "@/components/Support";
import { useNotionData } from "./context/NotionDataContext";

export default function Home() {
  const { formacoes, pesquisa, parcerias, noticia, loading } = useNotionData();

  if (loading)
    return (
      <div className="flex items-center justify-center flex-col gap-16">
        <h1 className="text-2xl text-center text-black">Carregando...</h1>
      </div>
    );

  return (
    <div className="flex items-center justify-center flex-col gap-16 px-4 sm:px-8">
      <Square className="p-6 sm:p-8 md:p-16 flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-24 font-notoSans">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={logoGrande}
              alt="Logo grande"
              className="w-36 h-auto sm:w-52 md:w-[364px]"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={logoAntiga}
              alt="Logo antiga"
              className="w-28 h-auto sm:w-44 md:w-[287px]"
            />
          </motion.div>
        </div>

        {/* Textos */}
        <div className="text-black flex flex-col gap-6 sm:gap-8 md:gap-10 items-center font-notoSans">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">
            Centro de competências em Software livre
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-center">
            Acreditamos no poder do conhecimento compartilhado para transformar vidas.
            Conecte-se, colabore e seja parte da mudança!
          </p>
          {/* Botão */}
          <button className="font-notoSans bg-primaria04 text-white text-base sm:text-lg md:text-2xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-xl hover:bg-secundaria700Magenta">
            Conhecer projetos
          </button>
        </div>
      </Square>

      <SessionComponent session={formacoes} />
      <SessionComponent session={pesquisa} />
      <SessionComponent session={parcerias} />
      <SessionComponent session={noticia} />

      <ListSessionComponent listSession={formacoes} />
      <ListSessionComponent listSession={pesquisa} />
      <ListSessionComponent listSession={parcerias} />
      <ListSessionComponent listSession={noticia} />

      <OurTeam />
      <Support />
    </div>
  );
}
