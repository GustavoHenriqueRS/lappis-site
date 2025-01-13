import Square from "@/components/square";
import SquareTitle from "@/components/squareTitle";
import galera from "../../public/galera.png";
import Image from "next/image";
import path from "path";
import fs from "fs/promises";

interface INoticia {
  title: string;
  body: string;
  imgUrl: string;
}

async function getSessionData() {
  const filePath = path.join(
    process.cwd(),
    "src/app/public/data",
    "noticias.json"
  );
  const fileContent = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContent);
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const sessionData = await getSessionData();

  const noticia: INoticia = sessionData.find((n) => n.id === Number(id));

  return (
    <div className="flex items-center justify-center flex-col mt-24 gap-16">
      <Square className=" text-black px-28 gap-12">
        <SquareTitle title={"Notícias"} color={"primaria04"} />

        <div className="mt-32">
          <h1 className="text-4xl mb-6">{noticia.title}</h1>
          <p className="text-2xl text-pretinho">{noticia.body}</p>
          <Image
            src={galera}
            alt="galera"
            style={{
              height: "465px",
              width: "100%",
              objectFit: "cover",
              margin: "0 auto",
              borderRadius: "12px",
              marginTop: "24px",
              marginBottom: "32px",
            }}
          />
        </div>
      </Square>
    </div>
  );
}
