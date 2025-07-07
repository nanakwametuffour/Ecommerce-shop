import React from "react";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import CategoryPage from "../components/CategoryPage";

import ShowCategory from "../components/ShowCategory";

export default function Home() {
  return (
     <>
      <Slider />
      <Banner />
    <div className="px-6">
      <div className="w-full -mt-[300px]">
        <CategoryPage />
      </div>
       <ShowCategory/>
    </div>
     </>
  );
}
