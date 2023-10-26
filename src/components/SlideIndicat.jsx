import React, { useRef, useState } from "react";
import "./Slide.css";

const SlideIndicat = ({ className, img, forward, alt, id }) => {
  const slideRef = useRef();
  const handleVideoClick = (e) => {
    let index = slideRef.current.getAttribute("alt");
    if (index != 8) {
      forward(index);
    }
  };

  return (
    <div
      id={id}
      alt={alt}
      ref={slideRef}
      className={`absolute cursor-pointer duration-300 ${className}`}
    >
      <svg className="svg ">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.462,0.024 C0.486,0,0.526,0,0.55,0.024 L0.988,0.462 C1,0.486,1,0.526,0.988,0.55 L0.55,0.988 C0.526,1,0.486,1,0.462,0.988 L0.024,0.55 C0,0.526,0,0.486,0.024,0.462"></path>
        </clipPath>
      </svg>

      <div onClick={handleVideoClick} className="clipped bg-red-800 ">
        <img className="h-full w-full " src={img} />
      </div>
    </div>
  );
};

export default SlideIndicat;
