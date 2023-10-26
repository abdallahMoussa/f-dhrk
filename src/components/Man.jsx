import React from "react";
import label from "../assets/images/label.png";

const Man = ({ stars = 5, name, pic, bio, category }) => {
  return (
    <div className="rounded-lg man relative block hover:saturate-[1.2] duration-200 hover:border-red-900 border-2 border-transparent cursor-pointer bg-gray-200 dark:bg-slate-500 p-6 shadow-sm sm:p-8">
      <img src={label} className="absolute w-28 h-10 -top-[9.5px] left-0" />
      <span className="absolute w-28 h-10 font-bold dark:text-white -top-1 left-0 text-sm">
        {category}
      </span>
      <div className="flex items-center gap-4">
        <img
          alt="Man"
          src={pic}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <div className="flex justify-center gap-0.5 text-red-900">
            {Array(stars)
              .fill(1)
              .map((star, index) => {
                return (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                );
              })}
          </div>

          <p className="mt-0.5 text-lg font-medium  text-gray-900">{name}</p>
        </div>
      </div>

      <p className="mt-4 dark:text-slate-300 text-gray-700 select-none">
        {bio}
      </p>
    </div>
  );
};

export default Man;
