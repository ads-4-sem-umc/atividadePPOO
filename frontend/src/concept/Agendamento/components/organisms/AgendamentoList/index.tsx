import { useAgendamentoContext } from "@/concept/Agendamento/contexts/AgendamentoContext";
import { useFetchAgendamentos } from "@/concept/Agendamento/hooks/useFetchAgendamentos";
import { useEffect } from "react";
import AgendamentoTable from "../../molecules/AgendamentoTable";

const AgendamentoList: React.FC = () => {
  const { setAgendamentos } = useAgendamentoContext();
  const { data, isSuccess } = useFetchAgendamentos();

  useEffect(() => {
    if (isSuccess) setAgendamentos(data);
  }, [data, setAgendamentos, isSuccess]);

  return <AgendamentoTable />;
};

export default AgendamentoList;
