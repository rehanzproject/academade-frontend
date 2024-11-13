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
      <g filter="url(#filter0_d_300_7455)">
        <rect
          width="64"
          height="58"
          x="4"
          y="0.5"
          fill="#75B798"
          rx="16"
          shapeRendering="crispEdges"
        />
        <path
          fill="#262626"
          d="M48.75 28.444v-9.5l-4.484 2.238a8.39 8.39 0 01-1.583 7.21 8.488 8.488 0 01-2.968 2.373 8.545 8.545 0 01-3.715.846 8.545 8.545 0 01-3.715-.846 8.488 8.488 0 01-2.968-2.373 8.39 8.39 0 01-1.583-7.21l-6.609-3.293L36 10.5l14.875 7.389v10.555H48.75zM36 25.278l-4.25-2.111c0 2.322 1.913 4.222 4.25 4.222 2.337 0 4.25-1.9 4.25-4.222L36 25.277zm5.844-7.558l-5.504-2.787-5.716 2.893 5.525 2.786 5.695-2.892zM36 33.722c5.674 0 17 2.808 17 8.445V48.5H19v-6.333c0-5.637 11.326-8.445 17-8.445zm0 4.011c-6.375 0-12.962 3.083-12.962 4.434v2.322h25.924v-2.322c0-1.351-6.65-4.434-12.962-4.434z"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_300_7455"
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
            result="effect1_dropShadow_300_7455"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_300_7455"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
