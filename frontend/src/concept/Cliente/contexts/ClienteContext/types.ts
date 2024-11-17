import { Dispatch, SetStateAction } from 'react';

export type ClienteContextType = {
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
  nome: string,
  setNome: Dispatch<SetStateAction<string>>,
  telefone: string,
  setTelefone: Dispatch<SetStateAction<string>>,
  clientes: ClientType[],
  setClientes: Dispatch<SetStateAction<ClientType[]>>,
  clearForm: () => void;
};

export type ClientType = {
  id: string;
  name: string;
  email: string;
  phone: string;
}