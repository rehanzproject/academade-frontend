import React from "react";

function EmailDash({ text }) {
  return (
    <div className="flex flex-col items-start text-xs bg-light-blue/20 w-full px-3 p-2 my-1 rounded-xl">
      <p className="text-gray-600">Email</p>
      <p>{text}</p>
    </div>
  );
}

export default EmailDash;
