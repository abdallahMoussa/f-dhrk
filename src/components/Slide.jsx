import React, { useRef, useState } from "react";
import "./Slide.css";
import videoFile from "../assets/images/farah.mp4";
import { Icon } from "@iconify/react";

const Slide = ({ className }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    <div className={className}>
      <svg className="svg">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.462,0.024 C0.486,0,0.526,0,0.55,0.024 L0.988,0.462 C1,0.486,1,0.526,0.988,0.55 L0.55,0.988 C0.526,1,0.486,1,0.462,0.988 L0.024,0.55 C0,0.526,0,0.486,0.024,0.462"></path>
        </clipPath>
      </svg>

      <div onClick={handleVideoClick} className="clipped ">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          id="video"
          controls={false}
          className="h-[400px] -ml-[150px]  absolute "
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <span
          className={`absolute ${!isPlaying ? "overlay" : ""}  text-7xl flex
          justify-center items-center z-20 w-[400px] h-[400px]`}
        >
          {!isPlaying ? (
            <span className=" cursor-pointer hover:saturate-200 hover:scale-105 duration-200">
              <Icon icon="carbon:play-filled" className="text-red-800" />
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default Slide;
