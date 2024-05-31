// data/events3.js

import useSWR from "swr";
import fetcher from "./_fetcher";

const apiKey = "a437d6abb4a57dbbf98e7794596a8677";

export default function useCharacters() {
  const { data, error } = useSWR(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`, fetcher);

  return {
    characters: data ? data.data.results : [],
    isLoading: !error && !data,
    isError: error,
  };
}
