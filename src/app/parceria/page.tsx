"use client";
import { useState } from "react";
import HorizontalCard from "@/components/horizontalCard";
import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import Pagination from "@/components/pagination";
import { useNotionData } from "../context/NotionDataContext";

interface INew {
  title: string;
  description: string;
  img: string;
  href: string;
}

export default function Parceirias() {
  const { parcerias, loading } = useNotionData();

  const newsPerPage = 5;
  const totalPages = Math.ceil(parcerias.cards.length / newsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * newsPerPage;
  const currentNews = parcerias.cards
    .slice(startIndex, startIndex + newsPerPage)
    .map((card) => ({
      title: card.title,
      description: card.description,
      img: card.url_image,
      href: card.href,
    }));

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center flex-col gap-16 px-4 sm:px-8">
      <Square className="text-black gap-8 pb-8 px-6 sm:px-10 md:px-28">
        <SquareTitle title={"Parceirias"} color={"primaria06"} />
        <div className="mt-28 sm:mt-36 flex flex-row gap-8 w-full flex-wrap justify-between">
          {currentNews.map((news: INew, index: number) => (
            <HorizontalCard
              key={index}
              color="secundaria700Laranja"
              hoverColor="primaria06"
              title={news.title}
              description={news.description}
              img={news.img}
              href={news.href}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          primaryColor="primaria06"
          secondaryColor="secundaria700Laranja"
          textColor="white"
        />
      </Square>
    </div>
  );
}
