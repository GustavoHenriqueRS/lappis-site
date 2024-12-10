import Header from "@/components/header";
import HorizontalCard from "@/components/horizontalcard";
import Square from "@/components/square";

export default function Home() {
  return (
    <div className="mx-16 -z-10 flex items-center justify-center flex-col mt-24 gap-16">
      <Square>
        <HorizontalCard color="bg-primaria03" text="estou fazendo o site"  description="muito legal" img="lallaala"/>
      </Square>
    </div>
  );
}
