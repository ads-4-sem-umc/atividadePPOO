import { BarbeiroType } from '@/concept/Barbeiro/contexts/BarbeiroContext/types';
import { ClientType } from '@/concept/Cliente/contexts/ClienteContext/types';
import { Dispatch, SetStateAction } from 'react';

export type AgendamentoContextType = {
  barbeiroId: string,
  setBarbeiroId: Dispatch<SetStateAction<string>>,
  clienteId: string,
  setClienteId: Dispatch<SetStateAction<string>>,
  hora: string,
  setHora: Dispatch<SetStateAction<string>>,
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