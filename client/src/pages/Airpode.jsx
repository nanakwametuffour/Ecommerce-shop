import React, { useState } from "react";
import airpodes from "../assets/airpodes/airpodesData.js";
import { FaHeart, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice.js";
export default function Airpode() {
  const [currentpage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);
  const [filterAirPode, setFilterAirpode] = useState(airpodes);

  const dispatch = useDispatch();

  const lastPage = currentpage * itemPerPage;
  const firstPage = lastPage - itemPerPage;
  const airpodeSlice = filterAirPode.slice(firstPage, lastPage);

  const pages = [];

  for (let i = 1; i < filterAirPode.length / itemPerPage; i++) {
    pages.push(i);
  }

  const uniquecategory = [
    "All",
    ...new Set(airpodes.map((item) => item.category)),
  ];


  const handlePode = (category)=>{
     if(category === "All"){
       setFilterAirpode(airpodes)
     } else{

       const filterProducts = airpodes.filter((item)=>item.category ===category)
        setFilterAirpode(filterProducts)
     }
    
  }

  return (
    <div className="w-full h-full  px-1 md:px-5 flex flex-col justify-center ">
      <div className="">
        <div className="w-full h-auto flex flex-col gap-5 md:flex-row mt-10 ">
          <div className="flex flex-col gap-3">
            <h1 className="underline">filter by category </h1>
            <div className="w-full md:w-60 gap-4 flex flex-wrap md:gap-1 flex-row md:flex-col px-2">
              {uniquecategory.map((item) => (
                <span
                  onClick={() => handlePode(item)}
                  className="cursor-pointer font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
            {airpodeSlice.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 shadow-md group relative overflow-hidden h-[400px]"
              >
                <div className="overflow-hidden group rounded-md">
                  <img
                    src={item.image}
                    alt=""
                    className=" object-cover w-[300px] rounded-md group-hover:scale-105 duration-300 "
                  />
                </div>
                <div className=" p-1 px-2 my-2">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-xs md:text-sm font-semibold text-gray-500">
                    {item.description}
                  </p>
                  <div className="flex">
                    <FaStar className="text-green-950"/>
                    <FaStar className="text-green-950"/>
                    <FaStar className="text-green-950"/>
                    <FaStar className="text-green-950"/>
                    <FaStar />
                  </div>
                  <h1 className="text-xl font-semibold">${item.new_price}</h1>
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
        </div>
      </div>
      <div className="w-full flex gap-2 justify-center items-center my-5">
        {pages.map((item) => (
          <button
            onClick={() => setCurrentPage(item)}
            className="bg-green-950 text-white rounded-md w-11 p-1"
          >
            {item}
          </button>
        ))}
      </div>
     {/* slide */}
    </div>
  );
}
