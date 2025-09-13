import React from 'react'
import { notFound } from '../assets/Pages';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
  
export default function NotFound() {
  return (
    <div className="w-full h-auto flex flex-col justify-center gap-3 max-w-xl mx-auto my-10">
      <div className="">
        <h1 className="text-2xl text-green-950 font-semibold flex items-center gap-2">
          <span className='text-red-700 font-semibold'>Ooops</span>
          404
          </h1>
        <div className="flex flex-col gap-2">
          <p className='flex gap-2 items-center'>
            <span className="text-2xl text-red-700 font-semibold">product</span>
            does not exist
          </p>
          <p>sorry, we couldn,t find the product</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {
          notFound?.map((item)=>(
            <div key={item.id} className="border-b-2 border-gray-200 p-4 ">
                   <h1 className='text-green-950 font-semibold'>{item.title}</h1>
                 <div className="flex justify-between">
                   <p>{item.text}</p>
                    <Link to={item.link} className='flex justify-center items-center gap-3'>
                      <span>{item.title}</span>
                   <FaArrowRight className='text-gray-300'/>
                    </Link>
                 </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
