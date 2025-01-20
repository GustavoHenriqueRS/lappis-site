"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllNotionData } from "../lib/fetchAllNotionData";

interface Contato {
  title: string;
  description: string;
  instagram: string;
  linkedin: string;
  email: string;
}

interface Section {
  title: string;
  buttonLink?: string;
  description: string;
  hoverColor: string;
  cardColors: string;
  cards: {
    title: string;
    description: string;
    url_image: string;
    href: string;
    competencias: string[];
  }[];
}

interface NotionDataContextType {
  header: any[];
  contato: Contato[];
  formacoes: Section;
  parcerias: Section;
  pesquisa: Section;
  noticia: Section;
  loading: boolean;
}

const NotionDataContext = createContext<NotionDataContextType | undefined>(
  undefined
);

export function NotionDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<NotionDataContextType>({
    header: [],
    contato: [
      {
        title: "Contato",
        description: "Fale Conosco!",
        instagram: "/default-instagram.png",
        linkedin: "/default-linkedin.png",
        email: "Sem email",
      },
    ],
    formacoes: {
      title: "Formação",
      buttonLink: "/formacao",
      description: "Explore nossas formações disponíveis.",
      hoverColor: "#FFC107",
      cardColors: "#FFC107",
      cards: [],
    },
    parcerias: {
      title: "Parcerias",
      buttonLink: "/parcerias",
      description: "Conheça nossas parcerias estratégicas.",
      hoverColor: "#FF5722",
      cardColors: "#FF5722",
      cards: [],
    },
    pesquisa: {
      title: "Pesquisas",
      buttonLink: "/pesquisas",
      description: "Confira nossas pesquisas mais recentes.",
      hoverColor: "#4CAF50",
      cardColors: "#4CAF50",
      cards: [],
    },
    noticia: {
      title: "Notícias",
      buttonLink: "/noticias",
      description: "Acompanhe as últimas notícias.",
      hoverColor: "#2196F3",
      cardColors: "#2196F3",
      cards: [],
    },
    loading: true,
  });

  useEffect(() => {
    async function loadNotionData() {
      try {
        const notionData = await fetchAllNotionData();

        setData({
          header: notionData.header.map((item: any) => ({
            title: item.properties?.Title?.title[0]?.plain_text || "Sem título",
            href:
              item.properties?.["Column 1"]?.rich_text[0]?.plain_text || "#",
          })),
          contato: notionData.contato.map((item: any) => ({
            title: item.properties?.["Title"]?.rich_text?.[0]?.plain_text,
            description:
              item.properties?.["Description"]?.rich_text?.[0]?.plain_text ||
              "Sem descrição",
            instagram:
              item.properties?.["Instagram"]?.rich_text?.[0]?.plain_text ||
              "/default-instagram.png",
            linkedin:
              item.properties?.["Linkedin"]?.rich_text?.[0]?.plain_text ||
              "/default-linkedin.png",
            email:
              item.properties?.["Email"]?.rich_text?.[0]?.plain_text ||
              "Sem email",
          })),

          formacoes: {
            title: "Formações",
            buttonLink: "/formacao",
            description:
              notionData.formacoes[0].properties?.["Column 1"]?.rich_text[0]
                ?.plain_text || "",
            hoverColor: "#FFC107",
            cardColors: extractSectionColors(notionData.formacoes),
            cards: notionData.formacoes.map((item: any) => ({
              title:
                item.properties?.["Column 4"]?.rich_text[0]?.plain_text ||
                "Sem título",
              description:
                item.properties?.["Column 5"]?.rich_text[0]?.plain_text ||
                "Sem descrição",
              url_image:
                item.properties?.["Column 6"]?.rich_text[0]?.plain_text ||
                "/default-image.png",
              href: item.url || "#",
              competencias:
                item.properties?.["Column 7"]?.rich_text[0]?.plain_text?.split(
                  ", "
                ) || [],
            })),
          },
          pesquisa: {
            title: "Pesquisas",
            buttonLink: "/pesquisas",
            description:
              notionData.pesquisa[1].properties?.["Column 1"]?.rich_text[0]
                ?.plain_text || "",
            hoverColor: "#4CAF50",
            cardColors: extractSectionColors(notionData.pesquisa),
            cards: notionData.pesquisa.map((item: any) => ({
              title:
                item.properties?.["Column 4"]?.rich_text[0]?.plain_text ||
                "Sem título",
              description:
                item.properties?.["Column 5"]?.rich_text[0]?.plain_text ||
                "Sem descrição",
              url_image:
                item.properties?.["Column 6"]?.rich_text[0]?.plain_text ||
                "/default-image.png",
              href: item.url || "#",
              competencias:
                item.properties?.["Column 7"]?.rich_text[0]?.plain_text?.split(
                  ", "
                ) || [],
            })),
          },
          parcerias: {
            title: "Parcerias",
            buttonLink: "/parcerias",
            description: "Conheça nossas parcerias estratégicas.",
            hoverColor: "#FF5722",
            cardColors: extractSectionColors(notionData.parcerias),
            cards: notionData.parcerias.map((item: any) => ({
              title:
                item.properties?.["Column 4"]?.rich_text[0]?.plain_text ||
                "Sem título",
              description:
                item.properties?.["Column 5"]?.rich_text[0]?.plain_text ||
                "Sem descrição",
              url_image:
                item.properties?.["Column 6"]?.rich_text[0]?.plain_text ||
                "/default-image.png",
              href: item.url || "#",
              competencias:
                item.properties?.["Column 7"]?.rich_text[0]?.plain_text?.split(
                  ", "
                ) || [],
            })),
          },
          noticia: {
            title: "Notícias",
            buttonLink: "/noticias",
            description: "Acompanhe as últimas notícias.",
            hoverColor: "#2196F3",
            cardColors: extractSectionColors(notionData.noticia),
            cards: notionData.noticia.map((item: any) => ({
              title:
                item.properties?.["Column 4"]?.rich_text[0]?.plain_text ||
                "Sem título",
              description:
                item.properties?.["Column 5"]?.rich_text[0]?.plain_text ||
                "Sem descrição",
              url_image:
                item.properties?.["Column 6"]?.rich_text[0]?.plain_text ||
                "/default-image.png",
              href: item.url || "#",
              competencias:
                item.properties?.["Column 7"]?.rich_text[0]?.plain_text?.split(
                  ", "
                ) || [],
            })),
          },
          loading: false,
        });
      } catch (error) {
        console.error("Error loading Notion data:", error);
        setData((prev) => ({ ...prev, loading: false }));
      }
    }

    loadNotionData();
  }, []);

  return (
    <NotionDataContext.Provider value={data}>
      {children}
    </NotionDataContext.Provider>
  );
}

export function extractSectionColors(sectionItems: any[]) {
  for (let i = 0; i < sectionItems.length; i++) {
    if (
      sectionItems[i].properties?.["Column 3"]?.rich_text[0]?.plain_text !=
      undefined
    ) {
      return sectionItems[i].properties?.["Column 3"]?.rich_text[0]?.plain_text;
    }
  }
}

export function useNotionData() {
  const context = useContext(NotionDataContext);
  if (!context) {
    throw new Error("useNotionData must be used within a NotionDataProvider");
  }
  return context;
}
