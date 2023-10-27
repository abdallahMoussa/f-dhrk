import React, { useContext } from "react";
import Card from "./Card";
import wing from "../assets/images/wing.png";
import wingLight from "../assets/images/wing2.png";
import ThemeContext from "../context/ThemeContext";

const Cards = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <div className=" pt-44 md:pt-24 mb-20 cont">
      <h2 className="text-center flex justify-center text-4xl font-bold tracking-tight text-red-600  sm:text-5xl">
        <img src={darkmode ? wing : wingLight} className="w-14 mr-2" />
        <span className="block mt-2">إنجازاتنا</span>
        <img
          src={darkmode ? wing : wingLight}
          className="w-14 -scale-x-100 ml-2 "
        />
      </h2>
      <div className=" pt-16 md:pb-2 pb-20 flex flex-wrap md:justify-between  justify-center">
        <Card count={350} title="فرحة عريس" />
        <Card count={450} title="حجز كورة" />
        <Card count={240} title="خروجة تمشية" />
        <Card count={400} title=" قاعدة قهوة" className="" />
        <Card count={320} title="خروجة سينما" className="" />
        <Card count={410} title=" تمرينة جيم" />
      </div>
    </div>
  );
};

export default Cards;
