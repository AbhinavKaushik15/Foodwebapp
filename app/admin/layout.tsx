"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    toggleHandler();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutsideEvent(e: MouseEvent) {
      if (
        sidebarRef?.current &&
        !sidebarRef?.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideEvent);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideEvent);
    };
  }, []);

  return (
    <main className="relative flex">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <div
        ref={sidebarRef}
        className={`fixed flex md:hidden transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-[280px]"}`}
      >
        <Sidebar />
      </div>
      <section className="flex-1 min-h-screen bg-[#eff3f4]">
        <Header toggleHandler={toggleHandler} />
        <section className="flex-1 py-4 px-5">{children}</section>
      </section>
    </main>
  );
};

export default layout;
