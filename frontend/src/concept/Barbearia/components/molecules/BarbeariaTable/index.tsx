import { useBarbeariaContext } from "@/concept/Barbearia/contexts/BarbeariaContext";
import DataTable from "@/ui/components/molecules/DataTable";
import { TableCell, TableRow } from "@mui/material";
import { useMemo } from "react";

const BarbeariaTable: React.FC = () => {
  const { barbearias } = useBarbeariaContext();
  const rows = useMemo(() => {
    return barbearias.map((barbearia, index) => (
      <TableRow key={index}>
        <TableCell align="left">{barbearia.name}</TableCell>
        <TableCell align="left">{barbearia.email}</TableCell>
        <TableCell align="left">{barbearia.phone}</TableCell>
        <TableCell align="left">{barbearia.address}</TableCell>
        <TableCell align="left">{barbearia.city}</TableCell>
        <TableCell align="left">{barbearia.state}</TableCell>
      </TableRow>
    ));
  }, [barbearias]);
  return (
    <DataTable
      headers={["Nome", "E-mail", "Telefone", "Endereço", "Cidade", "Estado"]}
      rows={rows}
    />
  );
};

export default BarbeariaTable;
