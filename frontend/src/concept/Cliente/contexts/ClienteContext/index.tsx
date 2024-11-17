"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { ClienteContextType, ClientType } from "./types";

const ClienteContext = createContext({} as ClienteContextType);

export const useClienteContext = () => useContext(ClienteContext);

const ClienteContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [clientes, setClientes] = useState<ClientType[]>([]);

  const clearForm = useCallback(() => {
    setNome("");
    setEmail("");
    setTelefone("");
  }, []);

  const values = useMemo(
    () => ({
      nome,
      setNome,
      email,
      setEmail,
      telefone,
      setTelefone,
      clientes,
      setClientes,
      clearForm
    }),
    [nome, email, telefone, clientes, clearForm]
  );

  return (
    <ClienteContext.Provider value={values}>{children}</ClienteContext.Provider>
  );
};

export default ClienteContextProvider;
