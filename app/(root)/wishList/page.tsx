"use client";
import ProductCard from "@/components/Home/ProductCard";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const WishList = () => {
  const items = useSelector((state: RootState) => state.heart.items);

  return (
    <div>
      <h1 className='uppercase text-center text-2xl mt-4 font-bold mb-4'>
        WishList
      </h1>
      <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
        {items.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default WishList;
