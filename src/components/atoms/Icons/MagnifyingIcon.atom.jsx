import * as React from "react";

function MagnifyingIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256.001 256.001"
      {...props}
    >
      <path fill="none" d="M0 0H256V256H0z" />
      <circle
        cx={116}
        cy={116}
        r={84}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M175.394 175.4L223.994 224.001"
      />
    </svg>
  );
}

export default MagnifyingIcon;
