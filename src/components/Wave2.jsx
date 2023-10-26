import React from "react";

const Wave = () => {
  return (
    <div className="wave w-full absolute overflow-hidden bg-slate-200 h-[300px]">
      <svg
        className="bg-red-400 p-0 m-0 w-full h-full dark:fill-[#090c16] fill-slate-100 duration-200 "
        overflow="hidden"
      >
        <g transform="translate(0 -200) scale(1.1)">
          <path
            d="M-4 352.119C115.758 307.622 235.515 263.126 310.182 265.061 384.848 266.995 381.212 361.792 444 363.726 506.788 365.661 597.94 271.348 686.909 276.669 775.879 281.989 933.94 389.602 977.818 395.648 1021.7 401.693 934.667 328.178 950.182 312.943 965.697 297.708 1016.61 299.642 1070.91 304.237 1125.21 308.832 1276 340.511 1276 340.511L1276 340.511"
            className="dark:stroke-[#090c16] stroke-slate-100 duration-200"
            strokeWidth="20"
            strokeMiterlimit="8"
            fill="none"
            fillRule="evenodd"
          />
          <path
            d="M1258.91 341.626 1279 350.561 1279 154-8 154-8 363.963 6.51081 358.379 170.595 293.603 296.728 266.799 341.376 271.266 388.258 328.224 425.093 361.729 461.928 362.846 636.058 290.252 697.45 275.734 811.304 318.173 959.761 391.883 992.132 393 953.064 322.64 964.226 304.771 1040.13 303.654 1191.93 324.874 1244.4 341.626"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
};

export default Wave;
