import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="67"
      fill="none"
      viewBox="0 0 72 67"
    >
      <g filter="url(#filter0_d_873_14459)">
        <rect
          width="64"
          height="58"
          x="4"
          y="0.5"
          fill="#FFDA6A"
          rx="16"
          shapeRendering="crispEdges"
        />
        <path
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M55 33.548V23.024L36 12.5 17 23.024l19 10.524 9.88-4.858v11.334c0 3.238-4.56 6.476-9.88 6.476-5.32 0-9.88-3.238-9.88-6.476V28.69"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_873_14459"
          width="72"
          height="66"
          x="0"
          y="0.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_873_14459"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_873_14459"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
