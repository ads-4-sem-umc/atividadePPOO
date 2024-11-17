import { Dispatch, SetStateAction } from 'react';

export type BarbeariaContextType = {
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
  nome: string,
  setNome: Dispatch<SetStateAction<string>>,
  telefone: string,
  setTelefone: Dispatch<SetStateAction<string>>,
  endereco: string,
  setEndereco: Dispatch<SetStateAction<string>>,
  cidade: string,
  setCidade: Dispatch<SetStateAction<string>>,
  estado: string,
  setEstado: Dispatch<SetStateAction<string>>,
  barbearias: BarbeariaType[],
  setBarbearias: Dispatch<SetStateAction<BarbeariaType[]>>,
  clearForm: () => void;
};

export type BarbeariaType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
}