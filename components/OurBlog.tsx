import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurBlog = () => {
  return (
    <>
      <div className="w-full h-[123vh]">
        <div className="mt-14">
          <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
            Our Blog
          </h3>
          <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
            Latest Post
          </h1>
        </div>

        <div className="w-full h-[70vh] flex items-center justify-between px-4 mt-18">
          <div className="left h-full w-[31vw] flex flex-col gap-7">
            <Image
              className="w-full h-[43vh] rounded-2xl object-cover"
              src="/image/article-1.jpg"
              alt="article-1"
              width={1000}
              height={1000}
            />
            <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
              How To Cook The Sweet Cupcakes with Strawberry Honey
            </h1>
            <Link
              className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
              href=""
            >
              Read More ››
            </Link>
          </div>
          <div className="middle h-full w-[31vw] flex flex-col gap-7">
            <Image
              className="w-full h-[43vh] rounded-2xl object-cover"
              src="/image/article-2.jpg"
              alt="article-2"
              width={1000}
              height={1000}
            />
            <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
              Donut topping recommendations for donut lovers
            </h1>
            <Link
              className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
              href=""
            >
              Read More ››
            </Link>
          </div>
          <div className="right h-full w-[31vw] flex flex-col gap-7">
            <Image
              className="w-full h-[43vh] rounded-2xl object-cover"
              src="/image/article-3.jpg"
              alt="article-3"
              width={1000}
              height={1000}
            />
            <h1 className="text-2xl text-[#2F3137] font-['figtree'] font-[900] tracking-tight leading-[1.5] w-[30vw]">
              How To Cook The Sweet Macarons with Strawberry Cream
            </h1>
            <Link
              className="font-['Fredoka'] font-[900] text-[#DB6885] hover:underline"
              href=""
            >
              Read More ››
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlog;
