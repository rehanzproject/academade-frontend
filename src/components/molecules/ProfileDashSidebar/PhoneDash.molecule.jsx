import React from "react";

function PhoneDash({ phone }) {
  return (
    <div className="flex flex-col items-start text-xs bg-light-blue/20 w-full px-3 p-2 my-1 rounded-xl">
      <p className="text-gray-600">Phone</p>
      <p>{phone}</p>
    </div>
  );
}

export default PhoneDash;
