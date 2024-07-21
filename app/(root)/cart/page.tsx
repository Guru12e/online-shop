"use client";
import { Button } from "@/components/ui/button";
import { addItem, CartItem, removeItem } from "@/store/cardSlice";
import { RootState } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { user } = useUser();

  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quatity, 0);
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quatity, 0)
    .toFixed(2);

  const vat = (+totalPrice * 0.15).toFixed(2);
  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

  const dispatch = useDispatch();

  const addItemHandler = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const removeItemHandler = (item: CartItem) => {
    dispatch(removeItem(item));
  };

  return (
    <div className='mt-8 min-h-[60vh]'>
      {items.length == 0 && (
        <div className='flex items-center justify-center w-full h-[80vh] flex-col'>
          <Image
            src='/images/cart.svg'
            alt='empty_cart'
            width={400}
            height={400}
            className='object-cover mx-auto'
          />
          <h1 className='mt-8 text-2xl font-semibold'>Your Cart is Empty</h1>
          <Link href='/'>
            <Button className='mt-4'>Shop Now</Button>
          </Link>
        </div>
      )}
      {items.length > 0 && (
        <div className='md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12'>
          <div className='rounded-lg shadow-md overflow-hidden xl:col-span-4'>
            <h1 className='p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700'>
              Your Cart ({totalQuantity} Items)
            </h1>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div className='flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10'>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h1 className='md:text-xl text-base font-bold text-black'>
                        {item.title}
                      </h1>
                      <h1 className='md:text-lg text-sm font-semibold'>
                        Category: {item.category}
                      </h1>
                      <h1 className='md:text-2xl text-lg font-bold text-blue-950'>
                        ${item.price}
                      </h1>
                      <h1 className='md:text-lg text-sm font-semibold'>
                        Quantity: {item.quatity}
                      </h1>
                      <div className='flex items-center mt-4 space-x-2'>
                        <Button
                          size={"sm"}
                          onClick={() => addItemHandler(item)}
                        >
                          Add
                        </Button>
                        <Button
                          size={"sm"}
                          variant={"destructive"}
                          onClick={() => removeItemHandler(item)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='xl:col-span-2'>
            <div className='bg-indigo-950 sticky top-[25vh] p-6 rounded-lg'>
              <h1 className='text-center mt-4 text-white text-xl font-semibold'>
                Summary
              </h1>
              <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
              <div className='flex mt-6 text-xl uppercase font-semibold text-white items-center justify-between'>
                <span>Sub Total</span>
                <span>${totalPrice}</span>
              </div>
              <div className='flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between'>
                <span>VAT</span>
                <span>${vat}</span>
              </div>
              <div className='flex mb-6 text-xl uppercase font-semibold text-white items-center justify-between'>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
              <div className='flex mt-6 mb-6 text-xl uppercase font-semibold text-white items-center justify-between'>
                <span>Total</span>
                <span>${totalPriceWithVat}</span>
              </div>
              {!user && (
                <Link href='/sign-in'>
                  <Button className='bg-orange-500 w-full '>
                    Sign In to Checkout
                  </Button>
                </Link>
              )}
              {user && (
                <Button className='w-full bg-orange-500'>Order Now</Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
