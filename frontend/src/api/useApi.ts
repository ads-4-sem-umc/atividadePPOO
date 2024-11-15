import axios from "axios";

export const useApi = () => {

  return {
    api: axios.create({
      baseURL: "http://localhost:8080",
    }),
  };
}