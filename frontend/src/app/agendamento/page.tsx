"use client";
import AgendamentoList from "@/concept/Agendamento/components/organisms/AgendamentoList";
import AgendamentoRegister from "@/concept/Agendamento/components/organisms/AgendamentoRegister";
import dynamic from "next/dynamic";
const ListAndRegisterPageTemplate = dynamic(
  () => import("@/ui/templates/ListAndRegisterPageTemplate"),
  {
    ssr: false
  }
);

const page: React.FC = () => {
  return (
    <ListAndRegisterPageTemplate
      List={<AgendamentoList />}
      Register={<AgendamentoRegister />}
      name="Agendamentos"
    />
  );
};

export default page;
