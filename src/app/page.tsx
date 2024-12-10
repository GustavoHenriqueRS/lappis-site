import Header from "@/components/header";
import Square from "@/components/square";

export default function Home() {
  return (
    <div className="h-screen bg-white -z-10 flex items-center justify-center flex-col mt-24">
      <Square/>
      <Square/>
    </div>
  );
}
