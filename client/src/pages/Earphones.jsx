import React from "react";
import { useState } from "react";

import { FaHeart, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import earphones from "../assets/earphones/boATData.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice.js";

export default function Earphones() {
  const [currentPage, setCurrentPge] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [filterEarphones, setFilterEarphone] = useState(earphones);
  const dispatch = useDispatch();

  const uniqueButtons = [
    "All",
    ...new Set(earphones.map((item) => item.category)),
  ];

  const handleEarpone = (category) => {
    if (category === "All") {
      setFilterEarphone(earphones);
    } else {
      const filterProducts = earphones.filter(
        (item) => item.category === category
      );
      setFilterEarphone(filterProducts);
    }
  };
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const sliceProduct = filterEarphones.slice(firstIndex, lastIndex);
   const pages = []
       for(let i = 1; i<filterEarphones.length/itemPerPage; i++){
         pages.push(i)
       }
  return (
     <div className="flex flex-col w-full">

    <div className="px-1 md:px-5 flex flex-col md:flex-row gap-5 my-10">
      <div className="flex flex-col gap-2">
        <h1 className="underline">filter by category</h1>
        <div className="w-full md:w-44 flex flex-row flex-wrap md:flex-col gap-2">
          {uniqueButtons.map((buttons) => (
            <span onClick={()=>handleEarpone(buttons)} className="cursor-pointer text-base">{buttons}</span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {sliceProduct.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col gap-2 shadow-md overflow-hidden h-[400px]"
          >
            <div className="rounded-md overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="w-full object-cover group-hover:scale-105 duration-300"
              />
            </div>
            <div className="">
              <h1>{item.name}</h1>
              <p className="text-xs md:text-sm">{item.description}</p>
              <div className="flex gap-1">
                <FaStar className="text-green-950" />
                <FaStar className="text-green-950" />
                <FaStar className="text-green-950" />
                <FaStar className="text-green-950" />
                <FaStar />
              </div>
              <span>${item.new_price}</span>
            </div>
            <div className="w-44 z-10  h-full absolute -translate-x-20 group-hover:-translate-x-0 duration-500 left-0 right-0 flex flex-col gap-10">
              <div className="bg-green-950 w-16  rounded-full h-16 flex justify-center items-center shadow-lg p-5">
                <FaHeart className="text-2xl text-white" />
              </div>
              <div className="bg-green-950 w-16 h-16 flex justify-center items-center  rounded-full shadow-lg p-5">
                <FaWallet className="text-2xl text-white" />
              </div>
              <div className="bg-green-950 w-16 h-16 flex justify-center items-center  rounded-full  shadow-lg p-5">
                <FaShoppingCart
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        new_price: item.new_price,
                        category: item.category,
                        description: item.description,
                        quantity: 1,
                      })
                    )
                  }
                  className="text-2xl text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
     
      </div>
       <div className="flex justify-center w-full gap-2">
          {
            pages.map((item)=>(
              <button onClick={()=>setCurrentPge(item)} className="bg-green-950 text-white rounded-md w-11 p-1">{item}</button>
            ))
          }
       </div>
      </div>
     </div>
     </div>
  );
}
