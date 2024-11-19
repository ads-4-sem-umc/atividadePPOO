"use client";
import BarbeiroList from "@/concept/Barbeiro/components/organisms/BarbeiroList";
import BarbeiroRegister from "@/concept/Barbeiro/components/organisms/BarbeiroRegister";
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
      List={<BarbeiroList />}
      Register={<BarbeiroRegister />}
      name="Barbeiros"
    />
  );
};

export default page;
