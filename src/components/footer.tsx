import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import unbLogo from "../app/public/logo_unb.png";
import lappisLogo from "../app/public/logo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

async function getSessionData() {
  const footerFile = path.join(
    process.cwd(),
    "src/app/public/data",
    "footer.json"
  );
  const fileContent = await fs.readFile(footerFile, "utf8");
  return JSON.parse(fileContent);
}

export default async function Footer() {
  const footerData = await getSessionData();

  return (
    <div className="bg-primaria03 text-[#583074] mt-20">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-wrap w-full gap-6 p-20 justify-around">
          {footerData.map((section: any, index: number) => (
            <div
              key={index}
              className="min-w-[192px] mb-4 text-white flex gap-6 flex-col items-center p-6"
            >
              <h3 className="font-bold uppercase mb-2 text-xl">
                {section.title}
              </h3>
              <ul className="space-y-1 flex flex-col gap-6 items-center">
                {section.items.map((item: any, itemIndex: number) => (
                  <li key={itemIndex}>
                    <Link href={item.url} className="hover:underline text-xl">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 text-white py-12">
        <Image src={unbLogo} alt="Logo UnB" width={200} height={200} />

        <Image src={lappisLogo} alt="Logo Lappis" width={200} height={200} />
        <div className="flex gap-8 items-center">
          <p className="text-xl font-bold">Redes Sociais</p>
          <div className="flex gap-4 h-8">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
}
