"use client";
import BarbeariaList from "@/concept/Barbearia/components/organisms/BarbeariaList";
import BarbeariaRegister from "@/concept/Barbearia/components/organisms/BarbeariaRegister";
import dynamic from "next/dynamic";
const ListAndRegisterPageTemplate = dynamic(
  () => import("@/ui/templates/ListAndRegisterPageTemplate"),
  {
    ssr: false
  }
);

const barbearia: React.FC = () => {
  return (
    <ListAndRegisterPageTemplate
      List={<BarbeariaList />}
      Register={<BarbeariaRegister />}
      name="Barbearias"
    />
  );
};

export default barbearia;
