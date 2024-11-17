import { useApi } from "@/api/useApi";
import { useQuery } from "@tanstack/react-query";

export const useFetchClient = () => {
  const { api } = useApi();

  const fetch = async () => {
    const data = await api.get(
      "/client");
    return data.data;
  }

  return useQuery({queryKey: ["getClients"], queryFn: fetch});
};
