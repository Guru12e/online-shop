import AllProduct from "@/components/Home/AllProduct";
import Category from "@/components/Home/Category";
import Hero from "@/components/Home/Hero";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Category />
      <AllProduct />
    </div>
  );
};

export default HomePage;
