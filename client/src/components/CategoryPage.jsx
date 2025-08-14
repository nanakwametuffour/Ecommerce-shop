import React from 'react'
import { catePages } from '../assets/Pages'
import {Link} from "react-router-dom"

export default function CategoryPage() {
  return (
    <div className="w-full py-5  max-w-screen-2xl  mx-auto text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {catePages.map((item) => (
        <div key={item.id} className="h-auto z-40 bg-white flex flex-col p-4 shadow-lg">
            <p className='text-black text-2xl font-semibold'>{item.title}</p>
          <Link to={item.link}>
            <img src={item.image} alt="" className="w-full h-[250px] object-cover" />
          </Link>
        </div>
      ))}
    </div>
  );
}
