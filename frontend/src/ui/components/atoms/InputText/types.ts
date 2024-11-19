import { HTMLInputTypeAttribute } from "react";

export type Props = {
  value: string;
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute; 
  setField: (value: string) => void;
}