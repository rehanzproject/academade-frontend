import React from "react";

function DateOfBirth({ birthDate }) {
  return (
    <div className="flex flex-col items-start text-xs bg-light-blue/20 w-full px-3 p-2 my-1 rounded-xl">
      <p className="text-gray-600">Date Of Birth</p>
      <p>{birthDate}</p>
    </div>
  );
}

export default DateOfBirth;
