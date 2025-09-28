import React from "react";
const HollowKnight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="64"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 66 68"
    >
      <g filter="url(#a)">
        <path
          fill="#fff"
          d="M42.748 11.5c-7.2-4.4-16.333-1.833-20 0-1-.5-2.5-2.5-.5-6.5s1.167-5 .5-5c-7.6 1.2-8.5 12.5-3 18-.833 6.833-.021 17.5 13.479 18 16-1.5 13.021-15 13.021-18 7-8 2-16 .5-17s-4-.5-4 1c2 4.5 1.5 8 0 9.5"
        />
      </g>
      <path
        fill="#373737"
        d="M30.02 25.451c.444 2.726.183 6.05-1.997 6.404s-4.388-2.06-4.832-4.786-.435-4.489 1.745-4.843 4.64.5 5.084 3.225m6.17-.503c-.443 2.726-.182 6.05 1.998 6.404s4.388-2.06 4.832-4.786.435-4.489-1.745-4.843-4.64.5-5.084 3.225"
      />
      <defs>
        <filter
          id="a"
          width="65.656"
          height="68"
          x=".227"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_220" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend
            in2="effect1_dropShadow_1_220"
            result="effect2_dropShadow_1_220"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend
            in2="effect2_dropShadow_1_220"
            result="effect3_dropShadow_1_220"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend
            in2="effect3_dropShadow_1_220"
            result="effect4_dropShadow_1_220"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation=".5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend
            in2="effect4_dropShadow_1_220"
            result="effect5_dropShadow_1_220"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_1_220"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HollowKnight;
