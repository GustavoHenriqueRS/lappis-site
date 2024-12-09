import Image from "next/image";
import Link from "next/link";
import Logo from "../app/public/logo.svg";

export default function Header() {
  return (
    <div className="w-full flex h-24 px-32 py-12 border-b-1 bg-[#F6F6F6] items-center absolute z-10 justify-between">
      <Image src={Logo} alt="logo" width={150} height={150} />
      <div className="flex items-center gap-12 text-black">
        <Link href="/" className="text-2xl font-bold">
          Início
        </Link>
        <Link href="/" className="text-2xl font-bold">
          Formação
        </Link>
        <Link href="/" className="text-2xl font-bold">
          Parceiras
        </Link>
        <Link href="/" className="text-2xl font-bold">
          Pesquisa
        </Link>
        <Link href="/" className="text-2xl font-bold">
          Notícias
        </Link>
        <Link href="/" className="text-2xl font-bold">
          Sobre
        </Link>
      </div>
    </div>
  );
}
