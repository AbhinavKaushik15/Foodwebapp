"use client";
import { useProduct } from "@/contexts/ProductContext";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const PopularMenuCards = () => {
  const { allProducts } = useProduct();

  return (
    <>
      <div className="relative w-full min-h-[135vh] md:min-h-[254vh] mt-34 md:mt-[11.2vh] flex flex-col items-center">
        <div>
          <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-xl md:text-3xl text-center">
            Popular Menu
          </h3>
          <h1 className="font-['figtree'] text-[25px] md:text-[8.7vh] text-center font-[900] mt-4">
            Most Popular Food
          </h1>
        </div>

        {/* Popular Food List */}
        <div className="relative w-full gap-10 flex flex-nowrap items-center justify-center mt-[7.5vh]">
          <div className="w-full flex flex-wrap items-center justify-center gap-x-[6vw] gap-y-[9vw] md:gap-[4vh] px-2">
            {allProducts.map((item, id) => {
              const { title, price, imageURL } = item;
              return (
                <div
                  key={id}
                  className="relative w-[160px] md:w-[48vh] h-[215px] md:h-[56vh] rounded-xl flex flex-col items-center flex-wrap"
                >
                  <img
                    className="w-[200px] md:w-[34vh] h-[155px] md:h-[34vh] absolute md:top-5"
                    src={imageURL as string}
                    alt=""
                  />
                  <div className="group w-full h-36 flex items-center justify-center gap-8 mt-48 md:mt-54">
                    <div className="flex flex-col items-center justify-center mb-40 md:mb-8">
                      <Link
                        key={item.id}
                        href={`/productpage/${item.id}`}
                        className="text-[17px] md:text-[3.9vh] font-[900] text-center font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer"
                      >
                        {title}
                      </Link>
                      <h2 className="font-['Fredoka'] text-sm md:text-[3vh] text-[#DB6885] font-black">
                        ₹ {price}
                      </h2>
                    </div>

                    <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute -bottom-9 md:bottom-0">
                      <div className="flex gap-2 hover:transition-all hover:ease-linear hover:duration-600">
                        <button className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                          <Heart />
                        </button>
                        <button className="px-5 md:px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200 whitespace-nowrap">
                          <h1 className="hidden sm:flex">Add to Cart</h1>
                          <ShoppingCart className="flex sm:hidden text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Button */}
        <Link
          href="/menu"
          className="w-fit px-[40.2px] md:px-[6.8vh] font-['figtree'] font-[900] text-[#DB6885] text-[15px] md:text-[2.55vh] border border-[#DB6885] py-[18px] md:py-[2.88vh] rounded-full mt-20 md:mt-20 whitespace-nowrap"
        >
          See All Menu
        </Link>
      </div>
    </>
  );
};

export default PopularMenuCards;
// absolute left-1/2 -translate-x-1/2 bottom-[4.5vh] md:bottom-[162px]
