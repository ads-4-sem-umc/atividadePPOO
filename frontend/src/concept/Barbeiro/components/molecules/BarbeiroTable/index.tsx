import { useBarbeiroContext } from "@/concept/Barbeiro/contexts/BarbeiroContext";
import DataTable from "@/ui/components/molecules/DataTable";
import { TableCell, TableRow } from "@mui/material";
import { useMemo } from "react";

const BarbeiroTable: React.FC = () => {
  const { barbeiros } = useBarbeiroContext();
  const rows = useMemo(() => {
    return barbeiros.map((barbeiro, index) => (
      <TableRow key={index}>
        <TableCell align="left">{barbeiro.name}</TableCell>
        <TableCell align="left">{barbeiro.email}</TableCell>
        <TableCell align="left">{barbeiro.phone}</TableCell>
        <TableCell align="left">{barbeiro.barbershop.name}</TableCell>
      </TableRow>
    ));
  }, [barbeiros]);
  return (
    <DataTable
      headers={["Nome", "E-mail", "Telefone", "Barbearia"]}
      rows={rows}
    />
  );
};

export default BarbeiroTable;
