import axiosClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

function useRequestToken() {
  const searchParams = useSearchParams();
  const { data: token, isSuccess } = useQuery<{ request_token: string }>({
    queryKey: ["token", searchParams.get("request_token")],
    queryFn: () => axiosClient.get(`/authentication/token/new`),
    enabled: !searchParams.get("request_token"),
  });
  return { token, isSuccess };
}

export default useRequestToken;
