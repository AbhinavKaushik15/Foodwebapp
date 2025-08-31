"use client";
import { fireDb } from "@/lib/firestore/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Product {
  id?: string;
  title: string | null;
  price: string | null;
  imageURL: string | null;
  description: string | null;
  time: Timestamp;
  date: string | null;
  stock: string | null;
}

interface ProductProviderProps {
  children: React.ReactNode;
}

interface ProductWithId extends Product {
  id: string;
}

interface ProductContextValue {
  isLoading: boolean;
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
  addProduct: () => Promise<void>;
  allProducts: ProductWithId[];
  setAllProducts: React.Dispatch<React.SetStateAction<ProductWithId[]>>;
  getProduct: () => void;
  updateProductHandler: (item: Product) => void;
  updateProduct: (item: Product) => void;
  deleteProduct: (item: Product) => void;
}

const ProductContext = createContext<ProductContextValue | null>(null);

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProduct must be used within ProductProvider");
  return context;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const initialProduct: Product = {
    title: "",
    price: "",
    imageURL: "",
    description: "",
    stock: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  };

  const [product, setProduct] = useState<Product>(initialProduct);

  const [allProducts, setAllProducts] = useState<ProductWithId[]>([]);

  const addProduct = async () => {
    if (
      !product.title ||
      !product.price ||
      !product.imageURL ||
      !product.description
    ) {
      toast.error("All fields are required!");
      return;
    }
    const productRef = collection(fireDb, "product");
    try {
      await addDoc(productRef, product);
      getProduct();
      toast.success("Product added successfully.");
      router.push("/admin/products");
      setProduct({
        title: "",
        price: "",
        imageURL: "",
        description: "",
        stock: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");
    }
  };

  const getProduct = async () => {
    try {
      const q = query(collection(fireDb, "product"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        const productArray: ProductWithId[] = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...(doc.data() as Product), id: doc.id });
        });
        setAllProducts(productArray);
      });
      return () => data;
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const updateProductHandler = (item: Product) => {
    setProduct(item);
  };

  const updateProduct = async (item: Product) => {
    try {
      await setDoc(doc(fireDb, "product", product.id as string), product);
      getProduct();
      toast.success("Product Updated Successfully.");
      router.push("/admin/products");
      setProduct(initialProduct);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const deleteProduct = async (item: Product) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteDoc(doc(fireDb, "product", item.id as string));
      toast.success("Product Deleted Successfully.");
      getProduct();
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        isLoading,
        addProduct,
        setProduct,
        allProducts,
        setAllProducts,
        getProduct,
        updateProductHandler,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
