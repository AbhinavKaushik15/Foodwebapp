"use client";
import { ChevronDown, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const tabs = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "menu", path: "/menu" },
    { label: "blog", path: "/blog" },
  ];

  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-[16vh] px-[18px] transition-all ease-linear duration-200 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } flex items-center justify-between z-[5]`}
    >
      <Link href="/">
        <Image
          className="w-[5.9vw]"
          src="/image/logo-color.webp"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>

      <div className="flex items-center gap-[62px]">
        <div className="flex items-center gap-[71.5px]">
          {tabs.map(({ label, path }) => (
            <Link
              key={label}
              href={path}
              className={`capitalize font-[500] ${
                pathname === path
                  ? "text-[#DB6885]"
                  : "text-zinc-800 hover:text-[#DB6885]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link
          className={`flex items-center gap-2 font-[500] tracking-wide ${
            pathname === "/my-favorites"
              ? "text-[#DB6885]"
              : "text-zinc-800 hover:text-[#DB6885]"
          }`}
          href="/my-favorites"
        >
          <Heart className="w-[3.2vh] h-[3.2vh]" />
          My Favorites
        </Link>
        <div className="w-[0.5px] h-6 bg-[#dadada]"></div>
        <Link
          className={`flex items-center gap-2 font-[500] tracking-wide ${pathname === "/my-cart" ? "text-[#DB6885]" : "text-zinc-800 hover:text-[#DB6885]"}`}
          href="/my-cart"
        >
          <ShoppingCart className="font-[100] w-5 h-5" />
          My Cart
        </Link>
        <Link
          className={`px-[27px] py-[7px] rounded-full text-[1.2vw] tight-wide transition-all duration-200 ease-linear ${pathname === "/contact" ? "border border-[#DB6885] text-white bg-[#DB6885]" : "border hover:border-[#DB6885] hover:bg-[#DB6885] hover:text-white"}`}
          href="/contact"
        >
          <div>Contact us</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
