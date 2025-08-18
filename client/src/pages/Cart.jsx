import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaMinus, FaPlug, FaPlus, FaStar, FaTrash} from 'react-icons/fa'
import { clearCart, decreaseQuantity, deleteItem, increaseQuantity } from '../redux/productSlice'
import Empty from '../components/Empty'

export default function Cart() {
  const dispatch = useDispatch()
   const [totalPrice, setTotalPrice] = useState("");
  const products = useSelector((item)=>item.cart.productItem)    
         useEffect(()=>{
          let totalUnit = 0
           const item = products.filter((item)=>{
              totalUnit += item.new_price * item.quantity
           })
            return setTotalPrice(totalUnit.toFixed(2))
         }, [products])
        
         
  return (
    <div className=" w-full h-auto justify-center my-5 px-5">
      {products.length > 0 ? (
        <div className="w-[100%] justify-center px-1 md:px-10">
          {products.map((item) => (
            <div className="flex w-full justify-around items-center border-b-2 my-1">
              <div className="flex flex-col">
                <img
                  src={item.image}
                  alt=""
                  className="w-44 h-auto object-cover"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="text-xs md:text-base">{item.description}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="font-semibold text-xl">
                      ${item.new_price * item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(deleteItem(item.id))}
                      className="text-green-950"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="flex gap-2 font-semibold">
                  <span className="bg-green-900 text-white p-1">
                    #1 best sell
                  </span>
                  in {item.name}
                </p>
                <div className="flex">
                  <FaStar className="text-green-800" />
                  <FaStar className="text-green-800" />
                  <FaStar className="text-green-800" />
                  <FaStar className="text-green-800" />
                  <FaStar />
                </div>
                <div className="flex border border-green-950 rounded-full gap-4 w-28 justify-center my-4">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="text-2xl font-semibold text-green-950"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-2xl font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="text-2xl font-semibold text-green-950"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="my-5 flex w-full justify-between px-2">
            <button
              className="bg-green-950 w-44 p-1 text-white capitalize font-semibold"
              onClick={() => dispatch(clearCart())}
            >
              clear all
            </button>
            <div className="">
              <span className="text-green-950 font-semibold text-2xl">
                Total:
                <span className="font-semibold text-black ">${totalPrice}</span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
