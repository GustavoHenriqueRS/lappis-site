import Image from "next/image";
import Link from "next/link";
import Logo from "../app/public/logo.svg";
import { promises as fs } from "fs";

interface Header {
  [key: string]: {
    title: string;
    href: string;
  };
}

export default async function Header() {
  const file = await fs.readFile("./src/app/public/data/header.json", "utf8");
  const data = JSON.parse(file);

  const header: Header = data.content;

  return (
    <div className="w-full flex h-24 px-16 py-12 border-b-1 bg-[#F6F6F6] items-center fixed z-10 justify-between top-0">
      <Image src={Logo} alt="logo" width={150} height={150} />
      <div className="flex items-center gap-12 text-black">
        {Object.keys(header).map((menuButton, index) => (
          <Link
            key={index}
            href={header[menuButton].href}
            className="text-md xl:text-2xl font-bold"
          >
            {header[menuButton].title}
          </Link>
        ))}
      </div>
    </div>
  );
}
