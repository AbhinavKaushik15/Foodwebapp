"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  const hideFooterRoutes = ["/login", "/sign-up"];

  if (hideFooterRoutes.includes(pathname)) {
    return null;
  }

  return <Footer />;
}
