"use client";

import React, { useState, useEffect } from "react";
import Square from "./square";
import SquareTitle from "./squareTitle";
import { createMotionComponent } from "@/utils/createMotionComponent";
import Image, { StaticImageData } from "next/image";
import galera from "../app/public/galera.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AnimatedSquare = createMotionComponent(Square, "AnimatedSquare");

const AnimatedSquareTitle = createMotionComponent(
  SquareTitle,
  "AnimatedSquareTitle"
);

const images: StaticImageData[] = [galera, galera, galera]; // Array com as imagens

export default function OurTeam() {
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setModalImageIndex(index);
    document.body.style.overflow = "hidden"; // Travar rolagem da página
  };

  const closeModal = () => {
    setModalImageIndex(null);
    document.body.style.overflow = "auto"; // Liberar rolagem da página
  };

  const nextImage = () => {
    if (modalImageIndex !== null) {
      setModalImageIndex((modalImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (modalImageIndex !== null) {
      setModalImageIndex(
        (modalImageIndex - 1 + images.length) % images.length
      );
    }
  };

  // Remover o bloqueio de rolagem ao desmontar o componente
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
        title={"Nosso time"}
        color={"primaria02"}
      />
      <div className="flex flex-col px-6 sm:px-52 items-center w-full">
        <div className="text-pretinho font-notoSans mt-28 sm:mt-32 text-center text-base sm:text-lg md:text-2xl">
          Somos estudantes, pesquisadores e professores da Universidade de Brasília (UnB), comprometidos
          com o avanço do software livre, a inovação colaborativa e a promoção
          da diversidade e inclusão.
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
          {/* Imagem de cima */}
          <Image
            src={galera}
            alt="galera"
            className="w-full h-auto object-cover mx-auto rounded-lg border-2 sm:border-4 border-primaria02 cursor-pointer"
            onClick={() => openModal(0)}
          />

          {/* Contêiner das imagens lado a lado */}
          <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="w-1/2">
              <Image
                src={galera}
                alt="galera"
                className="w-full h-auto object-cover rounded-lg border-2 sm:border-4 border-primaria02 cursor-pointer"
                onClick={() => openModal(1)}
              />
            </div>
            <div className="w-1/2">
              <Image
                src={galera}
                alt="galera"
                className="w-full h-auto object-cover rounded-lg border-2 sm:border-4 border-primaria02 cursor-pointer"
                onClick={() => openModal(2)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-7xl max-h-[90vh] flex flex-col items-center px-6 sm:px-24"
            onClick={(e) => e.stopPropagation()} // Impedir fechamento ao clicar no conteúdo
          >
            <Image
              src={images[modalImageIndex]}
              alt={`Imagem ampliada ${modalImageIndex + 1}`}
              className="w-full h-auto max-h-[85vh] rounded-lg"
            />
            {/* Botão de fechar acima da imagem */}

            <button
  className="absolute -top-10 right-4 sm:-top-14 sm:right-6 bg-red-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-md flex items-center justify-center"
  onClick={closeModal}
>
  <FontAwesomeIcon icon={faTimes} className="text-sm sm:text-lg" />
</button>

            {/* Botões de navegação */}
            <div className="absolute inset-y-0 left-6 flex items-center">
              <button
                className="text-white bg-gray-700 rounded-full px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base"
                onClick={prevImage}
              >
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-6 flex items-center">
              <button
                className="text-white bg-gray-700 rounded-full px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base"
                onClick={nextImage}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </AnimatedSquare>
  );
}
