"use client";
import PopularMenuCards from "@/components/PopularMenuCards";
import QuantityButton from "@/components/QuantityButton";
import { useProduct } from "@/contexts/ProductContext";
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
      <div className="flex items-center mt-40 ml-2.5">
        <Link
          className="mx-2 text-[4.5vh] text-zinc-600 hover:text-[#DB6885] hover:underline font-['fredoka'] font-[900] bg-"
          href="/"
        >
          Home
        </Link>
        <span className="text-[4.5vh] text-zinc-600 font-[900] font-['fredoka']">
          /
        </span>
        <Link
          className="mx-2 text-[4.5vh] text-zinc-600 hover:text-[#DB6885] hover:underline font-['fredoka'] font-[900]"
          href="/menu"
        >
          Menu
        </Link>
        <span className="text-[4.5vh] text-zinc-600 font-[900] font-['fredoka']">
          /
        </span>
        <h1 className="text-[4.5vh] text-[#DB6885] font-['fredoka'] font-[900] mx-1">
          {product.title}
        </h1>
      </div>
      <div className="w-full min-h-[100vh] flex justify-center mt-[11vh] text-[#2F3137]">
        <div className="left w-[45vw] h-full">
          <img
            className="w-[40vw] h-full object-cover mt-10"
            src={product.imageURL as string}
            alt=""
          />
        </div>

        <div className="right w-[45vw] flex flex-col gap-10">
          <h1 className="text-[5vw] font-bold">{product.title}</h1>
          <div>
            <h1 className="text-3xl font-[800]">Price</h1>
            <p className="font-['Fredoka'] text-[3vh] text-[#DB6885] font-[900]">
              ₹ {product.price}
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-[800]">Description</h1>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          <div className="flex gap-14">
            <h1 className="text-3xl font-[700]">Quantity:</h1>
            <QuantityButton />
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
