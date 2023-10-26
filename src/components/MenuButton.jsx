import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const MenuButton = ({ toggleMenu }) => {
  const [start, setStart] = useState(true);

  const startHandler = (e) => {
    setStart(false);
    toggleMenu();

    setTimeout(() => {
      setStart(true);
    }, 100);
  };
  return (
    <div className="w-10">
      {start ? (
        <svg
          className="text-red-700 text-4xl md:hidden cursor-pointer duration-300"
          onClick={startHandler}
          alt="menuButton"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          >
            <path d="M5 5L19 19" alt="menuButton">
              <animate
                fill="freeze"
                attributeName="d"
                dur="0.4s"
                values="M5 5L19 19;M5 5L19 5"
              />
            </path>
            <path d="M12 12H12" opacity="0" alt="menuButton">
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.2s"
                dur="0.4s"
                values="M12 12H12;M5 12H19"
              />
              <set attributeName="opacity" begin="0.2s" to="1" />
            </path>
            <path d="M5 19L19 5" alt="menuButton">
              <animate
                fill="freeze"
                attributeName="d"
                dur="0.4s"
                values="M5 19L19 5;M5 19L19 19"
              />
            </path>
          </g>
        </svg>
      ) : null}
    </div>
  );
};

export default MenuButton;
