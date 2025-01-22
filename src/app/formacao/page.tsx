"use client";
import { useState } from "react";
import { useNotionData } from "../context/NotionDataContext";
import HorizontalCard from "@/components/horizontalCard";
import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import Pagination from "@/components/pagination";

export default function Formacoes() {
  const { formacoes, loading } = useNotionData();
  const newsPerPage = 5;

  const totalPages = Math.ceil(formacoes.cards.length / newsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * newsPerPage;
  const currentNews = formacoes.cards
    .slice(startIndex, startIndex + newsPerPage)
    .map((card) => ({
      title: card.title,
      description: card.description,
      img: card.url_image,
    }));
  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center flex-col gap-16 px-4 sm:px-8">
      <Square className="text-black gap-8 pb-8 px-6 sm:px-10 md:px-28">
        <SquareTitle title={"Formações"} color={"primaria05"} />
        <div className="mt-28 sm:mt-36 flex flex-row gap-8 w-full flex-wrap justify-between">
          {currentNews.map((news, index) => (
            <HorizontalCard
              key={index}
              color="lila"
              hoverColor="primaria05"
              title={news.title}
              description={news.description}
              img={news.img}
              href={`/formacao/${news.title}`}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          primaryColor="primaria05"
          secondaryColor="lila"
          textColor="white"
        />
      </Square>
    </div>
  );
}
