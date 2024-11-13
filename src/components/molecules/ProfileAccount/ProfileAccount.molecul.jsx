import React from "react";
import pict from "/images/picture.avif";
function ProfileAccount({ name }) {
  return (
    <div>
      <img src={pict} alt="" className="h-20 w-20 rounded-full mx-auto" />
      <p className="font-normal py-4 border-black border-b text-lg">{name}</p>
    </div>
  );
}

export default ProfileAccount;
