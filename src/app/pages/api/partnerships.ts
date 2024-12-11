import { promises as fs } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(process.cwd())
    const filePath = path.join(process.cwd(), "/public/data/header.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);

    res.status(200).json(data.parcerias);
  } catch (error) {
    res.status(500).json({ message: "Erro ao ler o arquivo JSON", error });
  }
}
