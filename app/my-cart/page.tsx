"use client";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const mycart = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const handlePlus = () => {
    setCount((prev) => Math.min(6, prev + 1));
  };

  const handleInputChange = (e) => {
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
  useEffect(() => {
    document.title = "My Cart | Fofood";
  }, []);
  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[71.6vh]">
        <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vh]">
            <span className="text-[#707070]">Home</span>
            <span className="text-[#DB6885] ml-1">/ My Cart</span>
          </div>
          <h1 className="font-['figtree'] text-[11.5vh] font-[900]">My Cart</h1>
        </div>
      </div>

      {/* Products Table */}
      <div className="w-full mt-24 min-h-[50vh] overflow-x-auto px-[18px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl text-black font-['figtree']">
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-32 w-32">
                      <Image
                        src="/image/food-1.webp"
                        alt="cartPics"
                        width={70}
                        height={70}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-[900] text-2xl font-['figtree']">
                      Chococheese Cake
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="w-32 flex items-center justify-center">
                  <button
                    onClick={() => handleMinus()}
                    className="py-3 px-3 w-14 border-[0.5px] hover:bg-[#DB6885] hover:text-white border-zinc-200"
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
                    className={`py-3 px-3 w-14 border-[0.5px] text text-center hover:bg-[#DB6885] hover:text-white border-zinc-200 ${count === 6 ? "cursor-not-allowed hover:bg-zinc-400" : ""}`}
                  >
                    <Plus />
                  </button>
                </div>
              </td>
              <td className="font-['fredoka'] font-[900] text-[#DB6885] text-xl">
                $2.5
              </td>
              <td className="font-['fredoka'] font-[900] text-[#DB6885] text-xl">
                $2.5
              </td>
              <th>
                <button className="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl bg-[#DB6885] hover:bg-red-600">
                  <svg
                    viewBox="0 0 1.625 1.625"
                    className="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                    height="15"
                    width="15"
                  >
                    <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"></path>
                    <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"></path>
                    <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"></path>
                  </svg>
                  <svg
                    width="16"
                    fill="none"
                    viewBox="0 0 39 7"
                    className="origin-right duration-500 group-hover:rotate-90"
                  >
                    <line
                      stroke-width="4"
                      stroke="white"
                      y2="5"
                      x2="39"
                      y1="5"
                    ></line>
                    <line
                      stroke-width="3"
                      stroke="white"
                      y2="1.5"
                      x2="26.0357"
                      y1="1.5"
                      x1="12"
                    ></line>
                  </svg>
                  <svg width="16" fill="none" viewBox="0 0 33 39" className="">
                    <mask fill="white" id="path-1-inside-1_8_19">
                      <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                    </mask>
                    <path
                      mask="url(#path-1-inside-1_8_19)"
                      fill="white"
                      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    ></path>
                    <path
                      stroke-width="4"
                      stroke="white"
                      d="M12 6L12 29"
                    ></path>
                    <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                  </svg>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="w-full h-[0.6px] bg-[#dadada94] px-[18px]"></div>
      </div>

      {/* Coupon & Subtotal section */}
      <div className="w-full min-h-[69vh] px-[18px] flex justify-between">
        <div className="left w-[31vw] flex flex-col gap-3.5">
          <h1 className="font-['figtree'] font-[800] text-[23px]">Coupon</h1>
          <div className="flex items-center gap-3">
            <input
              className="px-[1.3vw] w-[34.4vh] text-lg tracking-tight py-[3vh] bg-[#FFF4F5] outline-[#DB6885] rounded-full text-black hover:text-black transition-all ease-linear duration-200"
              placeholder="Coupon code"
              type="text"
            />
            <button className="px-[2vw] w-[30vh] font-[700] font-['figtree'] text-[2.6vh] py-[3.3vh] shadow-[#DB6885] shadow-2xl bg-[#DB6885] hover:bg-[#FFC008] rounded-full text-white hover:text-black transition-all ease-linear duration-200">
              Apply Coupon
            </button>
          </div>
        </div>

        <div className="right w-[32vw] flex flex-col gap-12 mt-11">
          <div className="flex items-center justify-between">
            <h1 className="font-['figtree'] font-[900] text-[3.6vh]">
              Subtotal
            </h1>
            <h2 className="font-['fredoka'] font-[900] text-[#DB6885] text-[3.2vh]">
              $7.4
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="font-['figtree'] font-[900] text-[4.5vh]">Total</h1>
            <h2 className="font-['fredoka'] font-black text-[#DB6885] text-[4.3vh]">
              $7.4
            </h2>
          </div>
          <div className="w-full h-[0.4px] bg-zinc-300 -mt-4"></div>
          <button className="px-[2vw] font-[700] font-['figtree'] -mt-3 text-[2.6vh] py-[2.8vh] shadow-[#DB6885] shadow-2xl bg-[#DB6885] hover:bg-[#FFC008] rounded-full text-white hover:text-black transition-all ease-linear duration-200">
            Checkout
          </button>

          <Link
            href="/menu"
            className="flex items-center text-[#DB6885] text-[2.2vh] gap-2 -mt-6"
          >
            <ChevronLeft className="w-3 h-3" />
            <h1 className="hover:underline font-[900] font-['figtree']">
              Continue Shopping
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default mycart;
