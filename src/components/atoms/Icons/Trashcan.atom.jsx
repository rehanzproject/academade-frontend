import React from "react";

function Trashcan({ width, height, onClick, className }) {
  const finalClassName = `cursor-pointer ${className}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={finalClassName}
    >
      <path
        opacity="0.6"
        d="M1.42857 23.1111C1.42857 23.8773 1.72959 24.6121 2.26541 25.1539C2.80123 25.6956 3.52795 26 4.28571 26H15.7143C16.472 26 17.1988 25.6956 17.7346 25.1539C18.2704 24.6121 18.5714 23.8773 18.5714 23.1111V5.77778H1.42857V23.1111ZM4.28571 8.66667H15.7143V23.1111H4.28571V8.66667ZM15 1.44444L13.5714 0H6.42857L5 1.44444H0V4.33333H20V1.44444H15Z"
        fill="#262626"
      />
    </svg>
  );
}

export default Trashcan;
