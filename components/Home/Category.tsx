import { getAllCategory } from "@/api/api";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const categories: string[] = await getAllCategory();

  return (
    <div className='pt-16 pb-12'>
      <h1 className='text-center font-bold text-2xl capitalize'>
        Shop by Category
      </h1>
      <div className='mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {categories.map((category) => {
          return (
            <Link href={`/product/category/${category}`} key={category}>
              <div className='p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md'>
                <h1 className='text-sm sm:text-base md:text-lg capitalize font-bold'>
                  {category}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
