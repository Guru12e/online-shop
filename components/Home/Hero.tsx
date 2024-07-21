import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-12vh)] flex justify-center flex-col bg-black bg-opacity-90 text-white'>
      <div className='w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
        <div>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold uppercase'>
            mega sale <span className='text-rose-500'>Special</span> Offer up to{" "}
            <span className='text-orange-500'>60%</span> off
          </h1>
          <p className='text-sm md:text-base lg:text-lg  text-opacity-70 mt-4'>
            Our advanced e-commerce platform offers a comprehensive solution for
            online shopping, designed to enhance the user experience and
            streamline the purchasing process. Our platform includes a robust
            search functionality, allowing users to effortlessly find products,
            browse categories, and make informed purchasing decisions.
          </p>
          <div className='flex mt-6 items-center space-x-4'>
            <Button
              size={"lg"}
              className='bg-[#FF4500] border border-[#FF4500] hover:text-[#FF4500]'
            >
              Shop Now
            </Button>
            <Button size={"lg"} className='hover:bg-white hover:text-black'>
              Explore More
            </Button>
          </div>
        </div>
        <div className='hidden lg:block'>
          <Image
            src='/images/hero.png'
            alt='hero'
            width={600}
            height={600}
            className='lg:h-[50%] lg:w-[50%] xl:h-[80%] xl:w-[80%]'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
