import { Menu } from "lucide-react";
import React from "react";

interface togglePorps {
  toggleHandler: () => void;
}

const Header = ({ toggleHandler }: togglePorps) => {
  return (
    <section className="w-full flex items-center gap-4 md:gap-2 border-b border-zinc-300 py-5 md:py-4 px-4 bg-white">
      <button onClick={toggleHandler} className="flex md:hidden">
        <Menu className="w-6.5 md:w-5 h-6.5 md:h-5" />
      </button>
      <h1 className="font-[700] text-2xl md:text-xl">Dashboard</h1>
    </section>
  );
};

export default Header;
