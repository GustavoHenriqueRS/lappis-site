import PersonCard from "@/components/personCard";
import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import galera from "../../../app/public/galera.png";

export default function Pesquisa() {
  const pessoas = [
    { nome: "Gustavo", foto: galera },
    { nome: "Pedro", foto: galera },
    { nome: "Gustavo", foto: galera },
  ];

  return (
    <div className="flex items-center justify-center flex-col gap-16">
      <Square className="text-black px-28 gap-8 pb-8">
        <SquareTitle title={"Pesquisas"} color={"primaria05"} />
        <div className="flex flex-col gap-6 mt-32">
          <h1 className="text-3xl">Lorem Ipsum dolor sit amet </h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dapibus est ultrices ante vestibulum, a facilisis tortor aliquet.
            Cras bibendum turpis lorem, vel aliquet magna aliquam vel. Nam
            ultricies dui id placerat feugiat. Vestibulum interdum dui vel
            consectetur tincidunt. Nam eget odio orci. Donec sed lacus in ipsum
            egestas feugiat nec eu tortor. Donec at ligula eget ex dignissim
            porttitor in a diam. Pellentesque ut laoreet nisi.
          </p>

          <h1 className="text-3xl">Lorem Ipsum dolor sit amet </h1>
          <div className="flex justify-between">
            {pessoas.map((pessoa, index) => (
              <PersonCard key={index} pessoa={pessoa} />
            ))}
          </div>
        </div>
      </Square>
    </div>
  );
}
