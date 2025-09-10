import React from 'react'
import Loader from '../components/Loader'
import { FcGoogle } from "react-icons/fc";

export default function Profile() {
  return (
    <div className="w-full flex justify-center my-10">
      <div className="w-[300px] flex flex-col gap-4 justify-center">
        <div className="w-full flex justify-center">
          <button className="bg-green-950 hover:opacity-90 duration-300 text-white px-5 py-1 w-fit rounded-md flex justify-center items-center gap-2">
            <span className='capitalize'> sign in with Google</span>
            <FcGoogle className="w-10 h-10 rounded-full" />
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-green-950 hover:opacity-90 duration-300 text-white px-5 py-1 w-fit rounded-md">
            sign out
          </button>
        </div>
      </div>
    </div>
  );
}
