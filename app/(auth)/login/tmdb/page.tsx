"use client";

import useLoginTMDB from "@/api/useLoginTMDB";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function LoginWithTMDB() {
  const searchParams = useSearchParams();
  const requestToken = searchParams.get("request_token") as string;
  const router = useRouter();
  const { login } = useLoginTMDB(() => {
    router.push("/");
  });
  useEffect(() => {
    if (requestToken) {
      login(requestToken);
    }
  }, [requestToken]);
}
