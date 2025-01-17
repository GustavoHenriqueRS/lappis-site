"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllNotionData } from "../lib/fetchAllNotionData";

interface NotionDataContextType {
  header: any[];
  formacoes: any[];
  parcerias: any[];
  pesquisa: any[];
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
    formacoes: [],
    parcerias: [],
    pesquisa: [],
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
          formacoes: notionData.formacoes.map((item: any) => ({
            title:
              item.properties?.["Column 4"]?.rich_text[0]?.plain_text ||
              "Sem título",
            description:
              item.properties?.["Column 5"]?.rich_text[0]?.plain_text ||
              "Sem descrição",
            img:
              item.properties?.["Column 6"]?.rich_text[0]?.plain_text ||
              "/default-image.png",
            href: item.url || "#",
          })),
          pesquisa: notionData.pesquisa.map((item: any) => ({
            title:
              item.properties?.["Column 4"]?.rich_text[0]?.plain_text ||
              "Sem título",
            description:
              item.properties?.["Column 5"]?.rich_text[0]?.plain_text ||
              "Sem descrição",
            img:
              item.properties?.["Column 6"]?.rich_text[0]?.plain_text ||
              "/default-image.png",
            href: item.url || "#",
          })),

          parcerias: notionData.parcerias,
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

export function useNotionData() {
  const context = useContext(NotionDataContext);
  if (!context) {
    throw new Error("useNotionData must be used within a NotionDataProvider");
  }
  return context;
}
