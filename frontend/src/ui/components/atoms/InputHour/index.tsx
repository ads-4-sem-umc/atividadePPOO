import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Props } from "./types";

const InputHour: React.FC<Props> = ({ label, name, setField, value }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        name={name}
        value={value}
        onChange={(newValue) => setField(newValue)}
      />
    </LocalizationProvider>
  );
};

export default InputHour;
