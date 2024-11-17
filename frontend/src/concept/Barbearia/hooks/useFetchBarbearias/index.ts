import { useApi } from "@/api/useApi";
import { useQuery } from "@tanstack/react-query";

export const useFetchBarbearias = () => {
  const { api } = useApi();

  const fetch = async () => {
    const data = await api.get(
      "/barbershop");
    return data.data;
  }

  return useQuery({queryKey: ["getBarbearias"], queryFn: fetch});
};
