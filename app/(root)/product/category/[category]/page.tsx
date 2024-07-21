import { getSpecificCategory } from "@/api/api";
import ProductCard from "@/components/Home/ProductCard";
import { Product } from "@/typing";
import React from "react";

const page = async ({ params }: { params: { category: string } }) => {
  const relatedProduct: Product[] = await getSpecificCategory(params.category);

  return (
    <div className='mb-12'>
      <h1 className='uppercase text-center text-2xl my-4 font-bold'>
        {params.category}
      </h1>
      <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
        {relatedProduct.map((product) => {
          return <ProductCard product={product} key={product.id}/>;
        })}
      </div>
    </div>
  );
};

export default page;
