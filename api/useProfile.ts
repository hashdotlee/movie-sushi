import { defaultClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

function useProfile() {
  const { data: account } = useQuery<{ username: string }>({
    queryKey: ["account"],
    queryFn: () => defaultClient.get("/api/user"),
  });

  return account;
}

export default useProfile;
