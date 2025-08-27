import { useEffect, useState } from "react";
 import {useDispatch} from "react-redux"
import { FaHeart, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import { clothesData } from "../assets/clothes/clothes";
import { addToCart } from "../redux/productSlice";


export default function Clothes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);
  const [filterClothes, setFilterClothes] = useState(clothesData);
  const [selectedColors, setSelectedColors] = useState([]);
   const dispatch = useDispatch()
  // uniques start here......./////

  const uincClothes = [
    "All",
    ...new Set(clothesData.map((clothe) => clothe.type)),
  ];

  const uincGender = [
    "All",
    ...new Set(clothesData.map((clothe) => clothe.gender)),
  ];

  const uniquesize = [
    "all",
    ...new Set(clothesData.map((item) => item.size)),
  ].join(" ");
  console.log(uniquesize);

  //========uniques ends here========//

  //  ========== functions start here ==========//
  const handlefilterType = (type) => {
    if (type === "All") {
      setFilterClothes(clothesData);
    } else {
      const filterdclothes = clothesData.filter((item) => item.type === type);
      setFilterClothes(filterdclothes);
    }
  };
  const handlefilterGender = (gender) => {
    if (gender === "All") {
      setFilterClothes(clothesData);
    } else {
      const filterdclothes = clothesData.filter(
        (item) => item.gender === gender
      );
      setFilterClothes(filterdclothes);
    }
  };

  const handleSize = (minSize) => {
    const filterSize = clothesData.filter(
      (item) => item.size.length >= minSize
    );
    setFilterClothes(filterSize);

    setMinSizes(minSize);
  };

  //  ========== functions ends here ==========//

  const lastPageIndex = currentPage * itemPerPage;
  const firstPageIndex = lastPageIndex - itemPerPage;

  const sliceClothesItem = filterClothes.slice(firstPageIndex, lastPageIndex);
  const pages = [];

  for (let i = 1; i < filterClothes.length / itemPerPage; i++) {
    pages.push(i);
  }

  //======select colors========//
  const availableColors = ["red", "blue", "black", "grey", "white", "green"];

  useEffect(() => {
    if (selectedColors.length === 0) {
      setFilterClothes(clothesData); // Show all if no colors selected
    } else {
      const newFilteredProducts = clothesData.filter(
        (product) =>
          selectedColors.some((color) => product.color.includes(color)) // "OR" logic
      );
      setFilterClothes(newFilteredProducts);
    }
  }, [selectedColors]); // Re-run filter when selectedColors changes

  const handleColorChange = (event) => {
    const color = event.target.value;
    if (event.target.checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    }
  };

 
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row my-7 px-2 md:px-5 gap-6">
        <div className="md:w-56  md:border-r-2 border-green-950  flex justify-center md:flex-col md:justify-start gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="underline">filter by category</h1>
            <div className="flex flex-col px-2  text-xl">
              {uincClothes.map((item) => (
                <span
                  className="cursor-pointer"
                  onClick={() => handlefilterType(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="underline">filter by gender</h1>
            {uincGender.map((item) => (
              <div key={item} className="">
                <button
                  onClick={() => handlefilterGender(item)}
                  className="text-xl cursor-pointer"
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="underline">Filter by Color:</h3>
            {availableColors.map((color) => (
              <label
                className="flex flex-wrap gap-3"
                style={{ color: color }}
                key={color}
              >
                <input
                  type="checkbox"
                  value={color}
                  checked={selectedColors.includes(color)}
                  onChange={handleColorChange}
                  className="bg-red-600"
                />
                {color}
              </label>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
          {sliceClothesItem.map((item) => (
            <div key={item.id} className="shadow-lg group relative">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  loading="priority"
                  alt={item.name}
                  className="w-full  h-48 object-cover rounded-md hover:scale-105 duration-500"
                />
              </div>
              <div className="w-full flex flex-col gap-1 px-2  relative overflow-hidden">
                <h5 className="font-semibold">{item.name}</h5>
                <p className="text-sm">{item.text.substring(0, 150)}</p>
                <div className="flex">
                  <FaStar className="text-green-950" />
                  <FaStar className="text-green-950" />
                  <FaStar className="text-green-950" />
                  <FaStar className="text-green-950" />
                  <FaStar />
                </div>
                <span className="text-xl font-semibold">${item.new_price}</span>

                <div className="bg-green-950 h-36 z-10 shadow-lg absolute bottom-0 right-0 left-0 transition translate-y-40 group-hover:translate-y-0 duration-300">
                  <div className="w-full flex flex-col items-center gap-3 my-3 px-3 capitalize">
                    <p className="text-xl w-full flex justify-between items-center my-1">
                      <span className=" w-full font-semibold">
                        {item.gender}
                      </span>
                      <span>
                        <FaHeart className="text-white animate-pulse text-2xl" />
                      </span>
                    </p>
                    <p className="text-xl  w-full flex justify-between items-center">
                      <span>wishlist</span>
                      <span>
                        <FaWallet className="animate-pulse text-2xl text-white" />
                      </span>
                    </p>
                    <p className="text-xl  w-full flex items-center justify-between">
                      <span>add to cart</span>
                      <button>
                        <FaShoppingCart
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: item.id,
                                name: item.name,
                                image: item.image,
                                new_price: item.new_price,
                                category: item.category,
                                description: item.description,
                                quantity: 1,
                              })
                            )
                          }
                          className="animate-pulse text-2xl text-white"
                        />
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className="w-full flex flex-wrap gap-1 justify-center my-2">
        {pages.map((page) => {
          return (
            <button
              onClick={() => setCurrentPage(page)}
              className="bg-green-950 p-1 text-white rounded-md w-11"
            >
              {page}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
