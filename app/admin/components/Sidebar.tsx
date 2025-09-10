import LogoutButton from "@/app/components/LogoutButton";
import {
  LayoutDashboard,
  PackageOpen,
  ShoppingCart,
  Star,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface MenuListProps {
  name: string;
  link: string;
  icon: ReactNode;
}

export default function Sidebar() {
  const menuList: MenuListProps[] = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon: <PackageOpen className="w-5 h-5" />,
    },
    {
      name: "Order",
      link: "/admin/order",
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      name: "Users",
      link: "/admin/users",
      icon: <UserRound className="w-5 h-5" />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="w-5 h-5" />,
    },
  ];

  return (
    <section className="h-screen px-6 w-[280px] z-[10000] border-r bg-white border-zinc-300 overflow-hidden flex flex-col">
      <Link className="flex items-center justify-center" href="/">
        <Image
          className="w-[100px] py-4"
          src="/image/logo-color.webp"
          alt="logo"
          width={120}
          height={120}
        />
      </Link>
      <ul className="overflow-y-auto mb-25">
        {menuList?.map((item, index) => {
          return <Tab item={item} key={index} />;
        })}
      </ul>
      <LogoutButton />
    </section>
  );
}
function Tab({ item }: { item: MenuListProps }) {
  const pathname = usePathname();
  const isSelected = pathname === item?.link;

  return (
    <li
      className={`flex items-center z-[1000000] justify-center mx-auto gap-10 rounded-lg py-2 w-50 mt-3 ${
        isSelected
          ? "bg-[#DB6885] text-white"
          : "hover:bg-[#DB6885] hover:text-white"
      } text-black transition-all duration-300 ease-in-out text-xl`}
    >
      <Link
        className="flex items-center gap-2 py-1 w-50 pl-[18px]"
        href={item?.link}
      >
        {item?.icon}
        {item?.name}
      </Link>
    </li>
  );
}
