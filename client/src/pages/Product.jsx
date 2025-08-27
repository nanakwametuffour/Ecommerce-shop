import React, { useEffect, useState } from "react";
import { productsData } from "../assets/shoppProduct.js";
import { FaShoppingCart, FaStar } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice.js";
import Categories from "../components/CategoriesFilter.jsx";
import CategoriesFilter from "../components/CategoriesFilter.jsx";

export default function Product() {
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [categories, setCategories] = useState([]);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
const [selectedCategories, setSelectedCategories] = useState([]);
  // ============ pagination start here===========//

  const lastPageIndex = currentPage * itemPerPage;
  const firstPageIndex = lastPageIndex - itemPerPage;

  const sliceProducts = filteredProducts.slice(firstPageIndex, lastPageIndex);
  const pages = [];

  for (let i = 1; i < filteredProducts.length / itemPerPage; i++) {
    pages.push(i);
  }
  // ============ pagination ends here===========//

  // ============ category buttons start here===========//
  const uniqueCategory = [
    "All",
    ...new Set(productsData.map((item) => item.category)),
  ];

  const handleFilterUnique = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(productsData);
    } else {
      const filterItem = productsData.filter(
        (item) => item.category === category
      );
      setFilteredProducts(filterItem);
    }
  };

  // ============ category buttons ends here===========//

  // ============ range start here===========//

  const handleMin = (e) => {
    setMinPrice(Number(e.target.value));
    const filteredTtems = sliceProducts.filter(
      (product) => product.new_price < maxPrice && product.new_price < maxPrice
    );
    setFilteredProducts(filteredTtems);
  };
  const handleMax = (e) => {
    setMaxPrice(Number(e.target.value));
    const filteredProducts = sliceProducts.filter(
      (product) => product.new_price > minPrice && product.new_price < maxPrice
    );
    setFilteredProducts(filteredProducts);
  };

  // ============ range ends here===========//

  // ============ checkbox start here===========//
  const uniqueBrands = [
    ...new Set(productsData.map((product) => product.brand)),
  ];

     
  useEffect(() => {
    if (selectedBrands.length === 0) {
      setFilteredProducts(productsData);
    } else {
      const newFilteredProducts = productsData.filter((product) =>
        selectedBrands.includes(product.brand)
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [selectedBrands, productsData]);

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    }
  };


 

  // ============ checkbox ends here===========//

  return (
    <div className="">
      <div className="w-full flex flex-col md:flex-row my-5 px-2 md:px-5 gap-6 ">
        <div className="flex flex-row flex-wrap gap-5 md:flex-col w-full md:w-44 md:border-r-2 border-green-950">
          <h2 className="font-semibold underline">Filtered Products:</h2>

          <div className="grid grid-cols-3 md:grid-cols-1 text-xs gap-5 md:gap-1 md:text-base">
            {uniqueCategory.map((category) => (
              <CategoriesFilter
                category={category}
                handleFilterUnique={handleFilterUnique}
              />
            ))}
          </div>
          <div className="">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold underline">Filtered Price:</h2>
            <div className="">
              <label htmlFor="minPrice">Min Price:</label>
              <input onChange={handleMin} type="range" value={minPrice} />
            </div>
            <div className="">
              <label htmlFor="maxPrice">Max Price:</label>
              <input onChange={handleMax} type="range" value={maxPrice} />
            </div>
          </div>
        
            <div>
              <h2 className="underline">Filter by Brand</h2>
              {uniqueBrands.map((brand) => (
                <div key={brand} className="flex gap-1">
                  <input
                    type="checkbox"
                    id={brand}
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={handleBrandChange}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}

            
            
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 ">
          {sliceProducts.map((item) => (
            <div key={item.id} className="flex flex-col w-full gap-2 shadow-lg h-[400px]">
              <div className="">
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-full object-cover h-[200px]"
                />
              </div>
              <div className="flex flex-col px-2 gap-1">
                <span className="text-base font-semibold">{item.category}</span>
                <span>{item.name}</span>
                 <span>{item.brand}</span>
                <p className="line-clamp-2 text-sm">{item.description}</p>
                <div className="">
                  <div className="flex gap-1">
                    <FaStar className="font-semibold text-green-950" />
                    <FaStar className="font-semibold text-green-950" />
                    <FaStar className="font-semibold text-green-950" />
                    <FaStar className="font-semibold text-green-950" />
                    <FaStar className="font-semibold " />
                  </div>
                  <span className=" text-green-950 font-semibold">
                    ${item.new_price}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xl my-1">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          image: item.image,
                          name: item.name,
                          category: item.category,
                          description: item.description,
                          new_price: item.new_price,
                          quantity: 1,
                        })
                      )
                    }
                    className="text-green-950 font-semibold capitalize flex items-center"
                  >
                    <FaShoppingCart />
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className="w-full flex flex-wrap justify-center my-2 px-2">
        {pages.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(item)}
              className="border border-white p-1 rounded-md w-11 bg-green-950 text-white font-semibold"
            >
              {item}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
