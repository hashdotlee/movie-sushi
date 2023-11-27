"use client";

import { defaultClient } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export default function useSignup(onSucess?: () => void) {
  const {
    mutate: signup,
    data,
    error,
  } = useMutation({
    mutationKey: ["signup"],
    onSuccess: () => {
      if (onSucess) onSucess();
    },
    mutationFn: ({
      email,
      password,
      username,
    }: {
      email: string;
      password: string;
      username: string;
    }) =>
      defaultClient.post("/api/auth/signup", {
        email,
        password,
        username,
      }),
  });
  return { signup, data, error };
}
