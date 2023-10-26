import React, { useEffect, useRef, useState } from "react";
import DarkmodeButton from "./DarkmodeButton";
import Search from "./Search";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton";
import Join from "./Join";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const [atHome, setAtHome] = useState(true);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const windowEvents = () => {
    let hero = document.getElementById("hero");
    let cards = document.getElementById("cards");
    let mens = document.getElementById("mens");
    let join = document.getElementById("join");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
      if (hero && hero.getBoundingClientRect().top < window.innerHeight / 2) {
        setActive(0);
      }
      if (mens && mens.getBoundingClientRect().top < window.innerHeight / 2) {
        setActive(1);
      }
      if (cards && cards.getBoundingClientRect().top < window.innerHeight / 2) {
        setActive(2);
      }
      if (join && join.getBoundingClientRect().top < window.innerHeight / 2) {
        setActive(3);
      }
    });
    window.addEventListener("click", (e) => {
      if (
        e.target.getAttribute("alt") != "menuButton" &&
        e.target.getAttribute("alt") != "menu"
      ) {
        setIsOpen(false);
      }
    });
  };
  useEffect(() => {
    windowEvents();
  }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname == "/") {
      setAtHome(true);
    } else {
      setAtHome(false);
    }
    windowEvents();
  }, [pathname]);
  return (
    <div
      ref={navRef}
      className={`w-full h-24 fixed z-50 duration-500 ${
        isTop
          ? "bg-transparent -top-40"
          : "bg-white dark:bg-stone-950 shadow-md top-0"
      }  `}
    >
      <div className="navCont w-full m-auto max-w-[1300px] px-10 h-full flex items-center justify-between ">
        <div className="h-full md:w-full w-[100%]  flex justify-start items-center absolute">
          <MenuButton toggleMenu={toggleMenu} />
          <DarkmodeButton />
          <Search className="hidden" />
        </div>
        <div className="menu px-5  w-full flex ">
          {atHome ? (
            <div className="pl-72 hidden md:flex">
              <MenuItem
                alt={3}
                setActive={setActive}
                to="join"
                active={active == 3}
                title="انضملنا"
              />
              <MenuItem
                alt={2}
                setActive={setActive}
                to="cards"
                active={active == 2}
                title="إنجازتنا"
              />
              <MenuItem
                setActive={setActive}
                alt={1}
                to="mens"
                active={active == 1}
                title="رجالتنا"
              />
              <MenuItem
                setActive={setActive}
                alt={0}
                to="hero"
                active={active == 0}
                title="الرئيسية"
              />
            </div>
          ) : (
            <div className="pl-72 hidden md:flex">
              <Link to="/">
                <div alt="menu" className="px-1 py-2">
                  <span
                    alt="menu"
                    className={`tab flex text-xl mx-2 py-1 pb-2 hover:text-red-900  cursor-pointer  dark:text-white`}
                  >
                    <span className="rotate-180 mt-1 block">&#10148;</span>{" "}
                    الرئيسية{" "}
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>

        <Logo />
      </div>
      <div
        alt="menu"
        className={`mobile-nav w-full md:hidden overflow-hidden flex flex-col justify-center duration-300 dark:bg-red-500 bg-slate-300  drop-shadow-md shadow-black ${
          isTop ? "hidden" : ""
        } ${isOpen ? "h-[220px] " : " h-0"} `}
      >
        <div onClick={() => setIsOpen(false)}>
          <MenuItem
            alt={0}
            setActive={setActive}
            active={active == 0}
            title="الرئيسية"
            className=""
            to="hero"
          />
        </div>
        <div onClick={() => setIsOpen(false)}>
          <MenuItem to="mens" active={active == 1} title="رجالتنا" alt="menu" />
        </div>
        <div onClick={() => setIsOpen(false)}>
          <MenuItem
            to="cards"
            active={active == 2}
            title="إنجازتنا"
            alt="menu"
          />
        </div>
        <div onClick={() => setIsOpen(false)}>
          <MenuItem to="join" active={active == 3} title="انضملنا" alt="menu" />
        </div>
        <Search alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
