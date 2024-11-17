"use client";
import ClienteList from "@/concept/Cliente/components/organism/ClienteList";
import ClienteRegister from "@/concept/Cliente/components/organism/ClienteRegister";
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
      List={<ClienteList />}
      Register={<ClienteRegister />}
      name="Clientes"
    />
  );
};

export default page;
