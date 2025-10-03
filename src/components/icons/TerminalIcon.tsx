import * as React from "react";

const TerminalIcon = ({ className, props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="68"
    height="68"
    fill="none"
    viewBox="0 0 68 68"
    {...props}
    className={className}
  >
    <rect width="66" height="66" x="1" y="1" fill="#030000" rx="13"></rect>
    <rect
      width="66"
      height="66"
      x="1"
      y="1"
      stroke="url(#paint0_linear_538_531)"
      strokeWidth="2"
      rx="13"
    ></rect>
    <rect width="54" height="54" x="7" y="7" fill="#262626" rx="8"></rect>
    <path
      fill="#fff"
      d="M19.374 19.278 13.6 16.37v-2.294l7.936 4.395v1.784L13.6 24.648v-2.293l5.774-2.91zm13.158 8.684h-9.123v-1.793h9.123zm9.818-11.593-5.774 2.91v.166l5.774 2.91v2.293l-7.937-4.394V18.47l7.937-4.395z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_538_531"
        x1="34"
        x2="34"
        y1="-1.097"
        y2="69.097"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBEBEB"></stop>
        <stop offset="1" stopColor="#767574"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default TerminalIcon;
