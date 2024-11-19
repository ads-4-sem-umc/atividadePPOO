import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import { Props } from "./types";

const InputSelect: React.FC<Props> = ({
  id,
  label,
  name,
  setField,
  value,
  options
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setField(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
        variant="outlined"
        name={name}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
