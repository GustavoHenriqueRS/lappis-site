"use client";
import { useState } from "react";
import HorizontalCard from "@/components/horizontalCard";
import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import newsData from "../public/data/noticias.json";
import galera from "../public/galera.png";
import Pagination from "@/components/pagination";

interface INew {
  title: string;
  description: string;
  img: string;
  href: string;
}

export default function Pesquisas() {
  const newsPerPage = 5;
  const totalPages = Math.ceil(newsData.length / newsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * newsPerPage;
  const currentNews = newsData.slice(startIndex, startIndex + newsPerPage);

  return (
    <div className="flex items-center justify-center flex-col gap-16 px-4 sm:px-8">
      <Square className="text-black gap-8 pb-8 px-6 sm:px-10 md:px-28">
        <SquareTitle title={"Pesquisas"} color={"primaria03"} />
        <div className="mt-28 sm:mt-36 flex flex-row gap-8 w-full flex-wrap justify-between">
          {currentNews.map((news: INew, index: number) => (
            <HorizontalCard
              key={index}
              color="secundaria700Roxo"
              hoverColor="primaria03"
              title={news.title}
              description={news.description}
              img={galera}
              href={news.href}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          primaryColor="primaria03"
          secondaryColor="secundaria700Roxo"
          textColor="white"
        />
      </Square>
    </div>
  );
}
