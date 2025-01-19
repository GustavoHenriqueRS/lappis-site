import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Configuração das variáveis de ambiente
const notionSecret = process.env.NOTION_TOKEN;
const databaseIds = {
  header: process.env.NOTION_HEADER_DATABASE_ID,
  formacoes: process.env.NOTION_FORMACOES_DATABASE_ID,
  parcerias: process.env.NOTION_PARCEIRAS_DATABASE_ID,
  pesquisa: process.env.NOTION_PESQUISA_DATABASE_ID,
  noticia: process.env.NOTION_NOTICIAS_DATABASE_ID,
  contato: process.env.NOTION_CONTATO_DATABASE_ID,
};

// Validação das variáveis de ambiente
if (!notionSecret || !databaseIds.header || !databaseIds.formacoes || !databaseIds.parcerias || !databaseIds.contato) {
  throw new Error(
    "NOTION_TOKEN and all NOTION_DATABASE_IDs must be defined as environment variables"
  );
}


// Instância do cliente Notion
const notionClient = new Client({
  auth: notionSecret,
});

// Manipulador GET para buscar dados de múltiplas databases
export async function GET() {
  try {
    // Realizando as requisições para múltiplas databases simultaneamente
    const [headerData, formacoesData, parceriasData, pesquisaData, noticiaData, contatoData] = await Promise.all([
      notionClient.databases.query({ database_id: databaseIds.header! }),
      notionClient.databases.query({ database_id: databaseIds.formacoes! }),
      notionClient.databases.query({ database_id: databaseIds.parcerias! }),
      notionClient.databases.query({ database_id: databaseIds.pesquisa! }),
      notionClient.databases.query({ database_id: databaseIds.noticia! }),
      notionClient.databases.query({ database_id: databaseIds.contato! }),
    ]);

    // Retornando os dados como JSON
    return NextResponse.json({
      header: headerData.results.reverse(),
      formacoes: formacoesData.results,
      parcerias: parceriasData.results,
      pesquisa: pesquisaData.results,
      noticia: noticiaData.results,
      contato: contatoData.results,
    });
  } catch (error) {
    console.error("Failed to fetch data from Notion:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Notion API" },
      { status: 500 }
    );
  }
}
