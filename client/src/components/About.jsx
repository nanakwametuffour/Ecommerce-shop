import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin, FaX } from 'react-icons/fa6';

export default function About() {
  return (
    <div className="w-full flex my-10">
      <div className="w-full flex flex-col max-w-xl mx-auto  px-5 gap-4">
        <h1 className="font-semibold text-xl">About E-Mart</h1>
        <p>
          We're committed to using only the highest-quality materials for
          durability and performance
        </p>
        <div className="">
          <h1 className="font-semibold text-xl">with E-Mart</h1>
          <p>
            Exceptional Quality: We're dedicated to delivering top-notch
            products that exceed expectations
          </p>
        </div>
        <div className="">
          <h1 className="font-semibold text-xl">Satisfaction Guarantee</h1>
          <p>
            We're confident you'll love our product, and we're committed to
            ensuring your satisfaction
          </p>
          <div className="">
            <h1 className="font-semibold text-xl">join our community</h1>
            <p>
            
              Stay up-to-date on new products, promotions, and tips. Follow us
              on social media or sign up for our newsletter to become part of
              the community.
            </p>
          </div>
        </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-3 items-center ">
              <div className="border overflow-hidden rounded-md">

              <input type="text" className='h-8 bg-transparent border-none focus:outline-none px-4 ' placeholder='your email...'/>
              <button className='bg-green-950 text-white h-9 px-1'>subscribe</button>
              </div>
              <div className="flex gap-2">
                <FaFacebook className='text-2xl cursor-pointer bg-green-950 p-2 rounded-full w-10 h-10 text-white'/>
                <FaX className='text-2xl cursor-pointer bg-green-950 p-2 rounded-full w-10 h-10 text-white'/>
                <FaLinkedin className='text-2xl cursor-pointer bg-green-950 p-2 rounded-full w-10 h-10 text-white'/>
              </div>
            </div>
      </div>
    </div>
  );
}
