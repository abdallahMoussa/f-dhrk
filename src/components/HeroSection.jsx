import React, { useEffect, useState } from "react";
import "./Slide.css";
import Slides from "./Slides";

import img1 from "../assets/images/farah.jpg";
import img2 from "../assets/images/fight.jpg";
import img3 from "../assets/images/football.jpg";
import img4 from "../assets/images/walking.jpg";
import img5 from "../assets/images/cofe.jpg";
import img6 from "../assets/images/drive.jpg";
import img7 from "../assets/images/gym.jpg";
import img8 from "../assets/images/cinema.jpg";
import bg from "../assets/images/bg.png";
import Texts from "./Texts";
import Waves from "./Waves";
const HeroSection = () => {
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];
  const texts = [
    {
      id: "slide-indicat-1",
      title: "معاك فى فرحتك",
      description:
        "ملكش اصحاب وفرحك قرب او فرح حد عزيز عليك ومحتاج رجاله توجب معاك",
    },
    {
      id: "slide-indicat-2",
      title: "معاك فى خناقتك",
      description:
        "لو معاك حوار والاخصام حواليك كتيره ومحتاج راجل سندال يقف معاك",
    },

    {
      id: "slide-indicat-3",
      title: "معاك فى فرقتك",
      description:
        " عندك حجز كوره والعدد مش مكمل وعايز شباب حريفه تسد معاك فى الحجز",
    },
    {
      id: "slide-indicat-4",
      title: "معاك فى تمشيتك",
      description:
        "زهقان وعايز تتمشي ومحتاج حد تتمشي معاه وتحكوا وتدردشوا مع بعض",
    },
    {
      id: "slide-indicat-5",
      title: "معاك فى قعدتك",
      description:
        "غاوي قاعده قهاوى ومش لاقى حد يشاركك فيها وعايز حد يقعد معاك وتقضوها طاوله ودومينو للصبح",
    },
    {
      id: "slide-indicat-6",
      title: "معاك فى سواقتك",
      description:
        "بتحب تتمشي بالعربيه بس محتاج حد معاك يكون وانسك ويشاركك جنونك ودرفتاتك ",
    },
    {
      id: "slide-indicat-7",

      title: " معاك فى لياقتك",
      description:
        "عايز تنزل الجيم بس وتعمل فورمتك بس مافيش حد معاك يشجعك ويقولك عاااش ياوحش",
    },
    {
      id: "slide-indicat-8",
      title: "معاك فى خروجتك",
      description:
        "بتحب السينما والافلام ومتابع كل جديد بس مافيش حد من اصحابك بيشاركك نفس الاهتمام",
    },
  ];
  const [active, setActive] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);

  const forward = (index) => {
    let target = document.querySelector(`.slide-${index}`);
    let slide = document.querySelector(`.active`);
    if (target && slide) {
      slide.classList.remove("active");
      slide.classList.add(`slide-${index}`);

      target.classList.remove(`slide-${index}`);
      target.classList.add("active");

      target.setAttribute("alt", imgs.length);
      slide.setAttribute("alt", index);

      setActive((prev) => !prev);
    }
  };
  const move = (ind) => {
    if (ind == imgs.length) {
      ind = 1;
    }
    forward(ind);
    let timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      // move(++ind);
    }, 5000);
  };
  useEffect(() => {
    setTimeout(() => {
      move(1);
    }, 5000);
  }, []);

  return (
    <>
      <div
        id="hero"
        className=" dark:bg-[#090c16] bg-slate-100 heroSection max-h-[700px]  relative  w-full duration-200"
        style={{
          backgroundImage: "url(" + bg + ")",
          backgroundPosition: "right top",
        }}
      >
        <div className="w-full h-full dark:bg-[#090c16]/80 bg-slate-100/95 duration-200 ">
          <div className="slides-texts  pt-10 flex cont">
            <Slides imgs={imgs} forward={forward} />
            <Texts texts={texts} active={active} />
          </div>
        </div>
      </div>
      <Waves className="rotate-180 dark:fill-[#090c16] fill-slate-100 " />
    </>
  );
};

export default HeroSection;
