import React from "react";

export default function ChevronIcon({ ...props }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15 6l-6 6l6 6"
        />
      </svg>
    </div>
  );
}
