import React from "react";

function ThreeDotIcon({ width, height, className, onClick }) {
  const finalClassName = `cursor-pointer ${className}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={finalClassName}
      onClick={onClick}
      fill="none"
      viewBox="0 0 5 19"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill="#000" />
      <circle cx="2.5" cy="9.5" r="2.5" fill="#000" />
      <circle cx="2.5" cy="16.5" r="2.5" fill="#000" />
    </svg>
  );
}

export default ThreeDotIcon;
