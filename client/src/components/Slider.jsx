
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";
import airpodes from "../assets/airpodes/airpodesData.js";
export default function Slider() {
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
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      transitionDuration={1000}
      className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative z-0"
    >
      {
        airpodes.map((item)=>(
          <Link to={"/airpode"} className="flex items-center border border-green-900 hover:shadow-md px-2 rounded-md py-1 gap-4 mr-2">
           <img src={item.image} alt="" className="w-10 h-10 rounded-full"/>
            <span>{item.name}</span>
          </Link>
        ))
      }
    </Carousel>
    // <div className=" h-auto px-5 flex justify-center -z-1">

    // </div>
  );
}
