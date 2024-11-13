import React from "react";
import OrderIcon from "../../atoms/Icons/OrderIcon.atom";

function OrderDash({ newOrder }) {
  return (
    <div className="inline-flex flex-col p-2 mx-3 font-bold rounded-xl text-white w-56 bg-[url('./images/bgProfile.jpg')]">
      <div className="flex px-2 my-2 justify-between">
        <h1 className="pb-4 text-2xl">Orders</h1>
        <div className="rounded-full h-9 pt-2 my-2 p-2 bg-white bg-opacity-30">
          <OrderIcon />
        </div>
      </div>
      <p className="text-3xl px-4 py-2">+{newOrder}</p>
    </div>
  );
}

export default OrderDash;
