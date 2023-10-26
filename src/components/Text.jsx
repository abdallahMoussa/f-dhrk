import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Text = ({ text }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);
  return (
    <>
      {text ? (
        <div dir="rtl" className="w-full min-h-screen pt-20 text-right  ">
          <h1
            className={`${
              show ? "mr-0 " : "-mr-[100%] "
            } md:text-6xl relative max-w-max  hero-text text-3xl font-bold text-red-600 pb-10 duration-300`}
          >
            {text.title}
          </h1>
          <p className="pr-5 md:text-3xl dark:text-white text-slate-800 md:leading-[50px]">
            {text.description}
          </p>
          <div className="w-full button md:h-32 h-20 items-end  flex justify-start md:pr-20 pr-10">
            <Link
              to="signup"
              className="bg-red-800 hover:bg-transparent hover:-translate-y-1 hover:scale-x-105 hover:saturate-150 active:bg-red-950 active:text-white hover:text-red-800 hover:border-red-800 border-2 border-transparent duration-200  md:text-xl text-white rounded-md md:p-2 md:px-4 p-1 px-2 "
            >
              إحنا فى ضهرك
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Text;
