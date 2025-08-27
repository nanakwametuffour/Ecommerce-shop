import React, { useState } from "react";

export default function CategoriesFilter({ category, handleFilterUnique }) {
  



  //  setCategories(uniqueCategory)
  

  //========filter shop buttons =========//

  return (
    <div className="flex  mx-3 md:mx-0 md:pl-0 font-semibold capitalize justify-start w-full ">
      <button className="" onClick={()=>handleFilterUnique(category)}>{category}</button>
    </div>
  );
}
