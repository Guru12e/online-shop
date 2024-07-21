"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addItem } from "@/store/cardSlice";
import { Product } from "@/typing";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addToCartHandler = () => {
    toast({
      description: "Item Added to Cart",
      variant: "success",
    });
    dispatch(addItem(product));
  };
  return (
    <Button
      className='mt-6'
      onClick={() => {
        addToCartHandler();
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
