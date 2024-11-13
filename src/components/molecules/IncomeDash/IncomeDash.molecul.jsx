import React from "react";
import IncomeIcon from "../../atoms/Icons/IncomeIcon.atom";

function IncomeDash({ newIncome }) {
  return (
    <div className="inline-flex flex-col p-2 mx-3 font-bold rounded-xl text-white w-56 bg-[url('./images/bgProfile.jpg')]">
      <div className="flex px-2 my-2 justify-between">
        <h1 className="pb-4 text-2xl">Income</h1>
        <div className="rounded-full h-9 pt-2 my-2 p-2 bg-white bg-opacity-30">
          <IncomeIcon />
        </div>
      </div>
      <p className="text-3xl px-4 py-2">Rp {newIncome}</p>
    </div>
  );
}

export default IncomeDash;
