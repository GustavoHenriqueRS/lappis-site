"use client";

import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNotionData } from "../context/NotionDataContext";

interface INew {
  title: string;
  description: string;
  instagram: string;
  linkedin: string;
  email: string;
}

export default function Contato() {
  const { contato, loading } = useNotionData();

  const news: INew[] = contato;

  console.log(news[1]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center flex-col gap-8 md:gap-16 px-4 sm:px-8">
      <Square className="text-black px-6 sm:px-10 md:px-28 pb-8 gap-8 md:gap-12">
        <SquareTitle title={"Contato"} color={"primaria02"} />
        <div className="mt-24 md:mt-32 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-48">
          <div className="flex flex-col gap-4 md:gap-6 md:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl">
              {news[1].title}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-pretinho leading-relaxed">
              {news[1].description}
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-secundaria700Azul text-2xl sm:text-3xl hover:opacity-80 cursor-pointer"
                />
                <span className="text-base sm:text-lg md:text-xl">
                  {news[1].instagram}
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-secundaria700Azul text-2xl sm:text-3xl hover:opacity-80 cursor-pointer"
                />
                <span className="text-base sm:text-lg md:text-xl">
                  {news[1].linkedin}
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-secundaria700Azul text-2xl sm:text-3xl hover:opacity-80 cursor-pointer"
                />
                <span className="text-base sm:text-lg md:text-xl">
                  {news[1].email}
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15341.835556436226!2d-48.044397!3d-15.98961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2a8c49ce3677%3A0x447f05b6f05fa281!2sUnB%20-%20Campus%20Gama!5e0!3m2!1spt-BR!2sus!4v1736951751552!5m2!1spt-BR!2sus"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Square>
    </div>
  );
}
