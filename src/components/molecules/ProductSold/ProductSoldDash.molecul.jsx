import React from "react";
import ProductSoldIcon from "../../atoms/Icons/ProductSoldIcon.atom";

function ProductSoldDash({ newProductSold }) {
  return (
    <div className="inline-flex flex-col p-2 mx-3 font-bold rounded-xl text-white w-56 bg-[url('/images/bgProfile.jpg')]">
      <div className="flex px-2 my-2 justify-between">
        <h1 className="pb-4 text-xl">Product Sold</h1>
        <div className="rounded-full h-9 mt-2 p-2 bg-white bg-opacity-30">
          <ProductSoldIcon />
        </div>
      </div>
      <p className="text-3xl px-4 py-2">{newProductSold}</p>
    </div>
  );
}

export default ProductSoldDash;
