"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supaClient } from "../../../lib/client";

export  default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supaClient.auth.getSession();

      if (session) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    };

    checkSession();
  }, [router]);

  return <p>signing you in</p>
}
