import Image from "next/image";
import purpleShape from "../app/public/formaroxa.svg";
import yellowShape from "../app/public/formaamarela.svg";

export default function BackgroundSquares() {
  return (
    <>
      <div className="absolute ">
        <Image src={purpleShape} alt="Icon" width={250} height={250} />
      </div>
      <div className="absolute right-0">
        <Image src={yellowShape} alt="Icon" width={700} height={700} />
      </div>
    </>
  );
}
