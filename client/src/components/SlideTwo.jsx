import React from 'react'
import { data } from '../assets/amazon'
import all_products from '../assets/all_products'

import { CiHeart } from "react-icons/ci";
export default function SlideTwo() {
  return (
    <div>
      <div className="w-full my-3 border-b">
        <h1 className='text-2xl font-semibold capitalize p-2'>populer sale</h1>
      </div>
      <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {all_products.map((item) => (
          <div className="bg-[#f1f1f1] rounded-md relative group overflow-x-hidden cursor-pointer">
            <div className="">
              <img src={item.image} alt="" className='group-hover:scale-125 duration-500'/>
              <span className="text-white absolute right-2 top-1 text-2xl bg-green-950 cursor-pointer p-2 rounded-full">
                <CiHeart />
              </span>
            </div>

            <div className="px-2 font-semibold">
              <p className="">{item.name}</p>
              <div className=" translate-x-[-1000px] group-hover:translate-x-0 transition duration-500">
                  <div className="flex justify-between">
                    <span className='text-black'>${item.new_price}</span>
                <span className="text-gray-700 line-through">${item.old_price}</span>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

