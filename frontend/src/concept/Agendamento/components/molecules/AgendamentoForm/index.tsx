import { useAgendamentoContext } from "@/concept/Agendamento/contexts/AgendamentoContext";
import { useRegisterAgendamento } from "@/concept/Agendamento/hooks/useRegisterAgendamento";
import { useBarbeiroContext } from "@/concept/Barbeiro/contexts/BarbeiroContext";
import { useClienteContext } from "@/concept/Cliente/contexts/ClienteContext";
import { OptionType } from "@/ui/components/atoms/Input/types";
import FormRegister from "@/ui/components/molecules/FormRegister";
import { FieldType } from "@/ui/components/molecules/FormRegister/types";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "react-toastify";

const AgendamentoForm: React.FC = () => {
  const {
    barbeiroId,
    setBarbeiroId,
    clienteId,
    setClienteId,
    hora,
    setHora,
    clearForm
  } = useAgendamentoContext();
  const { barbeiros } = useBarbeiroContext();
  const { clientes } = useClienteContext();
  const barbeirosOptions: OptionType[] = useMemo(() => {
    return barbeiros.map((barbeiro) => {
      return {
        value: barbeiro.id,
        label: barbeiro.name
      };
    });
  }, [barbeiros]);
  const clientesOptions: OptionType[] = useMemo(() => {
    return clientes.map((cliente) => {
      return {
        value: cliente.id,
        label: cliente.name
      };
    });
  }, [clientes]);
  const fields: FieldType[] = [
    {
      label: "Barbeiro",
      name: "barbeiro",
      value: barbeiroId,
      setField: setBarbeiroId,
      fieldType: "Select",
      options: barbeirosOptions
    },
    {
      label: "Cliente",
      name: "cliente",
      value: clienteId,
      setField: setClienteId,
      fieldType: "Select",
      options: clientesOptions
    },
    {
      label: "Hora",
      name: "hora",
      value: hora,
      setField: setHora,
      fieldType: "Hour"
    }
  ];
  const { mutate } = useRegisterAgendamento();
  const queryClient = useQueryClient();
  const handleRegistrarBarbeiro = () => {
    mutate(undefined, {
      onSuccess: () => {
        clearForm();
        toast.success("Agendamento cadastrado com sucesso");
        queryClient.invalidateQueries({
          queryKey: ["getBarbeiros"],
          exact: true,
          refetchType: "active"
        });
      },
      onError: () => {
        toast.error("Erro ao cadastrar agendamento");
      }
    });
  };

  return <FormRegister fields={fields} onRegister={handleRegistrarBarbeiro} />;
};

export default AgendamentoForm;
