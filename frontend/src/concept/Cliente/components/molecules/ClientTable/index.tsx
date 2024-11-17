import { useClienteContext } from "@/concept/Cliente/contexts/ClienteContext";
import DataTable from "@/ui/components/molecules/DataTable";
import { TableCell, TableRow } from "@mui/material";
import { useMemo } from "react";

const ClientTable: React.FC = () => {
  const { clientes } = useClienteContext();
  const rows = useMemo(() => {
    return clientes.map((cliente, index) => (
      <TableRow key={index}>
        <TableCell align="left">{cliente.name}</TableCell>
        <TableCell align="left">{cliente.email}</TableCell>
        <TableCell align="left">{cliente.phone}</TableCell>
      </TableRow>
    ));
  }, [clientes]);
  return <DataTable headers={["Nome", "E-mail", "Telefone"]} rows={rows} />;
};

export default ClientTable;
