"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  const hideFooterRoutes = [
    "/login",
    "/sign-up",
    "/admin",
    "/admin/products",
    "/admin/categories",
    "/admin/order",
    "/admin/customers",
    "/admin/reviews",
    "/admin/collections",
    "/admin/admins",
    "/admin/products/create-form",
    "/admin/products/update-product",
  ];

  if (hideFooterRoutes.includes(pathname)) {
    return null;
  }

  return <Footer />;
}
