import { defaultClient } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export default function useLoginTMDB(onSucess?: () => void) {
  const {
    mutate: login,
    data,
    error,
  } = useMutation({
    mutationKey: ["login"],
    onSuccess: () => {
      if (onSucess) onSucess();
    },
    mutationFn: (requestToken: string) =>
      defaultClient.post("/api/auth/login/tmdb", {
        requestToken,
      }),
  });

  return { login, data, error };
}
