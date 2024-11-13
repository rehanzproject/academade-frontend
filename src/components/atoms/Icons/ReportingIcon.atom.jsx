import * as React from "react";

function ReportingIcon(props) {
  return (
    <svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27 4.263v2.842h-4.263v4.263h-2.842V7.105h-4.263V4.263h4.263V0h2.842v4.263H27zm-4.263 19.895H2.842V4.263h8.526V1.421H2.842A2.85 2.85 0 000 4.263v19.895A2.85 2.85 0 002.842 27h19.895a2.85 2.85 0 002.842-2.842v-8.526h-2.842v8.526zm-5.684-8.526v5.684h2.842v-5.684h-2.842zm-5.685 5.684h2.842V9.947h-2.842v11.369zm-2.842 0V12.79H5.684v8.526h2.842z"
        fill="#262626"
      />
    </svg>
  );
}

export default ReportingIcon;
