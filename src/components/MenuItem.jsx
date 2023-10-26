import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const MenuItem = ({ to, title, active = false, className, setActive, alt }) => {
  const linkTab = () => (
    <div onClick={() => setActive(alt)} alt="menu" className="px-1 py-2">
      <span
        alt="menu"
        className={`tab text-xl mx-2 py-1 pb-2  cursor-pointer  ${
          active
            ? "active-tab border-b-2 border-red-700 text-red-700 "
            : " dark:text-white"
        } ${className}`}
      >
        {title}
      </span>
    </div>
  );

  return <a href={"#" + to}>{linkTab()}</a>;
};

export default MenuItem;
