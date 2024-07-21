import { getSingleProduct, getSpecificCategory } from "@/api/api";
import { Product } from "@/typing";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import ProductCard from "@/components/Home/ProductCard";
import AddToCart from "./add-cart";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const product: Product = await getSingleProduct(id);
  const relatedProduct: Product[] = await getSpecificCategory(product.category);
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);

  return (
    <div className='mt-20 mb-10'>
      <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4'>
        <div className='col-span-3 mb-6 lg:mb-0'>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
        <div className='col-span-4 '>
          <h1 className='lg:text-3xl text-2xl font-bold text-black'>
            {product.title}
          </h1>
          <div className='mt-2 flex items-center space-x-2'>
            <div className='flex items-center'>
              {ratingArray.map((star) => {
                return (
                  <StarIcon
                    key={Math.random() * 5000}
                    size={20}
                    fill='yellow'
                    className='text-yellow-600'
                  />
                );
              })}
            </div>
            <p className='text-base text-gray-700 font-semibold'>
              ({product.rating.count} Review)
            </p>
          </div>
          <span className='w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4'></span>
          <h1 className='lg:text-6xl text-3xl md:text-4xl text-blue-950'>
            ${product.price.toFixed(2)}
          </h1>
          <p className='mt-4 text-base text-black opacity-70'>
            {product.description}
          </p>
          <p className='mt-2 text-sm text-black text-opacity-70 font-semibold'>
            Category: {product.category}
          </p>
          <p className='mt-2 text-sm text-black text-opacity-70 font-semibold'>
            Tag: Shop,Wow
          </p>
          <p className='mt-2 text-sm text-black text-opacity-70 font-semibold'>
            SKU: {Math.random() * 500}
          </p>
          <AddToCart product={product} />
        </div>
      </div>
      <div className='w-4/5 mt-16 mx-auto'>
        <h1 className='text-2xl text-black font-semibold'>Related Product</h1>
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
          {relatedProduct.map((product) => {
            return <ProductCard key={Math.random() * 5000} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
