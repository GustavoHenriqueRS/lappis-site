import Image from "next/image";
import purpleShape from "../app/public/formaroxa.svg";
import yellowShape from "../app/public/formaamarela.svg";

export default function BackgroundSquares() {
  return (
    <>
      <div className="absolute -z-40">
        <Image src={purpleShape} alt="Icon" width={250} height={250} />
      </div>
      <div className="absolute right-0 top-0 -z-40">
        <Image src={yellowShape} alt="Icon" width={400} height={400} />
      </div>
    </>
  );
}
