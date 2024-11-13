import React from "react";

function PlusIcon({ width, height, className, onClick }) {
  const finalClassName = `cursor-pointer ${className}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={finalClassName}
      onClick={onClick}
      fill="none"
      viewBox="0 0 30 31"
    >
      <path
        fill="#262626"
        d="M21.924 16.654h-5.77v5.769a1.154 1.154 0 11-2.307 0v-5.77h-5.77a1.154 1.154 0 110-2.307h5.77v-5.77a1.154 1.154 0 012.308 0v5.77h5.769a1.154 1.154 0 010 2.308z"
        opacity="0.6"
      />
      <circle
        cx="15"
        cy="15.5"
        r="14"
        stroke="#000"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}

export default PlusIcon;
