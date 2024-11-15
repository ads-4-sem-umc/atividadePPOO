import { Dispatch, SetStateAction } from 'react';

export type ClienteContextType = {
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
  nome: string,
  setNome: Dispatch<SetStateAction<string>>,
  telefone: string,
  setTelefone: Dispatch<SetStateAction<string>>,
  clearForm: () => void;
};
