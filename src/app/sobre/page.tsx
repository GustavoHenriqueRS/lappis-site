import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import galera from "../public/galera.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-16">
      <Square className=" text-black px-28 gap-12">
        <SquareTitle title={"Sobre"} color={"primaria04"} />
        <div className="mt-32 flex flex-col gap-6">
          <h1 className="text-4xl">Sobre nós</h1>
          <p className="text-2xl text-pretinho">
            O Lab Livre é um laboratório multidisciplinar da Universidade de
            Brasília (FCTE) focado em inovação tecnológica , pesquisa científica
            e desenvolvimento de software livre com impacto social. Criamos
            soluções que transformam comunidades e promovem um futuro mais
            inclusivo e sustentável. Nosso trabalho é impulsionado pela
            inovação, desenvolvendo tecnologias que resolvem desafios reais e
            promovem avanços sociais e ambientais. Valorizamos o software livre
            por sua capacidade de democratizar o acesso à tecnologia, promovendo
            transparência e acessibilidade. Nossa pesquisa aplicada conecta a
            ciência às necessidades da sociedade, gerando impacto prático,
            enquanto ganha pela inclusão social , capacitando comunidades
            sub-representadas e ampliando oportunidades tecnológicas. Com uma
            equipe de pesquisadores, estudantes e profissionais dedicados, o Lab
            Livre é um espaço de aprendizagem contínua e colaboração, onde
            acreditamos que a tecnologia deve ser uma ferramenta de
            transformação e empoderamento.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl">Metodologia</h1>
          <p className="text-2xl text-pretinho">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dapibus est ultrices ante vestibulum, a facilisis tortor aliquet.
            Cras bibendum turpis lorem, vel aliquet magna aliquam vel. Nam
            ultricies dui id placerat feugiat. Vestibulum interdum dui vel
            consectetur tincidunt. Nam eget odio orci. Donec sed lacus in ipsum
            egestas feugiat nec eu tortor. Donec at ligula eget ex dignissim
            porttitor in a diam. Pellentesque ut laoreet nisi.
          </p>
        </div>
        <div className="flex flex-col gap-6">
  <h1 className="text-4xl sm:text-left">
    Missão, Visão e Valores
  </h1>
  <div className="flex flex-col sm:flex-row justify-between gap-6">
    {/* Card Missão */}
    <div className="flex flex-col flex-1 gap-3 sm:pr-6 sm:border-none border-b-2 border-secundaria700Magenta">
      <div className="px-6 py-20 bg-secundaria700Magenta rounded-xl text-white font-orbitron text-3xl text-center mb-8">
        MISSÃO
      </div>
      <p className="text-secundaria900Magenta text-center sm:text-left mb-2 w-full">
        Promover a cultura do software livre e a inclusão digital por meio de
        inovação e pesquisa, capacitando jovens, mulheres e grupos
        sub-representados, para liderar mudanças sociais e tecnológicas na
        América do Sul, com foco na colaboração e impacto transformador.
      </p>
    </div>
    {/* Card Visão */}
    <div className="flex flex-col flex-1 gap-3 sm:px-6 sm:border-x-2 border-secundaria700Magenta border-b-2 sm:border-b-0">
      <div className="px-6 py-20 bg-secundaria700Magenta rounded-xl text-white font-orbitron text-3xl text-center mb-8">
        VISÃO
      </div>
      <p className="text-secundaria900Magenta text-center sm:text-left mb-2 w-full">
        Ser referência em software livre na América Latina, liderando em
        pesquisa, inovação e capacitação de profissionais colaborativos e
        éticos, alinhados aos princípios de liberdade, inclusão e impacto
        tecnológico.
      </p>
    </div>
    {/* Card Valores */}
    <div className="flex flex-col flex-1 gap-3 sm:pl-6 sm:border-none">
      <div className="px-6 py-20 bg-secundaria700Magenta rounded-xl text-white font-orbitron text-3xl text-center mb-8">
        VALORES
      </div>
      <p className="text-secundaria900Magenta text-center sm:text-left mb-2 w-full">
        Liberdade, inclusão, colaboração, inovação, aprendizado e diversidade.
      </p>
    </div>
  </div>
</div>
        <div>
          <h1 className="text-4xl mb-6">História</h1>
          <p className="text-2xl text-pretinho">
            O Lab Livre nasceu em 2012 como parte de um projeto acadêmico e de
            pesquisa da Universidade de Brasília (UnB), vinculado à Faculdade
            UnB Gama (FCTE). Desde o início, nossa essência sempre foi sobre
            conectar pessoas e ideias para transformar realidades. Criado para
            ser um centro de competência e inovação tecnológica, o Lab Livre é
            um espaço onde universidades, governo, empresas e ONGs se encontram
            para colaborar. Nosso propósito é claro: promover o desenvolvimento
            de software livre e soluções de código aberto, enquanto incentivamos
            a participação de grupos sub-representados, como mulheres e jovens
            da América do Sul. Acreditamos que a tecnologia só faz sentido
            quando é acessível e inclusiva, resolvendo desafios sociais.
          </p>
          <Image
            src={galera}
            alt="galera"
            style={{
              height: "465px",
              width: "100%",
              objectFit: "cover",
              margin: "0 auto",
              borderRadius: "12px",
              marginTop: "24px",
              marginBottom: "32px",
            }}
          />
        </div>
      </Square>
    </div>
  );
}
