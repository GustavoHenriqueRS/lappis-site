const colorClassMap: Record<string, string> = {
  primaria01: "fill-primaria01",
  primaria02: "fill-primaria02",
  primaria03: "fill-primaria03",
  primaria04: "fill-primaria04",
  primaria05: "fill-primaria05",
  primaria06: "fill-primaria06",
  secundaria500Laranja: "fill-secundaria500Laranja",
  secundaria500Lilas: "fill-secundaria500Lilas",
  secundaria500Magenta: "fill-secundaria500Magenta",
  secundaria500Roxo: "fill-secundaria500Roxo",
  secundaria500Azul: "fill-secundaria500Azul",
  secundaria500Amarelo: "fill-secundaria500Amarelo",
};

export const ChevronLeft = ({ color }: { color: string }) => {
  const colorClass = colorClassMap[color] || "fill-primaria05";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="79"
      viewBox="0 0 71 79"
      className={`${colorClass}`}
    >
      <path d="M6.50002 49.8923C-1.49998 45.2735 -1.5 33.7265 6.5 29.1077L53 2.26092C61 -2.35788 71 3.41561 71 12.6532V66.3468C71 75.5844 61 81.3579 53 76.7391L6.50002 49.8923Z" />
    </svg>
  );
};

export const ChevronRight = ({ color }: { color: string }) => {
  const colorClass = colorClassMap[color] || "fill-primaria05";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="79"
      viewBox="0 0 71 79"
      className={`${colorClass}`}
    >
      <path d="M64.5 49.8923C72.5 45.2735 72.5 33.7265 64.5 29.1077L18 2.26092C10 -2.35788 0 3.41561 0 12.6532V66.3468C0 75.5844 10 81.3579 18 76.7391L64.5 49.8923Z" />
    </svg>
  );
};
