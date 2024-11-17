import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { Props } from "./types";

const DataTable: React.FC<Props> = ({ headers, rows }) => {
  return (
    <div className="w-full p-4">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell align="left" key={index}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{rows.map((row) => row)}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
