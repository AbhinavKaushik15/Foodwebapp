"use client";

import { useProduct } from "@/contexts/ProductContext";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();
  const { allProducts } = useProduct();

  const product = allProducts.find((p) => p.id === id);

  if (!product) return <h1 className="p-6">Product not found</h1>;

  return (
    <div className="w-full min-h-[100vh] flex justify-center mt-34">
      <div className="w-[40vw] h-full bg-red-300">
        <img
          className="w-[50vw] h-full object-cover mt-10"
          src={product.imageURL as string}
          alt=""
        />
      </div>
      <div className="w-[40vw] bg-blue-400 ">
        <h1 className="text-6xl font-bold">{product.title}</h1>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-4 text-lg font-semibold">{product.price} ₹</p>
      </div>
    </div>
  );
}
