import useSWR from "swr";
import fetcher from "@/data/_fetcher";
import { apiKey } from "@/secret";

export default function useCharacters() {
  const { data, error } = useSWR(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`, fetcher);

  return {
    Characters: data && data.data ? data.data.results : undefined,
    isLoading: !error && !data,
    isError: error,
  };
}