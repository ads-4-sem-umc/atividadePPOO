"use client"

import { useApi } from "@/api/useApi";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { useAgendamentoContext } from "../../contexts/AgendamentoContext";

export const useRegisterAgendamento = () => {
  const {
    barbeiroId,
    clienteId,
    hora
  } = useAgendamentoContext();
  const { api } = useApi();

  async function save(values: any) {
    const result = await api.post(
      "/barber",
      values,
    );
    return result.data;
  }

  const objectToSave = useMemo(
    () => ({
      client: {
        id: clienteId
      },
      barber: {
        id: barbeiroId
      },
      hour: hora
    }),
    [
      clienteId,
      barbeiroId,
      hora
    ],
  );
  return useMutation({
    mutationFn: () => {
      return save(objectToSave)
    }})

};
