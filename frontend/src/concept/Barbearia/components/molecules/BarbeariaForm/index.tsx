import { useBarbeariaContext } from "@/concept/Barbearia/contexts/BarbeariaContext";
import { useRegisterBarbearia } from "@/concept/Barbearia/hooks/useRegisterBarbearia";
import FormRegister from "@/ui/components/molecules/FormRegister";
import { FieldType } from "@/ui/components/molecules/FormRegister/types";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const BarbeariaForm: React.FC = () => {
  const {
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
    clearForm
  } = useBarbeariaContext();
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
    },
    {
      label: "Endereço",
      name: "endereco",
      value: endereco,
      setField: setEndereco,
      type: "text"
    },
    {
      label: "Cidade",
      name: "cidade",
      value: cidade,
      setField: setCidade,
      type: "text"
    },
    {
      label: "Estado",
      name: "estado",
      value: estado,
      setField: setEstado,
      type: "text"
    }
  ];
  const { mutate } = useRegisterBarbearia();
  const queryClient = useQueryClient();
  const handleRegisterBarbearia = () => {
    mutate(undefined, {
      onSuccess: () => {
        clearForm();
        toast.success("Barbearia cadastrada com sucesso");
        queryClient.invalidateQueries({
          queryKey: ["getBarbearias"],
          exact: true,
          refetchType: "active"
        });
      },
      onError: () => {
        toast.error("Erro ao cadastrar barbearia");
      }
    });
  };

  return <FormRegister fields={fields} onRegister={handleRegisterBarbearia} />;
};

export default BarbeariaForm;
