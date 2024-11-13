import React from "react";
import { makeRupiahValue } from "../../../utils/helper/helperMethod";
function Earning({ balance }) {
  const price = makeRupiahValue(balance);
  return (
    <div className="bg-light-blue flex flex-col items-start my-2 rounded-xl px-4">
      <h1 className="text-base">Earning</h1>
      <p className="font-bold text-lg">{price}</p>
    </div>
  );
}

export default Earning;
