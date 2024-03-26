import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";


interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
                .then(res => res.data),
  //initialData: {count: platforms.length, results: platforms}
})

export default usePlatforms;
