"use client";
import { RootState } from "@/store/store";
import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import CardSlider from "./CardSlider";

const ShoppingCart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quatity, 0);

  return (
    <Sheet>
      <SheetTrigger>
        <div className='relative'>
          <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex justify-center items-center flex-col text-sm text-white rounded-full'>
            {totalQuantity}
          </span>
          <ShoppingCartIcon size={26} cursor={"pointer"} />
        </div>
      </SheetTrigger>
      <SheetContent className='overflow-auto h-full'>
        <CardSlider items={items} />
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
