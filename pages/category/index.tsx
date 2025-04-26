import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CategoryRootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
