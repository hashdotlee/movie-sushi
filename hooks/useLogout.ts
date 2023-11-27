import { defaultClient } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useLogout() {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      await defaultClient.post("/api/auth/logout");
    };
    logout()
      .then(() => {
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
}

export default useLogout;
