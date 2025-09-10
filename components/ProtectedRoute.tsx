"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  // adminOnly?: boolean;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth(); // user => Firebase User | null
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/login");
      } else if (user.email === "abhinav@gmail.com") {
        router.push("/admin");
      } else if (user) {
        router.push("/profile");
      }
    }
  }, [user, isLoading, router]);

  if (isLoading) return <p>Loading...</p>;

  return <>{children}</>;
}
