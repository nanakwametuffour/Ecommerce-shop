import React from "react";
import { FaHeart, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice.js";
import { KidsProductData } from "../assets/productData";

export default function Kids() {
  const dispatch = useDispatch()
  return (
    <div className="my-10">
      <div className="w-full grid grid-cols-2 md:grid-cols-5 h-auto px-5 gap-5">
        {KidsProductData.map((item) => (
          <div key={item.id} className="shadow-md flex flex-col gap-3 group relative overflow-hidden">
            <div className="rounded-md overflow-hidden group">
              <img
                src={item.image}
                alt=""
                className="w-full h-[300px] object-cover group-hover:opacity-10"
              />
            </div>
            <div className=" p-2">
              <h2>{item.name}</h2>
              <p className="text-xs md:text-sm">{item.description}</p>
              <div className="flex gap-1">
                <FaStar className="text-green-950" />
                <FaStar className="text-green-950" />
                <FaStar className="text-green-950" />
                <FaStar className="text-green-950" />
                <FaStar />
              </div>
              <span className="text-base font-semibold">${item.new_price}</span>
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
  );
}
