import { TextField } from "@mui/material";
import { Props } from "./types";

const InputText: React.FC<Props> = ({ label, name, setField, value, type }) => {
  return (
    <TextField
      key={name}
      id={name}
      label={label}
      variant="outlined"
      type={type}
      name={name}
      value={value}
      onChange={(e) => setField(e.target.value)}
    />
  );
};

export default InputText;
