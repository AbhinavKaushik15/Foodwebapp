"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const myfavorites = () => {
  useEffect(() => {
    document.title = "My Favorites | Fofood";
  }, []);
  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[298px] md:h-[71.6vh] bg-[#FFF4F5]">
        <div className="absolute top-[129px] md:top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center md:gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vw] md:text-[4.5vh]">
            <Link href="/" className="mr-1 font-['fredoka'] font-[900] text-zinc-600 hover:text-[#DB6885] hover:underline">Home</Link>
            <Link href="/my-favorites" className="text-[#DB6885] ml-1 font-[900]">/ My Favorites</Link>
          </div>
          <h1 className="font-['figtree'] text-[8.2vw] md:text-[11.5vh] font-[900]">
            My Favorites
          </h1>
        </div>
      </div>

      {/* After Added Favorite Hidden */}
      <div className="w-full h-[215vw] md:h-[150vh] flex flex-col items-center">
        <div className="w-full md:w-[60vw] md:h-[60vh] flex items-center justify-center flex-wrap gap-y-8 sm:gap-y-0 gap-x-10 md:gap-x-[3vh] mt-8 md:mt-[13vh]">
          <div className="w-[20vw] md:w-[35vh] h-[18vw] md:h-[25vh] flex flex-col items-center justify-center">
            <Image
              className="w-[23vh] h-[23vh]"
              src="/image/food-menu-1.webp"
              alt="menu1"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[20vw] md:w-[35vh] h-[18vw] md:h-[25vh] flex flex-col items-center justify-center">
            <Image
              className="w-[23vh] h-[23vh]"
              src="/image/food-menu-2.webp"
              alt="menu2"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[20vw] md:w-[35vh] h-[18vw] md:h-[25vh] flex flex-col items-center justify-center">
            <Image
              className="w-[23vh] h-[23vh]"
              src="/image/food-menu-3.webp"
              alt="menu3"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[20vw] md:w-[35vh] h-[18vw] md:h-[25vh] flex flex-col items-center justify-center">
            <Image
              className="w-[23vh] h-[23vh]"
              src="/image/food-menu-4.webp"
              alt="menu4"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[20vw] md:w-[35vh] h-[18vw] md:h-[25vh] flex flex-col items-center justify-center">
            <Image
              className="w-[23vh] h-[23vh]"
              src="/image/food-menu-5.webp"
              alt="menu5"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[20vw] md:w-[35vh] h-[18vw] md:h-[25vh] flex flex-col items-center justify-center">
            <Image
              className="w-[23vh] h-[23vh]"
              src="/image/food-menu-6.webp"
              alt="menu6"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* texts */}
        <div className="w-[67vw] flex flex-col justify-center mt-9 sm:mt-0 items-center">
          <h1 className="font-['figtree'] font-[900] text-center text-[6vw] md:text-[6.5vh] mt-3">
            Your Sweet Indulgences Await!
          </h1>
          <p className="text-zinc-600 text-[3.5vw] sm:text-[2.6vh] leading-[2.1] mt-6 text-center">
            Welcome to your favorites page! Here, you can keep track of all your
            beloved desserts from our delectable selection. Whether you have a
            soft spot for chocolatey treats, crave creamy delights, or savor
            fruity delicacies, this is the place to save and organize your
            favorites. Simply click the heart icon next to the desserts you
            love, and they‘ll be stored here for quick access whenever your
            sweet tooth strikes.
          </p>
          <button className="py-5 px-11.5 font-['figtree'] font-[700] mt-6 text-[3vw] sm:text-md rounded-full hover:bg-[#DB6885] transition-all duration-200 ease-linear text-[#DB6885] hover:text-white border border-[#DB6885]">
            Explore Irresistible Desserts
          </button>
        </div>
      </div>
    </div>
  );
};

export default myfavorites;
