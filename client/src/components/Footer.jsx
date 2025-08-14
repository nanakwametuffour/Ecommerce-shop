import React from 'react'
import { allItems } from '../assets/footerData'

export default function Footer() {
  return (
    <div className="bg-green-950 w-full flex flex-col justify-center p-5 ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full justify-center my-4">
        {allItems.map((item)=>(
         <div key={item._id} className='flex justify-center w-full text-white font-semibold px-2'>
             <span className='text-sm lg:text-base cursor-pointer'>{item.title}</span>
         </div>
      ))}</div>
      <div className=" md:flex lg:flex w-full justify-center border-t-2 p-5 text-white gap-3">
        <p>&copy; <span>all copyright reserved 2025</span></p>
         <span>created by nana kwame tuffour</span>
      </div>
    </div>
  );
}
