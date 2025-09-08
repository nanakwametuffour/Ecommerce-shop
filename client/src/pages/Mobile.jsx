import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import mobile from "../assets/mobile/mobileData.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice.js";
export default function Mobile() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [filterMobile, setFilterMobile] = useState(mobile);
   const dispatch = useDispatch()
  const uniqueMobile = ["All", ...new Set(mobile.map((item) => item.category))];

  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const sliceProduct = filterMobile.slice(firstIndex, lastIndex);
    const pages = []
   for(let i = 1; i <filterMobile.length/itemPerPage; i++){
     pages.push(i)
   }

    const handleMobile =(category)=>{
      if(category ==="All"){
        setFilterMobile(mobile)
      }else{
       const filterProducts = mobile.filter((item)=>item.category===category)
           setFilterMobile(filterProducts)
      }
    }

  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row gap-5 w-full h-auto">
          <div className="flex flex-col gap-3 px-2">
          <h1 className="underline">filter by category</h1>
        <div className="w-full md:w-44 flex flex-row flex-wrap md:flex-col px-5">
            {
              uniqueMobile.map((item)=>(
                <span onClick={()=>handleMobile(item)} key={item.id} className="cursor-pointer w-16">{item}</span>
              ))
            }
        </div>
          </div>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {sliceProduct.map((item) => (
              <div
                key={item.id}
                className="shadow-md flex flex-col gap-3 group relative overflow-hidden"
              >
                <div className="w-full flex justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-fit h-56  object-cover group-hover:scale-110 duration-300"
                  />
                </div>
                <div className=" p-2">
                  <h1>{item.name}</h1>
                  <p className="text-xs md:sm font-semibold text-gray-400">
                    {item.description}
                  </p>
                  <div className="flex">
                    <FaStar className="text-green-950" />
                    <FaStar className="text-green-950" />
                    <FaStar className="text-green-950" />
                    <FaStar className="text-green-950" />
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
                      className="text-2xl text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2">
             {
              pages.map((item)=>(
                <button onClick={()=>setCurrentPage(item)} className="text-white bg-green-950 rounded-md p-1 w-11">{item}</button>
              ))
             }
          </div>
        </div>
      </div>
    </div>
  );
}
