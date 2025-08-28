"use client";
import { useProduct } from "@/contexts/ProductContext";
import React from "react";

const UpdateProductPage = () => {
  const { product, setProduct, updateProduct } = useProduct();

  return (
    <div className="w-full">
      {/* top header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-[700]">Update Product</h1>
        <button
          className="px-3 py-1.5 bg-[#DB6885] text-white font-[600] rounded-lg hover:bg-[#db6885e1] cursor-pointer"
          onClick={updateProduct}
        >
          Update
        </button>
      </div>

      {/* inputs */}
      <div className="w-full flex flex-col gap-5 mt-5">
        {/* title */}
        <div className="relative">
          <input
            className="px-3 pt-5 pb-2 w-96 bg-white border border-zinc-300 placeholder:text-zinc-300 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
            type="text"
            value={product.title || ""}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            placeholder="Enter title"
          />
          <h1 className="absolute top-1 text-xs text-zinc-500 font-[600] left-3">
            Product Name <span className="text-red-600">*</span>
          </h1>
        </div>

        {/* Image URL */}
        <div className="relative">
          <input
            className="px-3 pt-5 pb-2 w-96 bg-white border border-zinc-300 placeholder:text-zinc-300 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
            type="url"
            value={product.imageURL || ""}
            onChange={(e) =>
              setProduct({ ...product, imageURL: e.target.value })
            }
            placeholder="Enter imageURL"
          />
          <h1 className="absolute top-1 text-xs text-zinc-500 font-[600] left-3">
            Product Image URL <span className="text-red-600">*</span>
          </h1>
        </div>

        {/* Description */}
        <div className="relative">
          <input
            className="px-3 pt-5 pb-2 w-96 bg-white border border-zinc-300 placeholder:text-zinc-300 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
            type="text"
            value={product.description || ""}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            placeholder="Enter Short Description"
          />
          <h1 className="absolute top-1 text-xs text-zinc-500 font-[600] left-3">
            Short Description <span className="text-red-600">*</span>
          </h1>
        </div>

        {/* Stock */}
        <div className="relative">
          <input
            className="px-3 pt-5 pb-2 w-96 bg-white border border-zinc-300 placeholder:text-zinc-300 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
            type="text"
            value={product.stock || ""}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
            placeholder="Enter Stock"
          />
          <h1 className="absolute top-1 text-xs text-zinc-500 font-[600] left-3">
            Stock <span className="text-red-600">*</span>
          </h1>
        </div>

        {/* Price */}
        <div className="relative">
          <input
            className="px-3 pt-5 pb-2 w-96 bg-white border border-zinc-300 placeholder:text-zinc-300 text-md font-[400] rounded-lg hover:border-[#DB6885] outline-[#DB6885]"
            type="text"
            value={product.price || ""}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            placeholder="Enter Price"
          />
          <h1 className="absolute top-1 text-xs text-zinc-500 font-[600] left-3">
            Price <span className="text-red-600">*</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductPage;
