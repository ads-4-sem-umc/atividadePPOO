import { useClienteContext } from "@/concept/Cliente/contexts/ClienteContext";
import { useFetchClient } from "@/concept/Cliente/hooks/useFetchClient/useFetchClient";
import { useEffect } from "react";
import ClientTable from "../../molecules/ClientTable";

const ClienteList: React.FC = () => {
  const { setClientes } = useClienteContext();
  const { data, isSuccess } = useFetchClient();

  useEffect(() => {
    if (isSuccess) setClientes(data);
  }, [data, setClientes, isSuccess]);

  return <ClientTable />;
};

export default ClienteList;
