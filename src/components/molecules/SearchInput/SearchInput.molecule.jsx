import React from "react";
import MagnifyingIcon from "../../atoms/Icons/MagnifyingIcon.atom";

function SearchInput() {
  return (
    <div className="px-4 opacity-50">
      <MagnifyingIcon className="absolute w-4 py-5 mx-4" />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search..."
        className="rounded-md h-10 px-10 border border-gray-500 bg-[#FFDA6A] my-2 py-2"
      />
    </div>
  );
}

export default SearchInput;
