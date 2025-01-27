"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../app/public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNotionData } from "@/app/context/NotionDataContext";
import Confetti from "react-confetti-boom";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface MenuButtonProps {
  title: string;
  href: string;
}

export default function Header() {
  const { header } = useNotionData();
  const [showConfetti, setShowConfetti] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado do menu mobile
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const pathname = usePathname();
  const [headerName, setHeaderName] = useState("");

  useEffect(() => {
    const path = pathname === "/" ? "início" : pathname.split("/").pop();
    if (path) {
      setHeaderName(decodeURIComponent(path));
    }
  }, [pathname]);

  useEffect(() => {
    // Simula o carregamento do header
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Tempo do carregamento (1 segundo)

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, []);

  const compareHeaderName = (name: string, target: string) => {
    if (headerName === "" && target.toLowerCase() === "início") return true;

    return (
      name
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") ===
      target
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
  };

  if (loading || !header || header.length === 0) {
    return (
      <div className="flex items-center justify-center h-24 bg-[#F6F6F6] fixed top-0 w-full z-20">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primaria04"></div>
      </div>
    );
  }

  function showConfettiFunc() {
    console.log("show confetti");
    setShowConfetti(!showConfetti);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  }

  return (
    <div className="flex w-full h-24 px-12 sm:px-16 py-12 border-b-1 bg-[#F6F6F6] items-center fixed z-20 justify-between top-0 gap-10">
      <button
        className="absolute top-0 left-0 z-50 p-4"
        onClick={showConfettiFunc}
      />
      {showConfetti && (
        <Confetti
          mode="fall"
          particleCount={200}
          colors={["#ff577f", "#ff884b"]}
          shapeSize={20}
        />
      )}

      <Image
        src={Logo}
        alt="Logo"
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
      />

      {/* Menu Desktop */}
      <div className="items-center gap-4 md:gap-6 xl:gap-8 text-black hidden md:flex">
        {header.map((menuButton: MenuButtonProps, index: number) => (
          <Link
            key={index}
            href={
              menuButton.href.startsWith("/")
                ? menuButton.href
                : `/${menuButton.href}`
            }
            className={`text-md md:text-xl xl:text-2xl font-bold ${
              compareHeaderName(headerName, menuButton.title)
                ? "text-primaria04"
                : "hover:text-primaria04"
            }`}
          >
            {menuButton.title}
          </Link>
        ))}
      </div>

      {/* Botão para abrir o menu mobile */}
      <button
        className="text-2xl md:hidden text-primaria04"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="text-2xl"
          size="2x"
        />
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="absolute top-24 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 w-full md:hidden">
          {header.map((menuButton: MenuButtonProps, index: number) => (
            <Link
              key={index}
              href={
                menuButton.href.startsWith("/")
                  ? menuButton.href
                  : `/${menuButton.href}`
              }
              className="text-lg text-black font-bold hover:text-primaria04"
              onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar em um link
            >
              {menuButton.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
