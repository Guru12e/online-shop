import { addItem, CartItem, removeItem } from "@/store/cardSlice";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";

const CardSlider = ({ items }: { items: CartItem[] }) => {
  const dispatch = useDispatch();

  const addItemHandler = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const removeItemHandler = (item: CartItem) => {
    dispatch(removeItem(item));
  };

  return (
    <div className='mt-6 h-full mb-6'>
      <h1 className='text-center font-bold text-lg mb-6'>Your Cart</h1>
      {items.length == 0 && (
        <div className='flex items-center w-full h-[80vh] flex-col justify-center'>
          <Image
            src='/images/cart.svg'
            alt='empty_cart'
            width={200}
            height={200}
            className='object-cover mx-auto'
          />
          <h1 className='mt-8 text-2xl font-semibold'>Your Cart is Empty</h1>
        </div>
      )}
      {items.length > 0 && (
        <div>
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className='ppb-4 border-b-2 border-gray-300 border-opacity-60 p-4'
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className='object-cover mb-4'
                  />
                </div>
                <div>
                  <h1 className='text-sm font-semibold truncate'>
                    {item.title}
                  </h1>
                  <h1 className='text-base to-blue-950 font-bold'>
                    ${(item.price * item.quatity).toFixed(2)}
                  </h1>
                  <h1 className='text-base font-bold mb-2'>
                    Quantity: {item.quatity}
                  </h1>
                  <div className='flex items-center space-x-4'>
                    <Button size={"sm"} onClick={() => addItemHandler(item)}>
                      <Plus size={20} />
                    </Button>
                    <Button
                      size={"sm"}
                      variant={"destructive"}
                      onClick={() => removeItemHandler(item)}
                    >
                      <Trash2 size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
          <Link href='/cart'>
            <SheetClose>
              <Button className='w-full mb-6 mt-6'>View All Cart</Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardSlider;