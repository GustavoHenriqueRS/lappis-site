import Image from "next/image";
import { ImageProps } from "next/image";

interface PersonCardProps {
  pessoa: {
    nome: string;
    foto: ImageProps["src"];
  };
}

export default function PersonCard({ pessoa }: PersonCardProps) {
  return (
    <div className="flexrounded-xl p-6 gap-6 text-white bg-primaria05 flex-col">
      <Image src={pessoa.foto} alt="imagem do card" width={400} height={217} />
      <div className="text-white font-orbitron flex flex-col gap-6 text-center">
        <h2 className="text-3xl">{pessoa.nome}</h2>
        <p className="text-2xl font-light">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}
