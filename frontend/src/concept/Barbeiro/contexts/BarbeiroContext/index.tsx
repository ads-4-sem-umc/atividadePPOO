"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { BarbeiroContextType, BarbeiroType } from "./types";

const BarbeiroContext = createContext({} as BarbeiroContextType);

export const useBarbeiroContext = () => useContext(BarbeiroContext);

const BarbeiroContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [barbeariaId, setBarbeariaId] = useState<string>("");
  const [barbeiros, setBarbeiros] = useState<BarbeiroType[]>([]);

  const clearForm = useCallback(() => {
    setNome("");
    setEmail("");
    setTelefone("");
    setBarbeariaId("");
  }, []);

  const values = useMemo(
    () => ({
      nome,
      setNome,
      email,
      setEmail,
      telefone,
      setTelefone,
      barbeariaId,
      setBarbeariaId,
      barbeiros,
      setBarbeiros,
      clearForm
    }),
    [nome, email, telefone, barbeariaId, barbeiros, clearForm]
  );

  return (
    <BarbeiroContext.Provider value={values}>
      {children}
    </BarbeiroContext.Provider>
  );
};

export default BarbeiroContextProvider;
