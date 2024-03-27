import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APICLient from "../services/api-client";

const apiClient = new APICLient<Genre>('/genres')

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll
})

export default useGenres;