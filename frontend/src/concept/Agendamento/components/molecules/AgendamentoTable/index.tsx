import { useAgendamentoContext } from "@/concept/Agendamento/contexts/AgendamentoContext";
import DataTable from "@/ui/components/molecules/DataTable";
import { TableCell, TableRow } from "@mui/material";
import { useMemo } from "react";

const AgendamentoTable: React.FC = () => {
  const { agendamentos } = useAgendamentoContext();
  const rows = useMemo(() => {
    return agendamentos.map((agendamento, index) => (
      <TableRow key={index}>
        <TableCell align="left">{agendamento.barber.name}</TableCell>
        <TableCell align="left">{agendamento.client.name}</TableCell>
        <TableCell align="left">{agendamento.hour}</TableCell>
      </TableRow>
    ));
  }, [agendamentos]);
  return <DataTable headers={["Barbeiro", "Cliente", "Horário"]} rows={rows} />;
};

export default AgendamentoTable;
