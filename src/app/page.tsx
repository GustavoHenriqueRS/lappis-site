import path from "path";
import fs from "fs/promises";
import SessionComponent from "@/components/sessionComponent";
import Square from "@/components/square";
import ListSessionComponent from "@/components/listSessionComponent";
import OurTeam from "@/components/OurTeam";

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
    <div className="flex items-center justify-center flex-col gap-16">
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
        <button className="absolute bottom-4 sm:bottom-8 bg-primaria04 text-white text-base sm:text-lg md:text-2xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-xl hover:bg-secundaria700Magenta">
          Conhecer projetos
        </button>
      </div>

      </Square>

      {sessionData.map((session, index) => (
        <SessionComponent key={index} session={session} />
      ))}
      {sessionData.map((listSession, index) => (
        <ListSessionComponent key={index} listSession={listSession} />
      ))}

      <OurTeam />
    </div>
  );
}
