import { Button } from "@mui/material";
import { Props } from "./types";
import Input from "../../atoms/Input";

const FormRegister: React.FC<Props> = ({ fields, onRegister }) => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center h-full"
      style={{ gap: "1rem" }}
    >
      {fields.map((field) => (
        <Input
          key={field.name}
          id="outlined-basic"
          label={field.label}
          variant="outlined"
          type={field.type}
          name={field.name}
          value={field.value}
          setField={field.setField}
          fieldType={field.fieldType || "TextField"}
          options={field.options || []}
        />
      ))}
      <Button variant="contained" onClick={onRegister}>
        Cadastrar
      </Button>
    </div>
  );
};

export default FormRegister;
