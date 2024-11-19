import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Props } from "./types";
import dayjs from "dayjs";

const InputHour: React.FC<Props> = ({ label, name, setField, value }) => {
  const formatHour = (value: dayjs.Dayjs | null) => {
    if (!value) return "";
    return `${value.hour.toString}:${value.minute.toString}`;
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        name={name}
        value={dayjs(value)}
        onChange={(newValue) => setField(formatHour(newValue))}
      />
    </LocalizationProvider>
  );
};

export default InputHour;
