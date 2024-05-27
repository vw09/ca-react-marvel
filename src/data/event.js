import fetcher from "./_fetcher"
import useSWR from "swr"
import {apiKey} from "../secret"

export default function useEvent (id) {
    const { data, error, isLoading } = useSWR(`https://gateway.marvel.com:443/v1/public/events/${id}?apikey=${apiKey}`, fetcher)
   
    return {
      data,
      isLoading,
      isError: error
    }
  }

