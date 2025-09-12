"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useProduct } from "@/contexts/ProductContext";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string | number;
  title: string;
  price: number;
  imageURL: string;
  category: string;
}

// Category ka type
interface Category {
  title: string;
  imageURL: string;
  count: number;
}

const categoryImages: Record<string, string> = {
  Cake: "/image/food-menu-1.webp",
  Cupcake: "/image/food-menu-2.webp",
  Donut: "/image/food-menu-3.webp",
  Cookie: "/image/food-menu-4.webp",
  Macaron: "/image/food-menu-5.webp",
  Drinks: "/image/food-menu-6.webp",
};

const menu = () => {
  useEffect(() => {
    document.title = "Menu | Fofood";
  }, []);

  const { allProducts } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories: Category[] = useMemo(() => {
    const catMap: Record<string, Category> = {};

    allProducts.forEach((item: any) => {
      if (!catMap[item.category]) {
        catMap[item.category] = {
          title: item.category,
          imageURL: categoryImages[item.category],
          count: 1,
        };
      } else {
        catMap[item.category].count++;
      }
    });

    return Object.values(catMap);
  }, [allProducts]);

  // products filter
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[298px] lg:h-[71.6vh] bg-[#FFF4F5]">
        <div className="absolute top-[129px] lg:top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center lg:gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vw] lg:text-[4.5vh]">
            <Link
              href="/"
              className="mr-1 font-['fredoka'] font-[900] text-zinc-600 hover:text-[#DB6885] hover:underline"
            >
              Home
            </Link>
            <Link href="/menu" className="text-[#DB6885] ml-1 font-[900]">
              / Menu
            </Link>
          </div>
          <h1 className="font-['figtree'] text-[8.2vw] lg:text-[11.5vh] font-[900] text-black">
            Our Menu
          </h1>
        </div>
      </div>

      <div className="w-full min-h-[230vh] lg:min-h-[240vh] py-[13.8vh] flex flex-col lg:flex-row justify-normal lg:justify-between gap-[7.5vh] lg:gap-[14.5vh] lg:px-[18px] bg-green-300">
        {/* Sidebar - Categories */}
        <div className="relative w-full lg:w-[22.5vw] flex flex-col justify-normal lg:justify-between gap-5">
          <div>
            <h2 className="text-[2.5vh] pb-5 lg:text-[4vh] px-2 lg:px-0 -mt-14 lg:mt-0 text-zinc-600 font-['figtree'] font-[900] mb-[1.1vh]">
              Categories
            </h2>
            <div className="w-full lg:w-[22.5vw] flex-nowrap overflow-x-scroll lg:overflow-x-hidden scrollbar-hide flex flex-row lg:flex-col gap-5 px-2 lg:px-0">
              {/* All option */}
              <button
                onClick={() => setSelectedCategory("All")}
                className={`w-[24vh] lg:w-full h-[9.7vh] lg:h-fit rounded-2xl flex-shrink-0 py-[1.9vh] px-[2.1vh] flex items-center gap-4 justify-start text-sm font-semibold focus:not-data-focus:outline-none hover:bg-[#DB6885] hover:text-white border border-zinc-300 shadow-2xs 
           ${selectedCategory === "All" ? "bg-[#DB6885] text-white" : "text-black"}`}
              >
                <Image
                  className="w-[5.3vh] lg:w-[10vh]"
                  src="/image/menu.png"
                  alt="cate2"
                  width={62.5}
                  height={62.5}
                />
                <div className="flex-1 text-left">
                  <p className="text-[2.3vh] lg:text-[3.9vh]">All</p>
                  <p className="text-[2.2vh] lg:text-[3vh] font-['fredoka'] font-[900]">
                    {allProducts.length} Menu
                  </p>
                </div>
              </button>

              {/* Dynamic categories */}
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setSelectedCategory(cat.title)}
                  className={`w-[24vh] lg:w-full h-[9.7vh] lg:h-fit flex-shrink-0 rounded-2xl py-[1.9vh] px-[2.1vh] flex items-center gap-4 justify-start text-sm font-semibold focus:not-data-focus:outline-none hover:bg-[#DB6885] hover:text-white border border-zinc-300 shadow-2xs
            ${selectedCategory === cat.title ? "bg-[#DB6885] text-white" : "text-black"}`}
                >
                  <Image
                    className="w-[6vh] lg:w-[10vh]"
                    src={cat.imageURL}
                    alt={cat.title}
                    width={62.5}
                    height={62.5}
                  />
                  <div className="flex flex-col items-start">
                    <h1 className="text-[2.3vh] lg:text-[3.9vh]">
                      {cat.title}
                    </h1>
                    <h1 className="text-[2.2vh] lg:text-[3vh] font-['fredoka'] font-[900]">
                      {cat.count} Menu
                    </h1>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Get 50% off! */}
          <div className="hidden lg:flex relative w-[22.5vw] h-[75vh] mt-14 overflow-hidden">
            <img
              className="absolute w-full h-full object-cover rounded-4xl z-[1]"
              src="/image/footer.jpg"
              alt="bgImg"
            />
            <div className="w-full h-full flex flex-col items-start justify-center pl-6 gap-4 z-[2]">
              <h1 className="text-white font-['figtree'] font-[900] text-[3.5vh]">
                Limited Time Offer
              </h1>
              <h1 className="text-white font-['figtree'] font-[900] text-[9vh]">
                Get 50% Off!
              </h1>
              <h1 className="text-white font-['figtree'] text-[2.8vh]">
                enjoy a 50% discount on all our premium features
              </h1>
              <button className="py-6 px-14 bg-[#FFC107] rounded-full font-['figtree'] font-[600]">
                Get it now
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Products */}
        <div className="relative w-full lg:w-[67.4vw] min-h-[100vh]">
          <div className="w-full flex items-center justify-between px-2 lg:px-0">
            <h1 className="text-[2.6vh] lg:text-[4.3vh] text-zinc-600 lg:text-black font-['figtree'] font-[900]">
              {selectedCategory} Menu
            </h1>
            <h1 className="text-[2vh] lg:text-[3vh] font-['fredoka'] font-[700] text-[#DB6885]">
              {filteredProducts.length} Menu
            </h1>
          </div>

          <div className="w-full flex flex-wrap items-center justify-center mt-10 lg:mt-0 gap-x-[6vw] gap-y-[9vw] lg:gap-y-0">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative w-[160px] lg:w-[40vh] h-[215px] lg:h-[50vh] rounded-xl flex flex-col items-center"
              >
                <img
                  className="w-[200px] lg:w-[34vh] h-[155px] lg:h-[34vh] absolute lg:top-5"
                  src={product.imageURL as string}
                  alt={product.title as string}
                />

                <div className="group w-full h-36 flex items-center justify-center gap-8 mt-48 lg:mt-54">
                  <div className="flex flex-col items-center justify-center mb-40 lg:mb-8">
                    <Link
                      key={product.id}
                      href={`productpage/${product.id}`}
                      className="text-[17px] lg:text-[3.9vh] font-[900] text-center font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer text-black"
                    >
                      {product.title}
                    </Link>
                    <h2 className="font-['Fredoka'] text-sm lg:text-[3vh] text-[#DB6885] font-black">
                      ₹ {product.price}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get 50% off! (For Mobile) */}
        <div className="flex lg:hidden relative w-[91vw] mx-auto h-[50vh] overflow-hidden">
          <img
            className="absolute w-full h-full object-cover rounded-4xl z-[1]"
            src="/image/footer.jpg"
            alt="bgImg"
          />
          <div className="w-full h-full flex flex-col items-start justify-center px-7 gap-2 z-[2]">
            <h1 className="text-white font-['figtree'] font-[900] text-[2.62vh]">
              Limited Time Offer
            </h1>
            <h1 className="text-white font-['figtree'] font-[400] w-64 text-[6vh]">
              Get 50% Off!
            </h1>
            <h1 className="w-64 text-white font-['figtree'] text-[1.7vh] leading-[2]">
              enjoy a 50% discount on all our premium features
            </h1>
            <button className="py-4 px-10 bg-[#FFC107] rounded-full font-['figtree'] font-[600]">
              Get it now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
