"use client";
import { Product } from "@/typing";
import { Heart, ShoppingBag, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/store/cardSlice";
import { RootState } from "@/store/store";
import { useToast } from "../ui/use-toast";
import { addHeart } from "@/store/heartSlice";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);
  const { toast } = useToast();
  const wishList = useSelector((state: RootState) => state.heart.items);
  const dispatch = useDispatch();

  const isWished = wishList.some((item) => item.id === product.id);

  const addToCartHandler = (product: Product) => {
    toast({
      description: "Item Added to Cart",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  const handleWishList = (product: Product) => {
    dispatch(addHeart(product));
  };

  return (
    <div className='p-4 border rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500'>
      <Link href={`/product/product-details/${product.id}`}>
        <div className='w-[200px] h-[150px]'>
          <Image
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      </Link>

      <p className='mt-5 text-xs capitalize text-gray-600'>
        {product.category}
      </p>
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className='text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold'>
          {product.title}
        </h1>
      </Link>
      <div className='flex items-center'>
        {ratingArray.map((_, index) => (
          <StarIcon
            key={index}
            size={16}
            fill='yellow'
            className='text-yellow-500'
          />
        ))}
      </div>
      <div className='flex items-center mt-2 space-x-2'>
        <p className='text-black line-through font-semibold text-base opacity-50'>{`$${(
          product.price + 1
        ).toFixed(2)}`}</p>
        <p className='text-black text-lg font-bold opacity-80'>
          ${product.price}
        </p>
      </div>
      <div className='mt-4 flex items-center space-x-2'>
        <div className='relative group'>
          <Button size={"icon"} onClick={() => addToCartHandler(product)}>
            <ShoppingBag size={18} />
          </Button>
          <span className='absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity w-max'>
            Add to Cart
          </span>
        </div>
        <div className='relative group'>
          <Button
            size={"icon"}
            className={`${
              isWished
                ? "bg-red-500 hover:bg-red-700 "
                : "bg-white hover:bg-red-700 border border-red-500"
            }`}
            onClick={() => handleWishList(product)}
          >
            <Heart size={18} fill={isWished ? "white" : "red"} />
          </Button>
          <span className='absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity w-max'>
            {isWished ? "Remove from Wishlist" : "Add to Wishlist"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
