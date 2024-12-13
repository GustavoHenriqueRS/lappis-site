import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-primaria01", "bg-primaria02", "bg-primaria03", "bg-primaria04",
    "bg-primaria05", "bg-primaria06", "bg-secundaria500Laranja",
    "bg-secundaria500Lilas", "bg-secundaria500Magenta", "bg-secundaria500Roxo",
    "bg-secundaria500Azul", "bg-secundaria500Amarelo",
    "bg-secundaria700Laranja", "bg-secundaria700Lilas",
    "bg-secundaria700Magenta", "bg-secundaria700Roxo",
    "bg-secundaria700Azul", "bg-secundaria700Amarelo",
    "bg-secundaria900Laranja", "bg-secundaria900Lilas",
    "bg-secundaria900Magenta", "bg-secundaria900Roxo",
    "bg-secundaria900Azul", "bg-secundaria900Amarelo",
    "hover:bg-secundaria500Laranja", "hover:bg-secundaria500Lilas",
    "hover:bg-secundaria500Magenta", "hover:bg-secundaria500Roxo",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightgrey: "#f6f6f6",
        //primaria
        primaria01: "#f9a10e",
        primaria02: "#17CEE6",
        primaria03: "#422556",
        primaria04: "#CF2B6B",
        primaria05: "#5C348B",
        primaria06: "#f26f1c",
        secundaria500Laranja: "#DE600A",
        secundaria500Lilas: "#9F72CE",
        secundaria500Magenta: "#E94B81",
        secundaria500Roxo: "#9B79B0",
        secundaria500Azul: "#0097AD",
        secundaria500Amarelo: "#C27400",
        //secundaria700 
        secundaria700Laranja: "#A93800",
        secundaria700Lilas: "#734BA0",
        secundaria700Magenta: "#B6175A",
        secundaria700Roxo: "#715284",
        secundaria700Azul: "#006D82",
        secundaria700Amarelo: "#904E00",
        //secundaria900 
        secundaria900Laranja: "#6B2000",
        secundaria900Lilas: "#472C65",
        secundaria900Magenta: "#730936",
        secundaria900Roxo: "#453152",
        secundaria900Azul: "#004351",
        secundaria900Amarelo: "#5C2E00",
      },
      width: {
        95: "95%",
      },
      height: {
        square: "747px",
        footer: "682px",
        card: "420px",
      },
      fontFamily: {
        orbitron: ["Orbitron"],
        notoSans: ["NotoSans"],
      },
    },
  },
  plugins: [],
} satisfies Config;
