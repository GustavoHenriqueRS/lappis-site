"use client";
import HorizontalCard from "@/components/horizontalCard";
import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import newsData from "../public/data/noticias.json";
import galera from "../public/galera.png";
import Pagination from "@/components/pagination";
import { useState } from "react";

interface INew {
  title: string;
  description: string;
  img: string;
  href: string;
}

export default function Noticias() {
  const newsPerPage = 5;
  const totalPages = Math.ceil(newsData.length / newsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Handler for page change
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * newsPerPage;
  const currentNews = newsData.slice(startIndex, startIndex + newsPerPage);

  return (
    <div className="flex items-center justify-center flex-col gap-16 px-4 sm:px-8">
      <Square className="text-black gap-8 pb-8 px-6 sm:px-10 md:px-28">
        <SquareTitle title={"Notícias"} color={"primaria01"} />
        <div className="mt-28 sm:mt-36 flex flex-col items-center gap-8 w-full flex-wrap justify-between">
          {currentNews.map((news: INew, index: number) => (
            <HorizontalCard
              key={index}
              color="secundaria500Amarelo"
              hoverColor="primaria01"
              title={news.title}
              description={news.description}
              img={galera}
              href={news.href}
              className="w-full"
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          primaryColor="primaria01"
          secondaryColor="secundaria500Amarelo"
          textColor="black"
        />
      </Square>
    </div>
  );
}
