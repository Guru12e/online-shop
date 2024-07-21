import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "../Helper/SearchBar";
import { UserIcon } from "lucide-react";
import ShoppingCart from "../Helper/ShoppingCart";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import HeartButton from "../Helper/HeartButton";

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 bg-white z-[1] shadow-md text-black'>
      <div className='flex items-center justify-between w-[95%] md:w-4/5 h-full mx-auto'>
        <Link href='/'>
          <Image src='/images/logo.png' alt='logo' width={140} height={140} />
        </Link>
        <div className='flex items-center space-x-6'>
          <SearchBar />
          <HeartButton />
          <ShoppingCart />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Nav;
