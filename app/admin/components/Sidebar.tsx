import { auth } from "@/lib/firestore/firebase";
import { signOut } from "firebase/auth";
import {
  Layers2,
  LayoutDashboard,
  PackageOpen,
  ShieldCheck,
  ShoppingCart,
  Star,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import toast from "react-hot-toast";

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
      name: "Categories",
      link: "/admin/categories",
      icon: <Layers2 className="w-5 h-5" />,
    },
    {
      name: "Order",
      link: "/admin/order",
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon: <UserRound className="w-5 h-5" />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="w-5 h-5" />,
    },
    {
      name: "Admins",
      link: "/admin/admins",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <section className="h-screen px-6 w-[280px] border-r bg-white border-zinc-300 overflow-hidden flex flex-col">
      <Link className="flex items-center justify-center" href="/">
        <Image
          className="w-[100px] py-4"
          src="/image/logo-color.webp"
          alt="logo"
          width={120}
          height={120}
        />
      </Link>
      <ul className="overflow-y-auto">
        {menuList?.map((item, index) => {
          return <Tab item={item} key={index} />;
        })}
      </ul>
      <button
        onClick={async () => {
          try {
            await toast.promise(signOut(auth), {
              error: (e) => e?.message,
              loading: "Loading...",
              success: "Successfully Logged out!",
            });
          } catch (error) {
            toast.error(error?.message);
          }
        }}
        className="group flex items-center justify-center mx-auto w-11 h-11 mt-14 bg-[#DB6885] rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
      >
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>
        <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Logout
        </div>
      </button>
    </section>
  );
}
function Tab({ item }: { item: MenuListProps }) {
  const pathname = usePathname();
  const isSelected = pathname === item?.link;

  return (
    <li
      className={`flex items-center justify-center mx-auto gap-10 rounded-lg py-2 w-50 mt-3 ${
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
