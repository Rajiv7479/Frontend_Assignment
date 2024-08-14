import React, { useState } from "react";

import { data } from "../data";
import Card from "./Card";

const Products = () => {
  //   console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="container mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {data.map((product) => {
            return (
              <div key={product.product_id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className=" grid grid-rows-4 grid-flow-col gap-x-8 gap-y-8">

    //   </div>
    // </div>
  );
};

export default Products;
