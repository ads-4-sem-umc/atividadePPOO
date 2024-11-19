import { useMemo } from "react";
import { Props } from "./types";
import InputText from "../InputText";
import InputSelect from "../InputSelect";
import InputHour from "../InputHour";

export const inputs: { [key: string]: any } = {
  TextField: InputText,
  Select: InputSelect,
  Hour: InputHour
};

const Input: React.FC<Props> = ({
  fieldType,
  name,
  id,
  label,
  setField,
  value,
  variant,
  options,
  type
}) => {
  const InputComponent = useMemo(
    () => inputs[fieldType || "TextField"] || inputs.TextField,
    [fieldType]
  );

  return (
    <InputComponent
      key={name}
      id={id}
      label={label}
      type={type}
      name={name}
      value={value}
      variant={variant}
      options={options}
      setField={setField}
    />
  );
};

export default Input;
