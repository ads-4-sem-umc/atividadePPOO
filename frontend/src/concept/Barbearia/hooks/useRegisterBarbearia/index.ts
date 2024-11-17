"use client"

import { useApi } from "@/api/useApi";
import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { useBarbeariaContext } from "../../contexts/BarbeariaContext";

export const useRegisterBarbearia = () => {
  const {
    nome,
    email,
    telefone,
    endereco,
    cidade,
    estado
  } = useBarbeariaContext();
  const { api } = useApi();

  async function save(values: any) {
    const result = await api.post(
      "/barbershop",
      values,
    );
    return result.data;
  }

  const objectToSave = useMemo(
    () => ({
      name: nome,
      email,
      phone: telefone,
      address: endereco,
      city: cidade,
      state: estado,
    }),
    [
      nome,
      email,
      telefone,
      endereco,
      cidade, 
      estado
    ],
  );
  return useMutation({
    mutationFn: () => {
      return save(objectToSave)
    }})

};
