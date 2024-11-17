import { useEffect } from "react";
import BarbeariaTable from "../../molecules/BarbeariaTable";
import { useBarbeariaContext } from "@/concept/Barbearia/contexts/BarbeariaContext";
import { useFetchBarbearias } from "@/concept/Barbearia/hooks/useFetchBarbearias";

const BarbeariaList = () => {
  const { setBarbearias } = useBarbeariaContext();
  const { data, isSuccess } = useFetchBarbearias();

  useEffect(() => {
    if (isSuccess) setBarbearias(data);
  }, [data, setBarbearias, isSuccess]);

  return <BarbeariaTable />;
};

export default BarbeariaList;
