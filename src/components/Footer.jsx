import React from "react";
import labelImg from "../assets/images/label footer.png";
import logo from "../assets/images/logo.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="w-full pb-10 md:h-36 relative bg-slate-300 dark:bg-stone-950 mt-10 md:mt-20 ">
      <div className="cont md:flex justify-between flex-col">
        <div className="labels md:h-0 h-32 ">
          <div className=" absolute left-0 -top-[9px] w-20 h-32 ">
            <img src={labelImg} alt="label" className="top-0 w-full h-full" />
            <Icon
              icon="entypo-social:facebook"
              className="absolute text-white z-20 top-10 left-5 text-5xl cursor-pointer opacity-60 hover:opacity-100 duration-200"
            />
          </div>
          <div className=" absolute left-24 -top-[9px] w-20 h-32 ">
            <img src={labelImg} alt="label" className="w-full h-full " />
            <Icon
              icon="fa:youtube-square"
              className="absolute text-white z-20 top-10 left-5 text-5xl cursor-pointer opacity-60 hover:opacity-100 duration-200"
            />
          </div>
          <div className=" absolute left-48 -top-[9px] w-20 h-32 ">
            <img src={labelImg} alt="label" className=" w-full h-full " />
            <Icon
              icon="mdi:instagram"
              className="absolute text-white z-20 top-10 left-5 text-5xl cursor-pointer opacity-60 hover:opacity-100 duration-200"
            />
          </div>
        </div>
        <div className="slogin flex justify-end ">
          <div className="text-right dark:text-slate-100 text-slate-800 pr-10 flex items-center md:ml-[260px]">
            <p className="">
              تجمع شبابي من جميع انحاء الجمهورية <br /> هدفه مساعده الشباب اللى
              بتحس بوحدة ودايما حاسة ان ملهمش اصحاب ولا حد جمبهم
            </p>
          </div>
          <img src={logo} className="w-36 max-h-[150px] mt-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
