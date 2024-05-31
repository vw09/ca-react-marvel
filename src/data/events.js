import fetcher from "@/data/_fetcher";
import useSWR from "swr"
import {apiKey} from "@/secret"

export default function useEvents () {
    const { data, error, isLoading } = useSWR(`https://gateway.marvel.com:443/v1/public/events?apikey=${apiKey}`, fetcher)
   
    return {
      data,
      isLoading,
      isError: error
    }
  }