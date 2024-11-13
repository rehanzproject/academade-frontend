import React from "react";

function ContactInformation({ name, text }) {
  return (
    <div className="flex flex-col items-start text-xs bg-[#6EA8FE] w-full px-3 p-2 my-1 rounded-xl">
      <p className="opacity-60">{name}</p>
      <p>{text}</p>
    </div>
  );
}

export default ContactInformation;
