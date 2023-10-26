import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Join = () => {
  return (
    <div className="join overflow-hidden cont py-20 md:flex md:flex-row flex-col w-full duration-200">
      <div className=" mt-32 relative md:w-1/2 flex justify-center items-center">
        <img src={logo} className="w-9/12 relative z-10" />
        <svg
          className="w-[60%] absolute z-0 opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
          }}
          viewBox="0 0 1.136 1.4775"
          x="0px"
          y="0px"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <g>
            <path
              fill="darkred"
              d="M0.534 0.839c0.038,0.025 0.054,0.018 0.1,0.019 0.492,-0.036 0.285,-0.804 0.063,-0.544 -0.085,0.1 -0.254,0.176 -0.25,0.33 0.002,0.071 0.034,0.16 0.088,0.195z"
            />
            <path
              fill="red"
              d="M0.042 0.311c-0.133,0.165 0.082,0.453 0.194,0.441 0.173,-0.018 0.22,-0.231 0.047,-0.413 -0.085,-0.089 -0.148,-0.143 -0.241,-0.027z"
            />
            <path
              fill="#700f0f"
              d="M0.498 1.023c-0.008,-0.052 -0.033,-0.09 -0.066,-0.127 -0.086,-0.097 -0.065,-0.094 -0.178,-0.056 -0.044,0.023 -0.072,0.009 -0.069,0.087 0.008,0.187 0.112,0.16 0.178,0.175 0.078,0.017 0.157,0.072 0.134,-0.078z"
            />
            <path
              fill="#380606"
              d="M0.514 0.107c-0.047,0.016 -0.081,0.039 -0.106,0.073 -0.059,0.077 -0.053,0.133 0.035,0.184 0.105,0.06 0.219,-0.038 0.2,-0.18 -0.014,-0.106 -0.036,-0.108 -0.129,-0.076z"
            />
            <path
              fill="#388656"
              d="M0.981 0.119c-0.023,-0.072 -0.08,-0.101 -0.128,-0.112 -0.065,-0.015 -0.102,-0.006 -0.125,0.065 -0.035,0.107 0.076,0.189 0.167,0.188 0.1,-0.001 0.114,-0.051 0.086,-0.141z"
            />
            <path
              fill="#385600"
              d="M0.673 0.952c-0.085,0.008 -0.087,0.021 -0.08,0.102 0.019,0.201 0.195,0.137 0.224,0.003 0.023,-0.105 -0.054,-0.114 -0.144,-0.105z"
            />
            <path d="M1.083 0.771c-0.069,-0.133 -0.153,-0.054 -0.182,0.043 -0.021,0.07 -0.012,0.099 0.066,0.116 0.095,0.021 0.174,-0.046 0.116,-0.159z" />
            <path d="M1.093 0.561c0.064,-0.083 0.063,-0.226 -0.045,-0.263 -0.095,-0.032 -0.088,0.142 -0.043,0.253 0.026,0.064 0.04,0.071 0.087,0.009z" />
            <path d="M0.326 0.183c0.043,-0.024 0.069,-0.067 0.041,-0.116 -0.03,-0.055 -0.074,-0.024 -0.11,0.012 -0.044,0.044 -0.025,0.063 -0.014,0.082 0.028,0.046 0.056,0.037 0.083,0.023z" />
          </g>
        </svg>
      </div>
      <div dir="rtl" className="mt-20 join-text md:w-1/2 text-right">
        <div className="head-title max-w-max">
          <div className="bg-label-1 bg-red-950 h-16 max-h-max max-w-max px-2">
            <h1 className="text-4xl z-10 relative pt-1 text-white -skew-x-12 font-[500] ">
              انضملنا دلوقتى
            </h1>
            <div className="bg-label-2 absolute -top-1 left-0 z-0 bg-red-700  w-full h-full"></div>
          </div>
        </div>
        <p className="text-4xl pt-10 dark:text-slate-200 leading-[50px]">
          خليك جزء من عيلة{" "}
          <i className="text-red-900 dark:text-red-500">فى ضهرك </i> وساعد
          أخواتك وأحصل على المساعده .
        </p>
        <div className="btns mt-16 flex gap-5 w-full justify-end">
          <Link
            to="login"
            className="px-4 py-2 rounded-md bg-red-900 text-white hover:text-red-900 hover:bg-transparent hover:border-red-900 border-2 border-transparent duration-200 text-2xl"
          >
            تسجيل دخول
          </Link>
          <Link
            to="signup"
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:text-red-500 hover:bg-transparent hover:border-red-500 border-2 border-transparent duration-200 text-2xl"
          >
            إنشاء حساب
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
