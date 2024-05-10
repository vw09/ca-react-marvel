import fetcher from "./_fetcher"

export default function useNetwork () {
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)
   
    return {
      network: data,
      isLoading,
      isError: error
    }
  }