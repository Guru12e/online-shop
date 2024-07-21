import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black text-white shadow-xl'>
      <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        <div>
          <h1 className='text-[25px] uppercase font-semibold  mb-4'>
            EKON INC
          </h1>
          <p className='text-sm  opacity-60'>
            At ShopSmart, we offer a wide range of products to suit your every
            need, from the latest tech gadgets to stylish fashion essentials.
            Enjoy a seamless shopping experience with our user-friendly
            interface, secure checkout, and prompt delivery.
          </p>
          <p className='text-base mt-6  opacity-80'>
            123456789 - info@gmail.com
          </p>
        </div>
        <div className='lg:mx-auto'>
          <h1 className='footer_title'>Information</h1>
          <p className='footer_link'>About Us</p>
          <p className='footer_link'>Privacy Police</p>
          <p className='footer_link'>Return Police</p>
          <p className='footer_link'>Drop Shipping</p>
          <p className='footer_link'>Shipping Police</p>
        </div>
        <div className='lg:mx-auto'>
          <h1 className='footer_title'>Account</h1>
          <p className='footer_link'>Dashboard</p>
          <p className='footer_link'>My Orders</p>
          <p className='footer_link'>Account Details</p>
          <p className='footer_link'>Track Orders</p>
        </div>
        <div className='lg:mx-auto'>
          <h1 className='footer_title'>Shop</h1>
          <p className='footer_link'>Affiliate</p>
          <p className='footer_link'>Best Sellers</p>
          <p className='footer_link'>Latest Product</p>
          <p className='footer_link'>Shop Products</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto'>
        <p className='text-sm  opacity-60 uppercase'>Made By guru</p>
        <Image
          src='/images/pay.svg'
          alt='pay'
          width={230}
          height={230}
          className='object-contain sm:ml-auto'
        />
      </div>
    </div>
  );
};

export default Footer;
