import React from 'react'
import { FaArrowLeft, } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import emty from '../assets/empt2.jpg'
export default function Empty() {
  

  return (
    <div className='w-full flex flex-col gap-5 justify-center'>
          <h1 className='text-2xl text-green-950 text-center capitalize font-semibold'>your bag is empty</h1>
        <div className="flex justify-center">
            <img src={emty} alt="" className='w-[20%] object-cover'/>
        </div>
        <div className="flex w-full justify-center">
            <p>
                <Link to={"/product"} className='flex justify-center items-center gap-3 text-2xl text-green-950'>
                   <FaArrowLeft className='mt-1'/>
                  <span>continue shopping</span>
                </Link>
            </p>
        </div>
    </div>
  )
}
