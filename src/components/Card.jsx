import React, { useContext, useEffect, useRef } from "react";
import wing from "../assets/images/wing.png";
import wing2 from "../assets/images/wing2.png";

import "./Card.css";
import ThemeContext from "../context/ThemeContext";

const Card = ({ count, title, className }) => {
  const countRef = useRef();
  var counter = 0;
  const { darkmode } = useContext(ThemeContext);
  const increase = () => {
    if (countRef.current && counter != count) {
      countRef.current.innerHTML = ++counter;
      setTimeout(() => {
        increase();
      }, 9 - count / 100);
    }
  };

  useEffect(() => {
    increase();
  }, []);
  return (
    <div className={`flex card md:w-78 flex-col md:my-10 mb-10 mx-1 `}>
      <div className=" items-center w-full flex justify-between ">
        <img src={!darkmode ? wing : wing2} className="md:w-32 w-20 " />
        <span className=" min-w-[70px] flex justify-between pt-2">
          <span
            ref={countRef}
            className="text-3xl duration-200 text-right  font-bold text-red-800 dark:text-red-300 drop-shadow font-mono  shadow-black"
          >
            {counter}
          </span>
          <span className="text-3xl block font-[500] text-red-800 dark:text-red-300 drop-shadow shadow-black">
            +
          </span>

          <br />
        </span>
        <img
          src={!darkmode ? wing : wing2}
          className="md:w-32 w-20 -scale-x-100 "
        />
      </div>
      <span className="text-3xl -mt-2 font-[500] text-red-600 drop-shadow shadow-black">
        {title}{" "}
      </span>
    </div>
  );
};

export default Card;
