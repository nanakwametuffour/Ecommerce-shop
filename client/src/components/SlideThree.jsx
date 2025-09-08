import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MenProductData } from '../assets/productData';
import CustomLeftArrow from './arrows/CostumLeftArrow';
import CustomRightArrow from './arrows/CostumRightArrow';
import { Link } from 'react-router-dom';

export default function SlideThree() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  return (
    <div className='flex flex-col gap-4 py-5'>
      <div className="border-b-2 uppercase font-semibold">
        <h1>hot collection</h1>
         
      </div>
        <div className="shadow-lg">
               <Carousel
                 responsive={responsive}
                 infinite={true}
                 autoPlay={false}
                 transitionDuration={1000}
                   customLeftArrow={<CustomLeftArrow/>}
                  customRightArrow={<CustomRightArrow/>}
                 className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative z-0"
               >
                 {
                   MenProductData.map((item)=>(
                     <div className="flex flex-col gap-5 p-2  overflow-hidden">
                       <Link to={"/clothes"}>
                         <picture className=' overflow-hidden group'>
                           <img loading='priority' src={item.image} alt="" className='h-[300px] w-full group-hover:scale-105 group-hover:opacity-70 duration-500 object-cover rounded-sm opacity-0.2'/>
                         </picture>
                       </Link>
                       <div className="">
                          <span className='text-sm font-semibold'>{item.name}</span>
                       </div>
                     </div>
                   ))
                 }
               </Carousel>
             </div>
    </div>
  )
}

