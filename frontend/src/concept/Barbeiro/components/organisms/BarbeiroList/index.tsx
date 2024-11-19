import { useBarbeiroContext } from "@/concept/Barbeiro/contexts/BarbeiroContext";
import { useFetchBarbeiros } from "@/concept/Barbeiro/hooks/useFetchBarbeiros";
import { useEffect } from "react";
import BarbeiroTable from "../../molecules/BarbeiroTable";

const BarbeiroList: React.FC = () => {
  const { setBarbeiros } = useBarbeiroContext();
  const { data, isSuccess } = useFetchBarbeiros();

  useEffect(() => {
    if (isSuccess) setBarbeiros(data);
  }, [data, setBarbeiros, isSuccess]);

  return <BarbeiroTable />;
};

export default BarbeiroList;
