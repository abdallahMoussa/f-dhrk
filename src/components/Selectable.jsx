import React from "react";
import { useState } from "react";

import logo from "../assets/images/logo.png";

const initData = [
  "حجز كورة",
  "حضور افراح",
  "اعمال بلطجه",
  "قعدة قهوة",
  "تمشية عربية",
  "تمرينة جيم",
];
const Selectable = () => {
  const [options, setOptions] = useState(initData);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const slelectHandler = ({ target }) => {
    let index = target.getAttribute("alt");
    let tempSelected = [...selected];
    tempSelected.push(options[index]);
    setSelected([...tempSelected]);
    let tempOptions = [...options];
    tempOptions.splice(index, 1);
    setOptions([...tempOptions]);
  };

  const removerHandler = ({ target }) => {
    let option = target.getAttribute("alt");
    let tempSelected = [...selected];
    tempSelected = selected.filter((s) => s != option);
    setSelected([...tempSelected]);
    let tempOptions = [...options];
    tempOptions.push(option);
    setOptions([...tempOptions]);
  };
  const openMenuHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full  flex flex-col items-center h-64 mx-auto">
      <div className="w-full ">
        <div className="flex flex-col items-center relative">
          <div className="w-full  svelte-1l8159u">
            <div className="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
              <div className="flex flex-auto flex-wrap">
                {selected.map((s, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-full text-red-700 bg-red-100 border border-red-300 "
                  >
                    <div className="text-xs font-normal leading-none max-w-full flex-initial">
                      {s}{" "}
                    </div>
                    <div className="flex flex-auto flex-row-reverse">
                      <div>
                        <svg
                          onClick={removerHandler}
                          alt={s}
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-x cursor-pointer hover:text-red-950 rounded-full w-4 h-4 ml-2"
                        >
                          <line
                            onClick={removerHandler}
                            alt={s}
                            x1="18"
                            y1="6"
                            x2="6"
                            y2="18"
                          ></line>
                          <line
                            onClick={removerHandler}
                            alt={s}
                            x1="6"
                            y1="6"
                            x2="18"
                            y2="18"
                          ></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex-1">
                  <input
                    onFocus={() => setOpen(true)}
                    // onBlur={() => setOpen(false)}
                    placeholder={
                      selected.length ? "" : "الماساعدة اللى ممكن تقدمها"
                    }
                    className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                  />
                </div>
              </div>
              <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                <div className="cursor-pointer pt-1 w-6 h-6 text-gray-600 outline-none focus:outline-none">
                  <svg
                    onClick={openMenuHandler}
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-up w-4 h-4"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {open ? (
            <div className="absolute shadow top-[90%] bg-white z-40 w-full lef-0 rounded max-h-[165px] overflow-y-auto svelte-5uyqqj">
              <div className="flex flex-col w-full">
                {options.map((op, index) => (
                  <div
                    key={index}
                    onClick={slelectHandler}
                    className="cursor-pointer w-full text-slate-700 border-gray-100 rounded-t border-b hover:bg-teal-100"
                  >
                    <div className="flex w-full items-center  border-transparent border-l-2 relative hover:border-teal-100">
                      <div className="w-full items-center flex">
                        <div
                          alt={index}
                          className="p-2 w-full h-full leading-6 text-right pr-4  "
                        >
                          {op}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <img className="w-[30%] mt-10" src={logo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Selectable;
