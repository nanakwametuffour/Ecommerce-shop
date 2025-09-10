import React, { useEffect, useRef, useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';
import SideBar from './SideBar';
import { FaBars } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import  logo  from "/src/assets/bag.JPEG";
import { bottomNav } from '../assets/Pages';
import { searchProduct } from '../assets/searchData';
 import {useSelector} from 'react-redux'
export default function Header() {
   const [searchForm, setSearchForm] = useState("")
  const [sideBar, setSideBar] = useState(false)
    const [searchOf, setSearchOf] = useState(false)
   const [seachFilter, setSearchFilter]=useState(searchProduct)
      const product = useSelector((item)=>item.cart.productItem)    
          // console.log(product);
          
           
    const filterItem =()=>{
       const filterProduct = searchProduct.filter((item)=>
        item.titile.toLowerCase().includes(searchForm.toLowerCase())
      )
       setSearchFilter(filterProduct)
    }
            
  const ref =  useRef()
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
         if(e.target.contains(ref.current)){
          setSideBar(false)
         };
         
    })
  }, [ref, sideBar])

   const handleSearch=(e)=>{
    setSearchForm(e.target.value)
    const filterProduct = searchProduct.filter((item) =>
      item.titile.toLowerCase().includes(searchForm.toLowerCase())
    );
    setSearchFilter(filterProduct);
   }
  return (
    <header className=" w-full h-auto sticky top-0 z-50">
      <div className="">
        <div className=" bg-white relative">
          <div className="flex justify-between w-full max-w-screen mx-auto p-4 px-5">
            <div className="w-[40%] md:w-[50%] flex items-center">
              <Link to={"/"} className="flex justify-center items-center">
                {/* <img src={logo} alt="" className="w-8 h-8 md:w-10 md:h-10" /> */}
                <span className=" uppercase font-semibold text-green-900">
                  E-Mart
                </span>
              </Link>
            </div>
            <div className="w-full flex justify-center items-center border p-2 rounded-full hover:ring-1 ring-green-900 transition duration-500">
              <input
                type="text"
                onChange={handleSearch}
                value={searchForm}
                onClick={() => setSearchOf(true)}
                className="w-[100%] focus:outline-none"
                placeholder="Search product.."
              />

              <div className="">
                {searchForm ? (
                  <span onClick={() => setSearchForm("")}>
                    <FaTimes className="text-black hover:text-red-700 cursor-pointer" />
                  </span>
                ) : (
                  <span>
                    <FaSearch className="text-gray-400" />
                  </span>
                )}
              </div>
            </div>
            {searchOf && (
              <div className="">
                {searchForm && (
                  <div
                    onClick={() => setSearchOf(false)}
                    className=" fixed  right-0  left-0 top-20 cursor-pointer mx-auto  flex justify-center bg-black/60 z-10 items-center w-screen h-full px-10 "
                  >
                    <div
                      onClick={() => setSearchOf(false)}
                      className="bg-white overflow-y-auto h-[450px] w-[70%] md:w-[60%] absolute -top-[25px] shadow-xl border-t-2 border-green-900 ml-16 p-5 flex justify-center flex-col"
                    >
                      <div className="flex gap-2 flex-col  mt-10">
                        {seachFilter.map((item) => (
                          <div className="flex gap-3 items-center">
                            <FaSearch className="text-gray-600" />
                            <img
                              src={item.image}
                              alt=""
                              className="w-10 h-10 object-cover"
                            />
                            <Link to={item.link} className="h-10">
                              <p className="text-xs md:text-base">
                                {item.description}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="w-[40%] flex justify-center items-center gap-3">
              <Link to={"/wishlist"}>
                <div className="relative">
                  <FiStar className="text-xl md:text-2xl" />
                  <p className="w-5 h-5 rounded-full bg-red-700 flex justify-center items-center absolute -top-2 ">
                    <span className="text-white">0</span>
                  </p>
                </div>
              </Link>

              <Link to={"/cart"}>
                <div className="relative cursor-pointer">
                  <FiShoppingCart className="text-xl md:text-2xl" />
                  <p className="w-5 h-5 rounded-full bg-red-700 flex justify-center items-center absolute -top-2 -right-2">
                    {product.length > 0 ? (
                      <span className="text-white">{product.length}</span>
                    ) : (
                      <span className="text-white">0</span>
                    )}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-green-900 w-full h-auto ">
          <div className="flex justify-between w-full max-w-screen mx-auto p-4 px-5">
            <div className="text-white w-full">
              <span
                onClick={() => setSideBar(true)}
                className="border border-white cursor-pointer w-fit p-2 flex"
              >
                <FaBars className="text-[23px]" />
              </span>
            </div>
            <div className="text-white w-full flex justify-center items-center gap-3 md:gap-5 ">
              {bottomNav.map((item) => (
                <Link key={item.id} to={item.link}>
                  <p className="text-base font-semibold md:text-2xl hover:opacity-50 transition duration-500">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {sideBar && (
        <div className="flex relative ">
          <div className="w-full h-screen fixed bg-black/50  top-0 left-0 flex gap-2">
            {/* motion goes here */}
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[300px] md:w-[350px] h-full bg-white border-r-4 border-green-950/20"
            >
              {/* sidebar */}
              <SideBar />
              {/* fatimes goes here */}
              <div
                onClick={() => setSideBar(!sideBar)}
                className="border w-10 h-10 p-2 ml-1 flex absolute top-0 left-[300px] md:left-[350px] justify-center items-center cursor-pointer text-white hover:text-red-700 transition duration-500 hover:bg-white"
              >
                <FaTimes className=" text-[30px]" />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </header>
  );
}

