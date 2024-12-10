import SessionComponent from "@/components/sessionComponent";

export default async function Home() {
  return (
    <div className="-z-10 flex items-center justify-center flex-col mt-24 gap-16">
      <SessionComponent
        title="Parcerias"
        description="Conectamos tecnologia aberta às necessidades da sociedade, promovendo inovação, impacto social e mudanças reais."
        color="bg-primaria06"
        cardColors="bg-secundaria500Laranja"
        key={1}
      />
      <SessionComponent
        title="Formação"
        description="Conectamos tecnologia aberta às necessidades da sociedade, promovendo inovação, impacto social e mudanças reais."
        color="bg-primaria05"
        cardColors="bg-secundaria900Lilas"
        key={2}
      />
      <SessionComponent
        title="Metodologia"
        description="Conectamos tecnologia aberta às necessidades da sociedade, promovendo inovação, impacto social e mudanças reais."
        color="bg-primaria04"
        cardColors="bg-secundaria900Magenta"
        key={3}
      />
    </div>
  );
}
