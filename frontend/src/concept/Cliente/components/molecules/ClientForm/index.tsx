import { useClienteContext } from "@/concept/Cliente/contexts/ClienteContext";
import { useRegisterCliente } from "@/concept/Cliente/hooks/useRegisterClient/useRegisterClient";
import FormRegister from "@/ui/components/molecules/FormRegister";
import { FieldType } from "@/ui/components/molecules/FormRegister/types";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ClientForm: React.FC = () => {
  const { nome, setNome, email, setEmail, telefone, setTelefone, clearForm } =
    useClienteContext();
  const fields: FieldType[] = [
    {
      label: "Nome",
      name: "nome",
      value: nome,
      setField: setNome,
      type: "text"
    },
    {
      label: "E-mail",
      name: "email",
      value: email,
      setField: setEmail,
      type: "email"
    },
    {
      label: "Telefone",
      name: "telefone",
      value: telefone,
      setField: setTelefone,
      type: "phone"
    }
  ];
  const { mutate } = useRegisterCliente();
  const queryClient = useQueryClient();
  const handleRegisterCliente = () => {
    mutate(undefined, {
      onSuccess: () => {
        clearForm();
        toast.success("Cliente cadastrado com sucesso");
        queryClient.invalidateQueries({
          queryKey: ["getClients"],
          exact: true,
          refetchType: "active"
        });
      },
      onError: () => {
        toast.error("Erro ao cadastrar cliente");
      }
    });
  };

  return <FormRegister fields={fields} onRegister={handleRegisterCliente} />;
};

export default ClientForm;
