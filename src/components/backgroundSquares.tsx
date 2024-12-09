import Image from "next/image";
import purpleShape from "../app/public/formaroxa.svg";
import yellowShape from "../app/public/formaamarela.svg";

export default function BackgroundSquares() {
  return (
    <>
      <div className="absolute z-0">
        <Image src={purpleShape} alt="Icon" width={250} height={250} />
      </div>
      <div className="absolute z-0 right-0">
        <Image src={yellowShape} alt="Icon" width={300} height={300} />
      </div>
    </>
  );
}
