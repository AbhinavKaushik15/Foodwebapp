"use client";
import OurBlog from "@/components/OurBlog";
import Link from "next/link";
import React, { useEffect } from "react";

const blog = () => {
  useEffect(() => {
    document.title = "Blog | Fofood";
  }, []);
  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[298px] md:h-[71.6vh] bg-[#FFF4F5]">
        <div className="absolute top-[129px] md:top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center md:gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vw] md:text-[4.5vh]">
           <Link href="/" className="mr-1 font-['fredoka'] font-[900] text-zinc-600 hover:text-[#DB6885] hover:underline">Home</Link>
            <Link href="/blog" className="text-[#DB6885] ml-1 font-[900]">/ Blog</Link>
          </div>
          <h1 className="font-['figtree'] text-[8.2vw] md:text-[11.5vh] font-[900] text-black">
            Our Blog
          </h1>
        </div>
      </div>

      {/* Our Blog */}
      <div className="w-full min-h-[190vh] flex flex-col bg-white">
        <div className="mt-24 px-2 sm:px-[18px]">
          <h1 className="font-['figtree'] text-[7vw] md:text-[8.7vh] text-start font-[900] mt-0 md:mt-4 text-black">
            Latest Post
          </h1>
        </div>

        <OurBlog />
      </div>
    </div>
  );
};

export default blog;
