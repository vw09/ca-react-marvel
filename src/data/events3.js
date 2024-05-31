import fetcher from "./_fetcher"
import useSWR from "swr"
import {apiKey} from "../secret";


export default function useCharacters() {
  const { data, error } = useSWR(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`, fetcher);

  return {
    characters: data ? data.data.results : [],
    isLoading: !error && !data,
    isError: error,
  };
}
