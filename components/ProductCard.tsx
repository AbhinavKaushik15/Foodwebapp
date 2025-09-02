import { useProduct } from "@/contexts/ProductContext";
import { Heart } from "lucide-react";
import React from "react";

const ProductCard = () => {
  const { allProducts } = useProduct();
  return (
    <>
      {/* Popular Menu */}
      <div className="relative w-full h-[190vh] mt-[11.2vh]">
        <h3 className="font-['Fredoka'] text-[#DB6885] font-[900] text-3xl text-center">
          Popular Menu
        </h3>
        <h1 className="font-['figtree'] text-[8.7vh] text-center font-[900] mt-4">
          Most Popular Food
        </h1>

        {/* Popular Food List */}
        <div className="w-full gap-10 flex flex-nowrap items-center justify-center mt-[7.5vh]">
          <div className="w-full flex flex-wrap items-center justify-center -mt-5 gap-[4vh] px-2">
            {allProducts.map((item, index) => {
              const { title, price, imageURL } = item;
              return (
                <div
                  key={index}
                  className="relative w-[48vh] h-[56vh] rounded-xl flex flex-col items-center"
                >
                  <img
                    className="w-[34vh] h-[34vh] absolute top-5"
                    src={imageURL as string}
                    alt=""
                  />
                  <div className="group w-full h-36 flex items-center justify-center gap-10 mt-54">
                    <div className="flex flex-col items-center justify-center mb-8">
                      <h1 className="text-[3.9vh] font-[900] font-['figtree'] hover:text-[#DB6885] hover:underline transition-all ease-linear duration-200 cursor-pointer">
                        {title}
                      </h1>
                      <h2 className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-black">
                        ₹ {price}
                      </h2>
                    </div>

                    <div className="group-hover:block hidden transition-all ease-linear duration-200 absolute bottom-0">
                      <div className="flex gap-2">
                        <div className="circle w-9 h-9 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
                          <Heart />
                        </div>
                        <button className="px-9 py-2 bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200">
                          Add to Cart
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
        <button className="absolute left-1/2 -translate-x-1/2 bottom-[162px] px-[6.8vh] font-['figtree'] font-[900] text-[#DB6885] text-[2.55vh] border border-[#DB6885] py-[2.88vh] rounded-full mt-6">
          See All Menu
        </button>
      </div>
    </>
  );
};

export default ProductCard;
