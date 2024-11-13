import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logoo.png";

function IconAcademade() {
  return (
    <Link className="flex items-center  cursor-pointer" to="/dashboard">
      <img src={logo} alt="Academade" className="w-36 h-20" />
    </Link>
  );
}

export default IconAcademade;
