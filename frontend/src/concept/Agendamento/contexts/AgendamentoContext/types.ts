import { BarbeiroType } from '@/concept/Barbeiro/contexts/BarbeiroContext/types';
import { ClientType } from '@/concept/Cliente/contexts/ClienteContext/types';
import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';

export type AgendamentoContextType = {
  barbeiroId: string,
  setBarbeiroId: Dispatch<SetStateAction<string>>,
  clienteId: string,
  setClienteId: Dispatch<SetStateAction<string>>,
  hora: Dayjs | null | undefined,
  setHora: Dispatch<SetStateAction<Dayjs | null | undefined>>,
  agendamentos: AgendamentoType[],
  setAgendamentos: Dispatch<SetStateAction<AgendamentoType[]>>,
  clearForm: () => void;
};

export type AgendamentoType = {
  id: string;
  barber: BarbeiroType;
  client: ClientType;
  hour: string;
}