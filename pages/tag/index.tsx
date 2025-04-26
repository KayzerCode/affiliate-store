import { useEffect } from "react";
import { useRouter } from "next/router";

export default function TagRootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
