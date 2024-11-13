import * as React from "react";

function DashboardIcon(props) {
  return (
    <svg
      width={27}
      height={28}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 27.5a2.89 2.89 0 01-2.12-.882A2.883 2.883 0 010 24.5v-21c0-.825.294-1.532.882-2.12A2.883 2.883 0 013 .5h21a2.89 2.89 0 012.12.882c.587.588.881 1.294.88 2.118v21a2.89 2.89 0 01-.882 2.12A2.883 2.883 0 0124 27.5H3zm7.5-3v-9H3v9h7.5zm3 0H24v-9H13.5v9zM3 12.5h21v-9H3v9z"
        fill="#262626"
      />
    </svg>
  );
}

export default DashboardIcon;
