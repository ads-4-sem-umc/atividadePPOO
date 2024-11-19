import { OptionType } from "../Input/types";

export type Props = {
  id: string;
  value: string;
  label: string;
  name: string;
  setField: (value: string) => void;
  options: OptionType[];
}
