"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../app/public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNotionData } from "@/app/context/NotionDataContext";
import Confetti from "react-confetti-boom";
import { useState } from "react";

export default function Header() {
  const { header } = useNotionData();
  const [showConfetti, setShowConfetti] = useState(false);

  if (!header || header.length === 0) {
    return <div>No data available for Header</div>;
  }

  return (
    <div className="flex w-full h-24 px-16 py-12 border-b-1 bg-[#F6F6F6] items-center fixed z-20 justify-between top-0 gap-10">
      <button
        className="absolute top-0 left-0 z-50 p-4"
        onClick={() => setShowConfetti(!showConfetti)}
      />
      {showConfetti && (
        <Confetti
          mode="fall"
          particleCount={200}
          colors={["#ff577f", "#ff884b"]}
          shapeSize={20}
          fadeOutHeight={10000}
        />
      )}

      <Image
        src={Logo}
        alt="Logo"
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
      />
      <div className="items-center gap-4 md:gap-6 xl:gap-8 text-black hidden md:flex">
        {header.map((menuButton: any, index: number) => (
          <Link
            key={index}
            href={
              menuButton.href.startsWith("/")
                ? menuButton.href
                : `/${menuButton.href}`
            }
            className="text-md md:text-xl xl:text-2xl font-bold hover:text-primaria04"
          >
            {menuButton.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:hidden items-center gap-4 text-black absolute top-0 right-0 p-4">
        <button className="text-2xl h-10 w-10 text-primaria04">
          <FontAwesomeIcon icon={faBars} className="text-2xl" size="2x" />
        </button>
      </div>
    </div>
  );
}
