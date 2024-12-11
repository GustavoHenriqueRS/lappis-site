"use client"
import { promises as fs } from "fs";
import path from "path";
import SessionComponent from "@/components/sessionComponent";
import Square from "@/components/square";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {

  const [partnerships, setPartnerships] = useState([]);

  useEffect(() => {
    async function fetchPartnerships() {
      const response = await fetch("/api/partnerships");
      const data = await response.json();
      setPartnerships(data);
    }
    fetchPartnerships();
  }, []);

  const sessions = [
    {
      title: "Parcerias",
      description: "Conectamos tecnologia aberta às necessidades da sociedade, promovendo inovação, impacto social e mudanças reais.",
      hoverColor: "bg-secundaria500Laranja",
      cardColors: "bg-primaria06",
    },
    {
      title: "Formação",
      description: "Conectamos tecnologia aberta às necessidades da sociedade, promovendo inovação, impacto social e mudanças reais.",
      hoverColor: "bg-secundaria500Lilas",
      cardColors: "bg-primaria05",
    },
    {
      title: "Metodologia",
      description: "Conectamos tecnologia aberta às necessidades da sociedade, promovendo inovação, impacto social e mudanças reais.",
      hoverColor: "bg-secundaria500Magenta",
      cardColors: "bg-primaria04",
    },
  ];

  return (
    <div className="-z-10 flex items-center justify-center flex-col mt-24 gap-16">
      <Square>
        <div className="p-16 flex flex-col items-center gap-8">
          <div className="flex flex-row gap-56">
            <Image
              src="/logoGrande.png" 
              alt="logo grande"
              width={364}
              height={325}
            />
            <Image
              src="/logoAntiga.png" 
              alt="logo antiga"
              width={287}
              height={150}
            />
          </div>

          <div className="text-black flex flex-col gap-10 items-center">
            <h1 className="text-4xl">
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
      {sessions.map((session, index) => (
        <SessionComponent
          key={index}
          title={session.title}
          description={session.description}
          hoverColor={session.hoverColor}
          cardColors={session.cardColors}
          partnerships={partnerships}
        />
      ))}
    </div>
  );
}
