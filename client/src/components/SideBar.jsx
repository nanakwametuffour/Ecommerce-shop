import React from 'react'

import { Link } from 'react-router-dom'
import { sidePages } from '../assets/Pages'
  sidePages
export default function() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className=" flex w-full justify-center py-2 text-2xl capitalize border-b-2">
        <h1>search favorite categories</h1>
      </div>
      <div className="w-full px-4 py-1 ">
        {sidePages.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="flex flex-col text-xl justify-center rounded-md p-0.5 capitalize transition duration-500 w-full items-center my-3 hover:bg-green-950 hover:text-white"
          >
            <p>{item.title}</p>
             
          </Link>
        ))}
      </div>
    </div>
  );
}
