"use client";

import { useClienteContext } from "@/concept/Cliente/contexts/ClienteContext";
import { useRegisterCliente } from "@/concept/Cliente/hooks/useRegisterClient/useRegisterClient";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";

const ClienteRegister: React.FC = () => {
  const { nome, setNome, email, setEmail, telefone, setTelefone, clearForm } =
    useClienteContext();
  const { mutate } = useRegisterCliente();
  const handleRegisterCliente = () => {
    mutate(undefined, {
      onSuccess: () => {
        clearForm();
        toast.success("Cliente cadastrado com sucesso");
      },
      onError: () => {
        toast.error("Erro ao cadastrar cliente");
      }
    });
  };
  return (
    <div className="flex flex-col gap-4 items-center">
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        name="email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Telefone"
        variant="outlined"
        name="telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <Button onClick={handleRegisterCliente}>Cadastrar</Button>
    </div>
  );
};

export default ClienteRegister;
