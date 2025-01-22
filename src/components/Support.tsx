"use client";

import React from "react";
import Square from "./square";
import SquareTitle from "./squareTitle";
import { createMotionComponent } from "@/utils/createMotionComponent";
import Image from "next/image";
import Logo from "../app/public/logo.png";

const AnimatedSquare = createMotionComponent(Square, "AnimatedSquare");

const AnimatedSquareTitle = createMotionComponent(
  SquareTitle,
  "AnimatedSquareTitle"
);

export default function Support() {
  return (
    <AnimatedSquare
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedSquareTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        title={"Apoio"}
        color={"primaria04"}
      />
      <div className="flex flex-col px-6 sm:px-52 items-center w-full">
        <div className="text-pretinho font-notoSans mt-28 sm:mt-32 text-center text-base sm:text-lg md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus
          est ultrices ante vestibulum, a facilisis tortor aliquet. Cras
          bibendum turpis lorem, vel aliquet magna aliquam vel.
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 mt-8">
          {/* Linha de 3 imagens */}
          <div className="flex gap-4 justify-center">
            <Image
              src={Logo}
              alt="Logo UNB 1"
              className="w-24 h-24 object-contain rounded-lg"
            />
            <Image
              src={Logo}
              alt="Logo UNB 2"
              className="w-24 h-24 object-contain rounded-lg"
            />
            <Image
              src={Logo}
              alt="Logo UNB 3"
              className="w-24 h-24 object-contain rounded-lg"
            />
          </div>
          {/* Linha de 2 imagens */}
          <div className="flex gap-4 justify-center">
            <Image
              src={Logo}
              alt="Logo UNB 4"
              className="w-24 h-24 object-contain rounded-lg"
            />
            <Image
              src={Logo}
              alt="Logo UNB 5"
              className="w-24 h-24 object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </AnimatedSquare>
  );
}
