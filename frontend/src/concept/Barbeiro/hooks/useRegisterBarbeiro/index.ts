"use client"

import { useApi } from "@/api/useApi";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { useBarbeiroContext } from "../../contexts/BarbeiroContext";

export const useRegisterBarbeiro = () => {
  const {
    nome,
    email,
    telefone,
    barbeariaId,
  } = useBarbeiroContext();
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
      name: nome,
      email,
      phone: telefone,
      barbershop: {
        id: barbeariaId
      }
    }),
    [
      nome,
      email,
      telefone,
      barbeariaId
    ],
  );
  return useMutation({
    mutationFn: () => {
      return save(objectToSave)
    }})

};
