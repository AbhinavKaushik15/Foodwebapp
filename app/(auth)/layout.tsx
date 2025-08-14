"use client";

import { AuthProvider } from "@/contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
