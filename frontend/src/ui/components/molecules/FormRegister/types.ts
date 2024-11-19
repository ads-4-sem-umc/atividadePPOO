import { HTMLInputTypeAttribute } from "react";
import { OptionType } from "../../atoms/Input/types";

export type Props = {
  fields: FieldType[];
  onRegister: () => void;
}

export type FieldType = {
  value: string;
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute; 
  setField: (value: string) => void;
  options?: OptionType[];
  fieldType?: "TextField" | "Select" | "Hour";
}