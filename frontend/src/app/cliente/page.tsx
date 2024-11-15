"use client";
import ClienteList from "@/concept/Cliente/components/organism/ClienteList";
import ClienteRegister from "@/concept/Cliente/components/organism/ClienteRegister";
import ListAndRegisterPageTemplate from "@/ui/templates/ListAndRegisterPageTemplate";

const page: React.FC = () => {
  return (
    <ListAndRegisterPageTemplate
      List={<ClienteList />}
      Register={<ClienteRegister />}
    />
  );
};

export default page;
