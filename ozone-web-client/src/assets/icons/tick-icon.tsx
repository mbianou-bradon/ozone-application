import React from "react";

export default function TickIcon({ ...props }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m2.75 8.75l3.5 3.5l7-7.5"
        />
      </svg>
    </div>
  );
}
