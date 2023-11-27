"use client";

import axiosClient from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export default function useSignup(onSucess?: () => void) {
  const {
    mutate: signup,
    data,
    isPending,
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
      axiosClient.post("/api/auth/signup", {
        email,
        password,
        username,
      }),
  });
  return { signup, isPending, data, error };
}
