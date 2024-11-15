"use client"

import { useClienteContext } from "../../contexts/ClienteContext";
import { useApi } from "@/api/useApi";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";

export const useRegisterCliente = () => {
  const {
    nome,
    email,
    telefone,
  } = useClienteContext();
  const { api } = useApi();

  async function save(values: any) {
    const result = await api.post(
      "/client",
      values,
    );
    return result.data;
  }

  const objectToSave = useMemo(
    () => ({
      name: nome,
      email,
      phone: telefone,
    }),
    [
      nome,
      email,
      telefone,
    ],
  );
  return useMutation({
    mutationFn: () => {
      return save(objectToSave)
    }})

};
