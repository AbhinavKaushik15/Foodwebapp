"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const QuantityButton = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const handlePlus = () => {
    setCount((prev) => Math.min(6, prev + 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);

    if (isNaN(value)) {
      setCount(0);
    } else if (value < 0) {
      setCount(0);
    } else if (value > 6) {
      setCount(6);
    } else {
      setCount(value);
    }
  };
  return (
    <div className="w-32 flex items-center justify-center">
      <button
        onClick={() => handleMinus()}
        className="py-[11.75px] px-3 w-14 border-[0.5px] hover:bg-[#DB6885] hover:text-white border-zinc-200"
      >
        <Minus />
      </button>
      <input
        value={count}
        onChange={handleInputChange}
        className="py-[1.5vh] px-3 w-20 border-[0.3px] text-xl font-['fredoka'] text-[#DB6885] font-[600] border-zinc-300 text-center outline-none"
        type="text"
      />
      <button
        onClick={() => handlePlus()}
        className={`py-[11.75px] px-3 w-14 border-[0.5px] text text-center hover:bg-[#DB6885] hover:text-white border-zinc-200 ${count === 6 ? "cursor-not-allowed hover:bg-zinc-400" : ""}`}
      >
        <Plus />
      </button>
    </div>
  );
};

export default QuantityButton;
