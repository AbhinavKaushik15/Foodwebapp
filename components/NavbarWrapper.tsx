"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  const hideNavbarRoutes = [
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

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}
