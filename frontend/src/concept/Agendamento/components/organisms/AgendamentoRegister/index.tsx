import { useBarbeiroContext } from "@/concept/Barbeiro/contexts/BarbeiroContext";
import AgendamentoForm from "../../molecules/AgendamentoForm";
import { useFetchBarbeiros } from "@/concept/Barbeiro/hooks/useFetchBarbeiros";
import { useEffect } from "react";
import { useClienteContext } from "@/concept/Cliente/contexts/ClienteContext";
import { useFetchClient } from "@/concept/Cliente/hooks/useFetchClient/useFetchClient";

const AgendamentoRegister: React.FC = () => {
  const { setBarbeiros } = useBarbeiroContext();
  const { data: barbeirosData, isSuccess: barbeirosIsSucces } =
    useFetchBarbeiros();
  const { setClientes } = useClienteContext();
  const { data: clientesData, isSuccess: clientesIsSuccess } = useFetchClient();

  useEffect(() => {
    if (barbeirosIsSucces) setBarbeiros(barbeirosData);
  }, [barbeirosData, setBarbeiros, barbeirosIsSucces]);

  useEffect(() => {
    if (clientesIsSuccess) setClientes(clientesData);
  }, [clientesData, setClientes, clientesIsSuccess]);

  return <AgendamentoForm />;
};

export default AgendamentoRegister;
