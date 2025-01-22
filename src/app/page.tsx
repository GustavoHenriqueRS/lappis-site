"use client";
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
      <Square className="p-3 sm:p-4 flex flex-col items-center gap-8">
        <div className="flex justify-center w-full h-[400px] sm:h-[500px] md:h-[700px] relative">
          <video
            className="rounded-[12px] w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            muted
          >
            <source
              src="https://videos.pexels.com/video-files/3251841/3251841-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <button className="absolute bottom-4 sm:bottom-8 bg-primaria04 text-white text-base sm:text-lg md:text-2xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-xl hover:bg-secundaria700Magenta font-notoSans">
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
