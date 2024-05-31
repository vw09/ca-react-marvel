// In a new file, e.g., useCharacter.js
import useSWR from "swr";
import fetcher from "./_fetcher";
import { apiKey } from "../secret";

export default function useCharacter(id) {
  const { data, error } = useSWR(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${apiKey}`, fetcher);

  return {
    character: data ? data.data.results[0] : undefined,
    isLoading: !error && !data,
    isError: error,
  };
}