"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LayoutWrapper({ children, authRequired = true }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users if authRequired
  useEffect(() => {
    if (authRequired && status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, authRequired, router]);

  // Show loader while session is loading
  if (status === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-16 h-16 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return <>{children}</>;
}
