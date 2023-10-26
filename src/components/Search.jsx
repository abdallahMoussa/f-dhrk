import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const Search = ({ className, alt }) => {
  const inputRef = useRef();
  const [foucsed, setFoucsed] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", function () {
        setFoucsed(true);
      });

      inputRef.current.addEventListener("blur", function () {
        setFoucsed(false);
      });
    }
  }, []);
  const searchHandler = () => {};
  return (
    <div
      alt="menu"
      className={`px-3 relative justify-start md:flex  ${className} `}
    >
      <span
        alt="menu"
        className={`text-2xl cursor-pointer hover:scale-105 dark:text-white text-red-700 absolute top-1 rigth-0 ml-1 duration-75 ${
          foucsed ? " z-30" : "z-0"
        }`}
        onClick={searchHandler}
      >
        <Icon icon="gala:search" />
      </span>
      <input
        alt="menu"
        ref={inputRef}
        className={` ${
          foucsed ? "bg-red-200/20 " : " bg-transparent pl-10 "
        } text-sm relative z-10  px-2 overflow-hidden text-red-950 dark:text-white py-1 w-8 h-8 focus:w-full outline-offset-0 text-right focus:outline-red-600 outline-none rounded-full  foucs:border-red-900 focus:border-none duration-300`}
        placeholder={foucsed ? "بحث" : ""}
      />
    </div>
  );
};

export default Search;
