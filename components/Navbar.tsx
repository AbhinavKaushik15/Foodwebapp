"use client";
import { ChevronDown, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ContactButton from "./ContactButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
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
      className={`fixed top-0 w-full h-[16vh] px-[18px] ${
        isScrolled ? "bg-[#FFF4F5]" : "bg-transparent"
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
          <Link className="font-[500] tracking-wide text-zinc-800" href="/">
            Home
          </Link>
          <Link className="font-[500] tracking-wide text-zinc-800" href="/">
            About
          </Link>
          <Link className="font-[500] tracking-wide text-zinc-800" href="/">
            Menu
          </Link>
          <Link className="font-[500] tracking-wide text-zinc-800" href="/">
            Blog
          </Link>
          <Link className="flex items-center gap-1" href="/">
            Pages <ChevronDown className="w-4 h-4" />
          </Link>
        </div>
        <Link
          className="flex items-center gap-2 font-[500] tracking-wide text-zinc-800"
          href="/"
        >
          <Heart className="w-[3.2vh] h-[3.2vh] text-zinc-800" /> My Favorites
        </Link>
        <div className="w-[0.5px] h-6 bg-[#dadada]"></div>
        <Link
          className="flex items-center gap-2 font-[500] tracking-wide text-zinc-800"
          href="/"
        >
          <ShoppingCart className="text-zinc-800" />
          My Cart
        </Link>
        <Link href="/">
          <ContactButton />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
