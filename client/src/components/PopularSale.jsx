import React, { useEffect, useState } from "react";
import Title from "./Title";

export default function PopularSale() {
  const [product, setProduct] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);


  
  return (
    <div className="w-full h-auto flex flex-col py-5">
        <div className="border-b p-2">

      <p className="text-xl font-semibold">Populer sale</p>
        </div>
      
    </div>
  );
}







