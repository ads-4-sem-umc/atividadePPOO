import { HTMLInputTypeAttribute } from "react";

export type Props = {
  id: string;
  value: string;
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute; 
  setField: (value: string) => void;
  fieldType: "TextField" | "Select" | "Hour"  
  options?: OptionType[];
  variant: string;
}

export type OptionType = {
  value: string;
  label: string;
}