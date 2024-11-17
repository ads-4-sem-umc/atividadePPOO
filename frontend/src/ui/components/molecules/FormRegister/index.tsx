import { Button, TextField } from "@mui/material";
import { Props } from "./types";

const FormRegister: React.FC<Props> = ({ fields, onRegister }) => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center h-full"
      style={{ gap: "1rem" }}
    >
      {fields.map((field) => (
        <TextField
          key={field.name}
          id="outlined-basic"
          label={field.label}
          variant="outlined"
          type={field.type}
          name={field.name}
          value={field.value}
          onChange={(e) => field.setField(e.target.value)}
        />
      ))}
      <Button variant="contained" onClick={onRegister}>
        Cadastrar
      </Button>
    </div>
  );
};

export default FormRegister;
