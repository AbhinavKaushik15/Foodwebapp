"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const blog = () => {
  const [cardDetails, setCardDetails] = useState([
    {
      imageURL: "/image/article-1.jpg",
      title: "How To Cook The Sweet Cupcakes with Strawberry Honey",
    },
    {
      imageURL: "/image/article-2.jpg",
      title: "Donut topping recommendations for donut lovers",
    },
    {
      imageURL: "/image/article-3.jpg",
      title: "How To Cook The Sweet Macarons with Strawberry Cream",
    },
    {
      imageURL: "/image/article-4.jpg",
      title: "Navigating Food Deserts: A Comprehensive Guide",
    },
    {
      imageURL: "/image/article-5.jpg",
      title: "Exploring the Impact of Food Deserts on Health",
    },
    {
      imageURL: "/image/article-6.jpg",
      title: "Fresh Food on Wheels: Mobile Markets Revolutionizing Access",
    },
  ]);

  useEffect(() => {
    document.title = "Blog | Fofood";
  }, []);
  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[71.6vh] bg-[#FFF4F5]">
        <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vh]">
            <span className="text-[#707070]">Home</span>
            <span className="text-[#DB6885] ml-1">/ Blog</span>
          </div>
          <h1 className="font-['figtree'] text-[11.5vh] font-[900]">
            Our Blog
          </h1>
        </div>
      </div>

      {/* Our Blog */}
      <div className="w-full min-h-[190vh]">
        <div className="mt-14 px-[18px]">
          <h1 className="font-['figtree'] text-[8.7vh] text-start font-[900] mt-4">
            Latest Post
          </h1>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-x-[4vh] gap-y-[11vh] px-2 mt-10">
          {cardDetails.map((item, index) => {
            return (
              <div key={index} className="h-full w-[31vw] flex flex-col gap-7">
                <Image
                  className="w-full h-[43vh] rounded-2xl object-cover"
                  src={item.imageURL}
                  alt="article-1"
                  width={1000}
                  height={1000}
                />
                <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
                  {item.title}
                </h1>
                <Link
                  className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
                  href=""
                >
                  Read More ››
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default blog;
