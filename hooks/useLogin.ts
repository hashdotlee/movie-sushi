import axiosClient from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export default function useLogin(onSucess?: () => void) {
  const {
    mutate: login,
    data,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["login"],
    onSuccess: () => {
      if (onSucess) onSucess();
    },
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      axiosClient.post("/api/auth/login", {
        email,
        password,
      }),
  });

  return { login, isPending, data, error };
}
