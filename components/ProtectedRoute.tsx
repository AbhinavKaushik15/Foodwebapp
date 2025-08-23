"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firestore/firebase";

const ADMIN_EMAIL = "abhinavsharmaas20000@gmail.com";

interface AdminProtectedRouteProps {
  children: ReactNode;
}

export default function AdminProtectedRoute({
  children,
}: AdminProtectedRouteProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser || currentUser.email !== ADMIN_EMAIL) {
        router.push("/login");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return user ? <>{children}</> : null;
}
