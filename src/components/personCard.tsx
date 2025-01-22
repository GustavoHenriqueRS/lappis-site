import Image from "next/image";
import Link from "next/link";

interface PersonCardProps {
  title: string;
  description: string;
  link_imagem: string;
  link_pessoa: string;
}

export default function PersonCard({
  title,
  description,
  link_imagem,
  link_pessoa,
}: PersonCardProps) {
  return (
    <div className="flex rounded-xl p-6 gap-6 text-white bg-primaria05 flex-col">
      <Image src={link_imagem} alt="imagem do card" width={400} height={217} />
      <Link
        href={link_pessoa}
        className="text-white font-orbitron flex flex-col gap-6 text-center"
      >
        <h2 className="text-3xl">{title}</h2>
        <p className="text-2xl font-light">{description}</p>
      </Link>
    </div>
  );
}
