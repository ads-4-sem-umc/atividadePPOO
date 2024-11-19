import { useApi } from "@/api/useApi";
import { useQuery } from "@tanstack/react-query";

export const useFetchBarbeiros = () => {
  const { api } = useApi();

  const fetch = async () => {
    const data = await api.get(
      "/barber");
    return data.data;
  }

  return useQuery({queryKey: ["getBarbeiros"], queryFn: fetch});
};
