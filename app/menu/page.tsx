"use client";
import React, { useEffect } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

const menu = () => {
  useEffect(() => {
    document.title = "Menu | Fofood";
  }, []);

  const categories = [
    {
      uid: "1",
      category: [
        { imageURL: "/image/menu.png", title: "All", menuCount: "8 Menu" },
      ],
      menuCards: [
        {
          id: 1,
          imageURL: "/image/food-1.webp",
          title: "Chococheese Cake",
          price: "$2.5",
        },
        {
          id: 2,
          imageURL: "/image/food-2.webp",
          title: "Pink Donuts",
          price: "$2.8",
        },
        {
          id: 3,
          imageURL: "/image/food-3.webp",
          title: "Choco Cake",
          price: "$2.9",
        },
        {
          id: 4,
          imageURL: "/image/food-4.webp",
          title: "Sweet Cake",
          price: "$2.3",
        },
        {
          id: 5,
          imageURL: "/image/food-5.webp",
          title: "Pink Cake",
          price: "$2.1",
        },
        {
          id: 6,
          imageURL: "/image/food-6.webp",
          title: "Choco Cookies",
          price: "$2.8",
        },
        {
          id: 7,
          imageURL: "/image/food-7.webp",
          title: "Sweet Donuts",
          price: "$1.8",
        },
        {
          id: 8,
          imageURL: "/image/food-8.webp",
          title: "Sweet Choco",
          price: "$3.6",
        },
      ],
      option: [{ title: "All Menu", counts: "8 Menu" }],
    },
    {
      uid: "2",
      category: [
        {
          imageURL: "/image/food-menu-1.webp",
          title: "Cakes",
          menuCount: "3 Menu",
        },
      ],
      menuCards: [
        {
          id: 1,
          imageURL: "/image/food-1.webp",
          title: "Chococheese Cake",
          price: "$2.5",
        },
        {
          id: 2,
          imageURL: "/image/food-3.webp",
          title: "Choco Cake",
          price: "$2.9",
        },
        {
          id: 3,
          imageURL: "/image/food-4.webp",
          title: "Sweet Cake",
          price: "$2.3",
        },
      ],
      option: [{ title: "Cakes Menu", counts: "3 Menu" }],
    },
    {
      uid: "3",
      category: [
        {
          imageURL: "/image/food-menu-2.webp",
          title: "Cupcakes",
          menuCount: "3 Menu",
        },
      ],
      menuCards: [
        {
          id: 1,
          imageURL: "/image/food-4.webp",
          title: "Sweet Cake",
          price: "$2.3",
        },
        {
          id: 2,
          imageURL: "/image/food-5.webp",
          title: "Pink Cake",
          price: "$2.1",
        },
        {
          id: 3,
          imageURL: "/image/food-8.webp",
          title: "Sweet Choco",
          price: "$3.6",
        },
      ],
      option: [{ title: "Cupcakes Menu", counts: "3 Menu" }],
    },
    {
      uid: "4",
      category: [
        {
          imageURL: "/image/food-menu-3.webp",
          title: "Cookies",
          menuCount: "1 Menu",
        },
      ],
      menuCards: [
        {
          id: 1,
          imageURL: "/image/food-6.webp",
          title: "Choco Cookies",
          price: "$2.8",
        },
      ],
      option: [{ title: "Cookies Menu", counts: "1 Menu" }],
    },
    {
      uid: "5",
      category: [
        {
          imageURL: "/image/food-menu-4.webp",
          title: "Macarons",
          menuCount: "0 Menu",
        },
      ],
      menuCards: [],
      option: [{ title: "Macarons Menu", counts: "0 Menu" }],
    },
    {
      uid: "6",
      category: [
        {
          imageURL: "/image/food-menu-5.webp",
          title: "Drinks",
          menuCount: "0 Menu",
        },
      ],
      menuCards: [],
      option: [{ title: "Drinks Menu", counts: "0 Menu" }],
    },
  ];
  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[71.6vh] bg-[#FFF4F5]">
        <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vh]">
            <span className="text-[#707070]">Home</span>
            <span className="text-[#DB6885] ml-1">/ Menu</span>
          </div>
          <h1 className="font-['figtree'] text-[11.5vh] font-[900]">
            Our Menu
          </h1>
        </div>
      </div>

      {/* Menu */}
      <TabGroup className="w-full min-h-[210vh] mt-[13.8vh] flex justify-between gap-[14.5vh] px-[18px]">
        <TabList className="w-[22.5vw] flex flex-col gap-5">
          <h1 className="text-[4vh] text-zinc-600 font-['figtree'] font-[900] mb-[1.1vh]">
            Categories
          </h1>
          {categories.map(({ category, uid }) => (
            <div key={uid}>
              {category.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    className="w-full rounded-2xl py-[1.9vh] px-[2.1vh] flex items-center gap-4 justify-start text-sm font-semibold focus:not-data-focus:outline-none hover:bg-[#DB6885] data-selected:bg-[#DB6885] data-selected:text-white hover:text-white border border-zinc-300 shadow-2xs"
                  >
                    <Image
                      src={item.imageURL}
                      alt="cate2"
                      width={62.5}
                      height={62.5}
                    />
                    <div className="flex flex-col items-start">
                      <h1 className="text-[3.9vh]">{item.title}</h1>
                      <h1 className="text-[3vh] font-['fredoka' font-[700]">
                        {item.menuCount}
                      </h1>
                    </div>
                  </Tab>
                );
              })}
            </div>
          ))}

          {/* Get 50% off! */}
          <div className="relative w-[22.5vw] h-[75vh] mt-14 overflow-hidden">
            <Image
              className="absolute w-full h-full object-top rounded-4xl z-[-1]"
              src="/image/footer.jpg"
              alt="bgImg"
              height={400}
              width={280}
            />
            <div className="w-full h-full flex flex-col items-start justify-center pl-6 gap-4">
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
        </TabList>

        <TabPanels className="relative w-[67.4vw] min-h-[100vh]">
          {categories.map(({ uid, menuCards, option }) => (
            <TabPanel key={uid} className="w-full flex flex-col">
              <div className="flex w-full">
                {option.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full flex items-center justify-between"
                    >
                      <h1 className="text-[4.3vh] text-black font-['figtree'] font-[900]">
                        {item.title}
                      </h1>
                      <h1 className="text-[3vh] font-['fredoka' font-[700] text-[#DB6885]">
                        {item.counts}
                      </h1>
                    </div>
                  );
                })}
              </div>

              <div className="w-full flex flex-wrap items-center justify-start gap-x-21">
                {menuCards.map((menuCard, index) => (
                  <li
                    key={index}
                    className="relative w-[40vh] h-[50vh] rounded-xl flex flex-col items-center"
                  >
                    <Image
                      className="w-[34vh] h-[34vh] absolute top-5"
                      src={menuCard.imageURL}
                      alt="food-1"
                      width={100}
                      height={100}
                    />
                    <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                      <div className="flex flex-col items-center justify-center mb-8">
                        <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                          {menuCard.title}
                        </h1>
                        <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                          {menuCard.price}
                        </h2>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default menu;
