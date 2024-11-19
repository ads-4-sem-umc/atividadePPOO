import { useFetchBarbearias } from "@/concept/Barbearia/hooks/useFetchBarbearias";
import BarbeiroForm from "../../molecules/BarbeiroForm";
import { useBarbeariaContext } from "@/concept/Barbearia/contexts/BarbeariaContext";
import { useEffect } from "react";

const BarbeiroRegister: React.FC = () => {
  const { setBarbearias } = useBarbeariaContext();
  const { data, isSuccess } = useFetchBarbearias();

  useEffect(() => {
    if (isSuccess) setBarbearias(data);
  }, [data, setBarbearias, isSuccess]);

  return <BarbeiroForm />;
};

export default BarbeiroRegister;
