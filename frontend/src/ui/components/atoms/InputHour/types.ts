import { Dayjs } from "dayjs";

export type Props = {
  id: string;
  value: Dayjs | null | undefined;
  label: string;
  name: string;
  setField: (value: Dayjs | null | undefined) => void;
}