"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { SearchIcon } from "lucide-react";
import { Product } from "@/typing";
import AllProduct from "../Home/AllProduct";
import { getAllProduct } from "@/api/api";
import Link from "next/link";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [matchedProducts, setMatchedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: Product[] = await getAllProduct();

        if (text) {
          const filteredProducts = products.filter((product: Product) =>
            product.title.toLowerCase().includes(text.toLowerCase())
          );
          setMatchedProducts(filteredProducts);
        } else {
          setMatchedProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [text]);

  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={26} cursor={"pointer"} />
      </DialogTrigger>
      <DialogContent>
        <form>
          <input
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Search Product'
            className='block w-full bg-gray-300 rounded-lg outline-none px-6 py-2 mt-4'
          />
        </form>
        <div>
          {matchedProducts.map((product) => (
            <Link
              href={`/product/product-details/${product.id}`}
              key={product.id}
              className='mt-2'
            >
              <DialogClose>{product.title}</DialogClose>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
