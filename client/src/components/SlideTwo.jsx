import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
 import {useDispatch} from 'react-redux'
import all_products from "../assets/all_products";

import { CiHeart } from "react-icons/ci";
import { addToCart } from "../redux/productSlice";
export default function SlideTwo() {
  const dispatch = useDispatch()
  const [showMore, setShowMore] = useState(12);
  const slice = all_products.slice(0, showMore);
  const viewMore = () => {
    setShowMore(showMore + showMore);
  };

  const prevView = () => {
    setShowMore(12);
  };
  return (
    <div>
      <div className="w-full my-3 border-b-2">
        <h1 className=" font-semibold uppercase">populer sale</h1>
      </div>
      <div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {slice.map((item) => (
          <div key={item.id} className="bg-[#f1f1f1] rounded-md relative group overflow-x-hidden cursor-pointer">
            <div className="">
              <img
                src={item.image}
                alt=""
                className="group-hover:scale-125 duration-500"
              />
              <div className="flex flex-col gap-2 absolute right-2 top-1 my-1">
                <span className="text-white  text-2xl bg-green-950 cursor-pointer p-2 rounded-full">
                  <CiHeart />
                </span>
                <span className="text-white  text-2xl bg-green-950 cursor-pointer p-2 rounded-full">
                  <TiShoppingCart onClick={()=>dispatch(addToCart({
                    id: item.id,
                    image: item.image,
                     name: item.name,
                     category: item.category,
                      description: item.description,
                      new_price: item.new_price,
                      old_price: item.old_price,
                      quantity: 1
                  }))}/>
                </span>
              </div>
            </div>

            <div className="px-2 font-semibold">
              <p className="">{item.name}</p>
              <div className=" translate-x-[-1000px] group-hover:translate-x-0 transition duration-500">
                <div className="flex justify-between">
                  <span className="text-black">${item.new_price}</span>
                  <span className="text-gray-700 line-through">
                    ${item.old_price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-between py-3">
        <div className="">
          {slice.length === 30 ? (
            <button
              onClick={prevView}
              className=" capitalize font-semibold text-green-950"
            >
              prev view
            </button>
          ) : (
            <button className="text-green-950 font-semibold" onClick={viewMore}>
              show more
            </button>
          )}
        </div>
        <span className="text-green-950 font-semibold">
          {slice.length} out of 30 product
        </span>
      </div>
    </div>
  );
}
