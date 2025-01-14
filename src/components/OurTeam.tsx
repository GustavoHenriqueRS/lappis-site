"use client";

import React from "react";
import Square from "./square";
import SquareTitle from "./squareTitle";
import fototeste from "../app/public/foto-teste.png";
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
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <AnimatedSquareTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 1, duration: 0.5 }}
        title={"Nosso time"}
        color={"primaria02"}
      />
      <div className="flex flex-col gap-6 mt-32 items-center">
        <div className="relative w-[1088px] h-[438px]">
          <Image src={fototeste} alt="somosnozes" fill />
        </div>
        <div className="flex flew-row gap-6">
          <div className="relative w-[530px] h-[333px]">
            <Image src={fototeste} alt="somosnozes" fill />
          </div>
          <div className="relative w-[530px] h-[333px]">
            <Image src={fototeste} alt="somosnozes" fill />
          </div>
        </div>
      </div>
    </AnimatedSquare>
  );
}
