"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../app/public/logo.svg";
import headerData from "../app/public/data/header.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Header {
  [key: string]: {
    title: string;
    href: string;
  };
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const header = headerData.content;

  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full h-24 px-16 py-12 border-b-1 bg-[#F6F6F6] items-center fixed z-20 justify-between top-0 gap-10">
      <Image src={Logo} alt="logo" width={150} height={150} />
      <div className="items-center gap-4 md:gap-6 xl:gap-8 text-black hidden md:flex">
        {Object.keys(header).map((menuButton, index) => (
          <Link
            key={index}
            href={header[menuButton].href}
            className="text-md md:text-xl xl:text-2xl font-bold hover:text-primaria04"
          >
            {header[menuButton].title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:hidden items-center gap-4 text-black absolute top-0 right-0 p-4">
        <button
          className="text-2xl h-10 w-10 text-primaria04"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" size="2x" />
        </button>
        {isOpen && (
          <div className="flex flex-col gap-4 md:hidden bg-white p-4 rounded-md">
            {Object.keys(header).map((menuButton, index) => (
              <Link
                key={index}
                href={header[menuButton].href}
                className="text-md md:text-xl xl:text-2xl font-bold hover:text-primaria04"
              >
                {header[menuButton].title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
