import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c531601f0484982b5940b6626696580",
  },
});

class APICLient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data)
  }
}

export default APICLient