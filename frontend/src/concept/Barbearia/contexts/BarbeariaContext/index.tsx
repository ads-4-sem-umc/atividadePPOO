"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { BarbeariaContextType, BarbeariaType } from "./types";

const BarbeariaContext = createContext({} as BarbeariaContextType);

export const useBarbeariaContext = () => useContext(BarbeariaContext);

const BarbeariaContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [barbearias, setBarbearias] = useState<BarbeariaType[]>([]);

  const clearForm = useCallback(() => {
    setNome("");
    setEmail("");
    setTelefone("");
    setEndereco("");
    setCidade("");
    setEstado("");
  }, []);

  const values = useMemo(
    () => ({
      nome,
      setNome,
      email,
      setEmail,
      telefone,
      setTelefone,
      endereco,
      setEndereco,
      cidade,
      setCidade,
      estado,
      setEstado,
      barbearias,
      setBarbearias,
      clearForm
    }),
    [nome, email, telefone, endereco, cidade, estado, barbearias, clearForm]
  );

  return (
    <BarbeariaContext.Provider value={values}>
      {children}
    </BarbeariaContext.Provider>
  );
};

export default BarbeariaContextProvider;
