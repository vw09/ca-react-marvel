import fetcher from "./_fetcher"
import useSWR from "swr"
import {apiKey} from "../secret"

export default function useCharacter () {
    const { data, error, isLoading } = useSWR(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`, fetcher)
   
    return {
      data,
      isLoading,
      isError: error
    }
  }