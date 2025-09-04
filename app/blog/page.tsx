"use client";
import OurBlog from "@/components/OurBlog";
import React, { useEffect } from "react";

const blog = () => {
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
        <div className="mt-24 px-[18px]">
          <h1 className="font-['figtree'] text-[8.7vh] text-start font-[900] mt-4">
            Latest Post
          </h1>
        </div>

        <OurBlog />
      </div>
    </div>
  );
};

export default blog;
