import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import StripeCheckout from "react-stripe-checkout";
import { FaArrowLeft, FaMinus, FaPlug, FaPlus, FaStar, FaTrash } from "react-icons/fa";
import { TbTrashOff } from "react-icons/tb";

import {
  clearCart,
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../redux/productSlice";
import Empty from "../components/Empty";
import { Link, Navigate, Outlet } from "react-router-dom";
  import { ToastContainer, toast } from "react-toastify";

export default function Cart() {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState("");
   const [subtotal, setSubtotal] = useState("")
  const [shipping, setShipping] = useState(10);
  const products = useSelector((item) => item.Emart.productItem);
  const userInfo = useSelector((state)=>state.Emart.userInfo)
    const [payment, setPayment]= useState(false)
  useEffect(() => {
    let total = 0;
    const item = products.filter((item) => {
      total += item.new_price * item.quantity;
    });
    return setTotalPrice(total.toFixed(2));
  }, [products]);

  useEffect(() => {
    let totalUnit = 0;
    const item = products.filter((item) => {
      totalUnit += item.new_price * item.quantity + shipping;
    });
    return setSubtotal(totalUnit.toFixed(2));
  }, [products]);

  const handleCheckOut =()=>{
    if(userInfo){
      setPayment(true)
    }else{
      toast.error("Please Sign In First")
    }
     
  }

  return (
    <div className=" w-full h-auto justify-center my-5 px-1 md:px-10">
      {products.length > 0 ? (
        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row justify-between  gap-10 px-1 md:px-5">
            <div className="w-full flex flex-col items-center h-auto gap-4">
              <div className="flex w-full justify-between items-center">
                <h2 className="text-2xl font-semibold capitalize">your cart</h2>
                {products.length > 1 ? (
                  <span>{products.length} items in cart</span>
                ) : (
                  <span>{products.length} item in cart</span>
                )}
              </div>

              <div className="w-full">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="border-t-2  my-2 flex w-full items-center"
                  >
                    <div className="w-full my-3 flex  md:flex-row justify-between">
                      <div className="flex gap-2">
                        <img
                          src={item.image}
                          alt=""
                          className="w-32 object-cover"
                        />
                        <div className="flex flex-col gap-2">
                          <h4 className="font-semibold">{item.name}</h4>
                          <span>{item.category}</span>
                          <p className="text-xs md:text-base text-gray-500">
                            {item.description}
                          </p>
                          <div className="flex">
                            <FaStar className="text-green-950" />
                            <FaStar className="text-green-950" />
                            <FaStar className="text-green-950" />
                            <FaStar className="text-green-950" />
                            <FaStar className="" />
                          </div>
                          <div className=" flex gap-2 border rounded-full w-24 justify-center items-center">
                            <button
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                            >
                              <FaMinus className="text-xl text-green-950 font-semibold" />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                            >
                              <FaPlus className="text-xl text-green-950 font-semibold" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-2 md:gap-10 ">
                        <span className="flex font-semibold text-xl">
                          ${item.new_price * item.quantity}
                        </span>
                        <div className="flex mt-1">
                          <FaTrash
                            className="text-green-950 cursor-pointer text-2xl"
                            onClick={() => dispatch(deleteItem(item.id))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-96  flex flex-col my-4 gap-5">
              <div className="w-full flex justify-between p-2  border-b-2">
                <h3>subtotal</h3>
                <span>${totalPrice}</span>
              </div>
              <div className="w-full flex justify-between p-2  border-b-2">
                <h3 className=" capitalize">tax</h3>
                <span>$0</span>
              </div>
              <div className="w-full flex justify-between p-2  border-b-2">
                <h3 className=" capitalize">shipping</h3>
                <span>$10</span>
              </div>
              <div className="w-full flex justify-between p-2  border-b-2">
                <h3 className="text-2xl font-semibold capitalize">total</h3>
                <span className="text-2xl font-medium">${subtotal}</span>
              </div>
              <div className="">
                <div className="">
                  <button
                    onClick={handleCheckOut}
                    className="bg-green-950 w-full my-2 rounded-lg p-2 text-white font-semibold"
                  >
                    payment
                  </button>
                  {payment && (
                    <div className="w-full my-2 flex justify-center items-center">
                      <StripeCheckout
                        stripeKey="pk_test_51S6sELHJqBlVHRg6YFGeWKXdM8qjvnZWdk5Vtl8mpoaSBQuLa3Y6klXUsX56KTZ7E8BLnOPXxb0VpVrFIdhgn5jW007rj3Ha6H"
                        name="E-mart online shopping"
                        amount={totalPrice * 100}
                        label="pay to E-mart"
                        description={`Your payment is ${totalPrice}`}
                        // token={payment}
                        email={userInfo.email}
                      />
                    </div>
                  )}
                </div>
                <Link
                  to={"/product"}
                  className="bg-green-950 flex text-white font-semibold  w-full my-2 rounded-lg p-2 justify-center items-center gap-2"
                >
                  <FaArrowLeft className="mt-1" />
                  <span> continue shopping</span>
                </Link>
                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-green-950 flex text-white font-semibold  w-full my-2 rounded-lg p-2 justify-center items-center gap-2"
                >
                  <TbTrashOff className="text-2xl" />
                  <span className="text-2xl">clear cart</span>
                </button>
                <ToastContainer
                  
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
