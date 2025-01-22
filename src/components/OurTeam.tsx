"use client";

import React from "react";
import Square from "./square";
import SquareTitle from "./squareTitle";
// import fototeste from "../app/public/foto-teste.png";
import galera from "../app/public/galera.png";
import { createMotionComponent } from "@/utils/createMotionComponent";
import Image from "next/image";

const AnimatedSquare = createMotionComponent(Square, "AnimatedSquare");

const AnimatedSquareTitle = createMotionComponent(
  SquareTitle,
  "AnimatedSquareTitle"
);

export default function OurTeam() {
  return (
    <AnimatedSquare
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      // className="px-52"
    >
      <AnimatedSquareTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        title={"Nosso time"}
        color={"primaria02"}
      />
      <div className="flex flex-col px-6 sm:px-52 items-center w-full">
        <div className=" text-black font-notoSans text-xl sm:text-2xl mt-28 md:mt-32">
          Somos estudantes, pesquisadores e professores da UnB, comprometidos
          com o avanço do software livre, a inovação colaborativa e a promoção
          da diversidade e inclusão.
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
          {/* Imagem de cima */}
          <Image
            src={galera}
            alt="galera"
            className="w-full h-auto object-cover mx-auto rounded-lg border-2 sm:border-4 border-primaria02"
          />

          {/* Contêiner das imagens lado a lado */}
          <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="w-1/2">
              <Image
                src={galera}
                alt="galera"
                className="w-full h-auto object-cover rounded-lg border-2 sm:border-4 border-primaria02"
              />
            </div>
            <div className="w-1/2">
              <Image
                src={galera}
                alt="galera"
                className="w-full h-auto object-cover rounded-lg border-2 sm:border-4 border-primaria02"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSquare>
  );
}
