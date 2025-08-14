import React from 'react'
import {DiscountProductData, HotPorductsData, KidsProductData} from '../assets/productData'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
HotPorductsData
export default function DiscountProduct() {
  return (
    <div className="my-5">
      <div className="border-b-2 font-semibold my-1">
        <h1 className=" uppercase">Discount product</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full justify-center items-center gap-2">
        {KidsProductData.slice(0, 8).map((item) => (
          <Link to={"/kids"}>
            <div className="flex justify-center flex-col shadow-md my-3">
              <img
                src={item.img}
                alt=""
                className="w-full h-[300px] object-cover rounded-sm "
              />
              <div className="">
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center w-full my-2">
        <Link to={"product"} className='flex justify-center items-center gap-3 text-green-950'>
          <span className='text-2xl'>view more product</span>
          <span className='flex justify-center items-center mt-2'>
            <FaArrowRight/>
          </span>
        </Link>
      </div>
    </div>
  );
}
