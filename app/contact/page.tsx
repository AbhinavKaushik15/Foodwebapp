"use client";
import React, { useEffect } from "react";

const contact = () => {
  useEffect(() => {
    document.title = "Contact us | Fofood";
  }, []);
  return (
    <div className="w-full">
      {/* top page */}
      <div className="relative w-full h-[71.6vh] bg-[#FFF4F5]">
        <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="font-['Fredoka'] font-[900] text-[4.5vh]">
            <span className="text-[#707070]">Home</span>
            <span className="text-[#DB6885] ml-1">/ Contact us</span>
          </div>
          <h1 className="font-['figtree'] text-[11.5vh] font-[900]">
            Contact us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default contact;
