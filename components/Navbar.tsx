"use client";
import { CircleUser, Heart, ShieldUser, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const pathname = usePathname();

  const isAdmin = user && user.email === "abhinavsharmaas20000@gmail.com";

  const tabs = [
    { label: "home", path: "/" },
    { label: "about", path: "/about" },
    { label: "menu", path: "/menu" },
    { label: "blog", path: "/blog" },
  ];

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
    <div className="relative">
      {/* Mobile Hidden Menubar */}
      <div
        className={`flex lg:hidden fixed -top-[71.9vh] min-h-[428px] w-full px-3 bg-gradient-to-b from-white z-[15] to-white/80 ${isOpen ? "top-0 transition-all duration-200 ease-out" : "-top-[71.9vh] transition-all duration-300 ease-in"}`}
      >
        <div className="w-full h-full flex flex-col items-start font-['fredoka'] text-sm gap-5 mt-[110px] font-[700] px-5">
          {tabs.map(({ label, path }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={label}
              href={path}
              className={`capitalize ${
                pathname === path
                  ? "text-[#DB6885]"
                  : "text-zinc-800 hover:text-[#DB6885]"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Admin link (only for admin) */}
          {isAdmin && (
            <Link
              onClick={() => setIsOpen(false)}
              href="/admin"
              className={`text-[17px] font-['figtree'] font-[600] ${isOpen ? "top-0 transition-all duration-200 ease-out" : "-top-[71.9vh] transition-all duration-300 ease-in"} tracking-tight flex items-center gap-1 ${
                pathname === "/admin"
                  ? "text-[#DB6885]"
                  : "text-zinc-800 hover:text-[#DB6885]"
              }`}
            >
              <ShieldUser className="w-6 h-6" />
              Admin
            </Link>
          )}

          {/* Profile link (for logged-in non-admin users) */}
          {user && !isAdmin && (
            <Link
              onClick={() => setIsOpen(false)}
              href="/profile"
              className={`text-[17px] font-['figtree'] font-[600] tracking-tight ${isOpen ? "top-0 transition-all duration-200 ease-out" : "-top-[71.9vh] transition-all duration-300 ease-in"} flex items-center gap-1 ${
                pathname === "/profile"
                  ? "text-[#DB6885]"
                  : "text-zinc-800 hover:text-[#DB6885]"
              }`}
            >
              <CircleUser className="w-6 h-6" />
              Profile
            </Link>
          )}

          {/* Login link (for not logged-in users) */}
          {!user && (
            <Link
              onClick={() => setIsOpen(false)}
              href="/login"
              className={`text-[17px] font-['figtree'] font-[600] ${isOpen ? "top-0 transition-all duration-200 ease-out" : "-top-[71.9vh] transition-all duration-300 ease-in"} tracking-tight flex items-center gap-1 ${
                pathname === "/login"
                  ? "text-[#DB6885]"
                  : "text-zinc-800 hover:text-[#DB6885]"
              }`}
            >
              <CircleUser className="w-6 h-6" />
              Login
            </Link>
          )}

          <Link
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-2 tracking-wide ${
              pathname === "/my-favorites"
                ? "text-[#DB6885]"
                : "text-zinc-800 hover:text-[#DB6885]"
            }`}
            href="/my-favorites"
          >
            <Heart className="w-[2.5vh] h-[2.5vh]" />
            My Favorites
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            className={`w-full text-center py-[7.2px] rounded-full text-[17px] font-['figtree'] font-[600] tracking-tight transition-all duration-200 ease-linear ${pathname === "/contact" ? "border border-[#DB6885] text-white bg-[#DB6885]" : "border hover:border-[#DB6885] hover:bg-[#DB6885] hover:text-white"}`}
            href="/contact"
          >
            <div>Contact us</div>
          </Link>
        </div>
      </div>
      <nav
        className={`fixed -top-6 sm:top-0 w-full h-[16vh] px-6 lg:px-[18px] transition-all ease-linear duration-200 ${
          isScrolled ? "bg-[#ffffffdc] lg:bg-white" : "bg-transparent"
        } flex items-center justify-between z-[15]`}
      >
        <Link onClick={() => setIsOpen(false)} href="/">
          <Image
            className="w-[80px] sm:w-[85px]"
            src="/image/logo-color.webp"
            alt="logo"
            width={120}
            height={120}
          />
        </Link>

        {/* Tablet & Desktop */}
        <div className="hidden sm:flex items-center lg:gap-[4.6vw] xl:gap-[5.9vw]">
          <div className="hidden lg:flex items-center lg:gap-[4.4vw] xl:gap-[5.75vw] font-['fredoka'] font-[700]">
            {tabs.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className={`capitalize ${
                  pathname === path
                    ? "text-[#DB6885]"
                    : "text-zinc-800 hover:text-[#DB6885]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center lg:gap-[3.2vw] xl:gap-[4.23vw] font-['fredoka'] font-[700]">
            <Link
              className={`flex items-center gap-2 tracking-wide ${
                pathname === "/my-favorites"
                  ? "text-[#DB6885]"
                  : "text-zinc-800 hover:text-[#DB6885]"
              }`}
              href="/my-favorites"
            >
              <Heart className="w-[3.2vh] h-[3.2vh]" />
              My Favorites
            </Link>
            <div className="w-[0.5px] h-5 bg-zinc-400 mx-1"></div>
            <Link
              className={`flex items-center gap-2 tracking-wide ${pathname === "/my-cart" ? "text-[#DB6885]" : "text-zinc-800 hover:text-[#DB6885]"}`}
              href="/my-cart"
            >
              <ShoppingCart className="font-[100] w-5 h-5" />
              My Cart
            </Link>

            {/* Admin link (only for admin) */}
            {isAdmin && (
              <Link
                href="/admin"
                className={`text-[17px] font-['figtree'] font-[600] tracking-tight flex items-center gap-1 ${
                  pathname === "/admin"
                    ? "text-[#DB6885]"
                    : "text-zinc-800 hover:text-[#DB6885]"
                }`}
              >
                <ShieldUser className="w-6 h-6" />
                Admin
              </Link>
            )}

            {/* Profile link (for logged-in non-admin users) */}
            {user && !isAdmin && (
              <Link
                href="/profile"
                className={`text-[17px] font-['figtree'] font-[600] tracking-tight flex items-center gap-1 ${
                  pathname === "/profile"
                    ? "text-[#DB6885]"
                    : "text-zinc-800 hover:text-[#DB6885]"
                }`}
              >
                <CircleUser className="w-6 h-6" />
                Profile
              </Link>
            )}

            {/* Login link (for not logged-in users) */}
            {!user && (
              <Link
                href="/login"
                className={`text-[17px] font-['figtree'] font-[600] tracking-tight flex items-center gap-1 ${
                  pathname === "/login"
                    ? "text-[#DB6885]"
                    : "text-zinc-800 hover:text-[#DB6885]"
                }`}
              >
                <CircleUser className="w-6 h-6" />
                Login
              </Link>
            )}

            <Link
              className={`px-[27.3px] py-[7.2px] rounded-full text-[17px] font-['figtree'] font-[600] tracking-tight transition-all duration-200 ease-linear ${pathname === "/contact" ? "border border-[#DB6885] text-white bg-[#DB6885]" : "border hover:border-[#DB6885] hover:bg-[#DB6885] hover:text-white"}`}
              href="/contact"
            >
              <div>Contact us</div>
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <Link onClick={() => setIsOpen(false)} href="/my-cart">
            <ShoppingCart className="font-[100] w-6.5 h-6.5" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[47px] h-[50px] flex items-center justify-center cursor-pointer"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute h-[2.5px] w-full bg-black rounded transition-all duration-300 ease-in-out
            ${isOpen ? "rotate-45 top-2" : "top-0"}
          `}
              ></span>
              <span
                className={`absolute h-[2.3px] w-full bg-black rounded transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0" : "top-2"}
          `}
              ></span>
              <span
                className={`absolute h-[2.3px] w-full bg-black rounded transition-all duration-300 ease-in-out
            ${isOpen ? "-rotate-45 top-2" : "top-4"}
          `}
              ></span>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
