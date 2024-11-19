"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { AgendamentoContextType, AgendamentoType } from "./types";

const AgendamentoContext = createContext({} as AgendamentoContextType);

export const useAgendamentoContext = () => useContext(AgendamentoContext);

const AgendamentoContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [clienteId, setClienteId] = useState<string>("");
  const [barbeiroId, setBarbeiroId] = useState<string>("");
  const [hora, setHora] = useState<string>("");
  const [agendamentos, setAgendamentos] = useState<AgendamentoType[]>([]);

  const clearForm = useCallback(() => {
    setClienteId("");
    setBarbeiroId("");
    setHora("");
  }, []);

  const values = useMemo(
    () => ({
      clienteId,
      setClienteId,
      barbeiroId,
      setBarbeiroId,
      hora,
      setHora,
      agendamentos,
      setAgendamentos,
      clearForm
    }),
    [clienteId, barbeiroId, hora, agendamentos, clearForm]
  );

  return (
    <AgendamentoContext.Provider value={values}>
      {children}
    </AgendamentoContext.Provider>
  );
};

export default AgendamentoContextProvider;
