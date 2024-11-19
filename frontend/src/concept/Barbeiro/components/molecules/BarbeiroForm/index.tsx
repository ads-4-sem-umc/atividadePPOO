import { useBarbeariaContext } from "@/concept/Barbearia/contexts/BarbeariaContext";
import { useBarbeiroContext } from "@/concept/Barbeiro/contexts/BarbeiroContext";
import { useRegisterBarbeiro } from "@/concept/Barbeiro/hooks/useRegisterBarbeiro";
import { OptionType } from "@/ui/components/atoms/Input/types";
import FormRegister from "@/ui/components/molecules/FormRegister";
import { FieldType } from "@/ui/components/molecules/FormRegister/types";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "react-toastify";

const BarbeiroForm: React.FC = () => {
  const {
    nome,
    setNome,
    email,
    setEmail,
    telefone,
    setTelefone,
    barbeariaId,
    setBarbeariaId,
    clearForm
  } = useBarbeiroContext();
  const { barbearias } = useBarbeariaContext();
  const options: OptionType[] = useMemo(() => {
    return barbearias.map((barbearia) => {
      return {
        value: barbearia.id,
        label: barbearia.name
      };
    });
  }, [barbearias]);
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
      label: "Barbearia",
      name: "barbearia",
      value: barbeariaId,
      setField: setBarbeariaId,
      fieldType: "Select",
      options: options
    }
  ];
  const { mutate } = useRegisterBarbeiro();
  const queryClient = useQueryClient();
  const handleRegistrarBarbeiro = () => {
    mutate(undefined, {
      onSuccess: () => {
        clearForm();
        toast.success("Barbeiro cadastrado com sucesso");
        queryClient.invalidateQueries({
          queryKey: ["getBarbeiros"],
          exact: true,
          refetchType: "active"
        });
      },
      onError: () => {
        toast.error("Erro ao cadastrar barbeiro");
      }
    });
  };

  return <FormRegister fields={fields} onRegister={handleRegistrarBarbeiro} />;
};

export default BarbeiroForm;
