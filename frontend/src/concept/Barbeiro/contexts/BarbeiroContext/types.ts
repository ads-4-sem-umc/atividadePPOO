import { BarbeariaType } from '@/concept/Barbearia/contexts/BarbeariaContext/types';
import { Dispatch, SetStateAction } from 'react';

export type BarbeiroContextType = {
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
  nome: string,
  setNome: Dispatch<SetStateAction<string>>,
  telefone: string,
  setTelefone: Dispatch<SetStateAction<string>>,
  barbeariaId: string,
  setBarbeariaId: Dispatch<SetStateAction<string>>,
  barbeiros: BarbeiroType[]
  setBarbeiros: Dispatch<SetStateAction<BarbeiroType[]>>
  clearForm: () => void;
};

export type BarbeiroType = {
  id: string;
  name: string;
  email: string;
  phone: string; 
  barbershop: BarbeariaType;
}
