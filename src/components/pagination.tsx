import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: "black" | "white";
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  primaryColor = "primaria01",
  secondaryColor = "secundaria500Amarelo",
  textColor = "black",
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const textColorClass = textColor === "black" ? "text-black" : "text-white";

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Botão para página anterior */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-xl ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : `text-black hover:bg-${primaryColor} hover:${textColorClass}`
        }`}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Números das páginas */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-xl ${
            currentPage === page
              ? `bg-${primaryColor} ${textColorClass} font-bold`
              : `${textColorClass} bg-${secondaryColor} hover:bg-${primaryColor}`
          }`}
        >
          {page}
        </button>
      ))}

      {/* Botão para próxima página */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-xl ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : `text-#030303 hover:bg-${primaryColor} hover:${textColorClass}`
        }`}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
