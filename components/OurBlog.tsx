"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurBlog = () => {
  const cardDetails = [
    {
      id: "1",
      imageURL: "/image/article-1.jpg",
      title: "How To Cook The Sweet Cupcakes with Strawberry Honey",
    },
    {
      id: "2",
      imageURL: "/image/article-2.jpg",
      title: "Donut topping recommendations for donut lovers",
    },
    {
      id: "3",
      imageURL: "/image/article-3.jpg",
      title: "How To Cook The Sweet Macarons with Strawberry Cream",
    },
    {
      id: "4",
      imageURL: "/image/article-4.jpg",
      title: "Navigating Food Deserts: A Comprehensive Guide",
    },
    {
      id: "5",
      imageURL: "/image/article-5.jpg",
      title: "Exploring the Impact of Food Deserts on Health",
    },
    {
      id: "6",
      imageURL: "/image/article-6.jpg",
      title: "Fresh Food on Wheels: Mobile Markets Revolutionizing Access",
    },
  ];

  return (
    <div className="w-full h-[2500px] md:h-[200vh]">
      <div className="w-full flex flex-wrap items-center justify-center gap-x-[4vh] gap-y-12 md:gap-y-[11vh] px-2 md:mt-10">
        {cardDetails.map((item, id) => {
          return (
            <div
              key={id}
              className="h-full w-[90vw] md:w-[31vw] flex flex-col gap-7"
            >
              <Image
                className="w-full h-[250px] md:h-[43vh] rounded-2xl object-cover"
                src={item.imageURL}
                alt="article-1"
                width={1000}
                height={1000}
              />
              <h1 className="text-[22px] md:text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-full md:w-[30vw]">
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
  );
};

export default OurBlog;
