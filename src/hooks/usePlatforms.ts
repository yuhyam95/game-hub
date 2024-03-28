import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";

const apiClient = new APICLient<Platform>('/platforms/lists/parents')
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll
  //initialData: {count: platforms.length, results: platforms}
})

export default usePlatforms;
