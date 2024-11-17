import { HTMLInputTypeAttribute } from "react";

export type Props = {
  fields: FieldType[];
  onRegister: () => void;
}

export type FieldType = {
  value: string;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute; 
  setField: (value: string) => void;
}