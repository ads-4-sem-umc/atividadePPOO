import { useApi } from "@/api/useApi";
import { useQuery } from "@tanstack/react-query";

export const useFetchAgendamentos = () => {
  const { api } = useApi();

  const fetch = async () => {
    const data = await api.get(
      "/schedule");
    return data.data;
  }

  return useQuery({queryKey: ["getAgendamentos"], queryFn: fetch});
};
