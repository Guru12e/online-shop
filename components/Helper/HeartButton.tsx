"use client";
import { RootState } from "@/store/store";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const HeartButton = () => {
  const items = useSelector((state: RootState) => state.heart.items);

  return (
    <Link href='/wishList'>
      <div className='relative'>
        {items.length > 0 && (
          <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex justify-center items-center flex-col text-sm text-white rounded-full'>
            {items.length}
          </span>
        )}
        <HeartIcon size={26} cursor={"pointer"} />
      </div>
    </Link>
  );
};

export default HeartButton;
