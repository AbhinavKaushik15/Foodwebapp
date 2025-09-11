"use client";
import PopularMenuCards from "@/components/PopularMenuCards";
import QuantityButton from "@/components/QuantityButton";
import { useProduct } from "@/contexts/ProductContext";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { id } = useParams();
  const { allProducts } = useProduct();

  const product = allProducts.find((p) => p.id === id);

  if (!product) return <h1 className="p-6">Product not found</h1>;

  return (
    <>
      {/* Product Detail */}
      <div className="flex items-center mt-[13.1vh] md:mt-40 ml-2.5">
        <Link
          className="mx-2 text-xl md:text-[4.5vh] text-zinc-600 hover:text-[#DB6885] hover:underline font-['fredoka'] font-[900] bg-"
          href="/"
        >
          Home
        </Link>
        <span className="text-xl md:text-[4.5vh] text-zinc-600 font-[900] font-['fredoka']">
          /
        </span>
        <Link
          className="mx-2 text-xl md:text-[4.5vh] text-zinc-600 hover:text-[#DB6885] hover:underline font-['fredoka'] font-[900]"
          href="/menu"
        >
          Menu
        </Link>
        <span className="text-xl md:text-[4.5vh] text-zinc-600 font-[900] font-['fredoka']">
          /
        </span>
        <h1 className="text-xl md:text-[4.5vh] text-[#DB6885] font-['fredoka'] font-[900] mx-1">
          {product.title}
        </h1>
      </div>

      <div className="w-[91vw] mx-auto min-h-[100vh] mb-44 md:mb-0 flex flex-col md:flex-row justify-center mt-[2vh] md:mt-[11vh] text-[#2F3137]">
        <div className="left w-full md:w-[45vw] h-full">
          <img
            className="w-full md:w-[40vw] h-full object-cover mt-10"
            src={product.imageURL as string}
            alt=""
          />
        </div>

        <div className="right w-full md:w-[45vw] flex flex-col gap-6 md:gap-10">
          <h1 className="text-[4.1vh] md:text-[5vw] font-bold">
            {product.title}
          </h1>
          <div>
            <h1 className="text-[2.4vh] md:text-3xl font-[800]">Price</h1>
            <p className="font-['Fredoka'] text-[2vh] md:text-[3vh] text-[#DB6885] font-[900]">
              ₹ {product.price}
            </p>
          </div>
          <div>
            <h1 className="text-[2.55vh] md:text-3xl font-[800]">
              Description
            </h1>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          <div className="flex gap-14">
            <h1 className="text-3xl font-[700]">Quantity:</h1>
            <QuantityButton />
          </div>

          <div className="flex md:hidden gap-2 hover:transition-all hover:ease-linear hover:duration-600">
            <button className="px-5 py-4 w-[74vw] bg-[#DB6885] hover:bg-[#FFC107] hover:text-black text-white rounded-full transition-all ease-linear duration-200 whitespace-nowrap">
              <h1 className="">Add to Cart</h1>
            </button>
            <button className="circle w-14 h-14 rounded-full border-[1.5px] border-[#DB6885] hover:bg-[#DB6885] flex items-center justify-center text-[#DB6885] hover:text-white transition-all ease-linear duration-200">
              <Heart />
            </button>
          </div>
        </div>
      </div>

      <div className="-mt-24">
        <PopularMenuCards />
      </div>
    </>
  );
};
export default ProductPage;
