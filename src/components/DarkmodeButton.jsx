import { Switch } from "@headlessui/react";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const DarkmodeButton = ({ className = "" }) => {
  let { toggleDarkmode, darkmode } = useContext(ThemeContext);
  return (
    <>
      <div className={`${className}`}>
        <Switch
          checked={darkmode}
          onChange={toggleDarkmode}
          className={`relative inline-flex overflow-hidden items-center py-2 p-2 ml-5 rounded-full transition-colors duration-300
           focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none ${
             darkmode
               ? `bg-slate-700 text-slate-400 `
               : `bg-blue-400 text-blue-200 `
           }`}
        >
          <span className="sr-only">Disable dark mode</span>
          <img
            className={`transform transition-transform ${
              darkmode ? `scale-[1.5] duration-300` : `scale-0 duration-500`
            } w-6 `}
            srcSet="https://img.icons8.com/?size=512&amp;id=NohWIHr9e7K3&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=NohWIHr9e7K3&amp;format=png 1x"
            src="https://img.icons8.com/?size=512&amp;id=NohWIHr9e7K3&amp;format=png 2x"
            alt="Moon icon"
            width="256"
            height="256"
          ></img>
          {/* 
          <img
            className={`ml-3.5 transform transition-transform ${
              darkmode ? `scale-0 duration-500` : `scale-100 duration-300`
            } w-6 opacity-60`}
            srcSet="https://img.icons8.com/?size=512&amp;id=NohWIHr9e7K3&amp;format=png 2x, https://img.icons8.com/?size=512&amp;id=NohWIHr9e7K3&amp;format=png 1x"
            src="https://img.icons8.com/?size=512&amp;id=NohWIHr9e7K3&amp;format=png 2x"
            alt="Moon icon"
            width="256"
            height="256"
          ></img> */}

          <span
            className={`absolute p-1 top-0.5 left-0.5 w-8 h-8 m-[2px] bg-white rounded-full flex items-center justify-center transition duration-500 transform ${
              darkmode && `translate-x-[2.625rem] scale-[.6] opacity-70`
            }`}
          >
            <img
              className={`flex-none transition duration-500 transform  w-full ${
                darkmode ? `opacity-0 scale-0` : `opacity-100 scale-100`
              }`}
              srcSet="https://img.icons8.com/?size=2x&amp;id=OkWsH5jFVMve&amp;format=png 2x, https://img.icons8.com/?size=1x&amp;id=OkWsH5jFVMve&amp;format=png 1x"
              src="https://img.icons8.com/?size=2x&amp;id=OkWsH5jFVMve&amp;format=png 2x"
              alt="Sun icon"
              loading="lazy"
              width="110"
              height="110"
            />
          </span>
        </Switch>
      </div>
    </>
  );
};

export default DarkmodeButton;
