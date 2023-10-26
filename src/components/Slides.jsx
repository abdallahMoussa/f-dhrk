import React from "react";

import SlideIndicat from "./SlideIndicat";

const Slides = ({ forward, imgs }) => {
  return (
    <div className="slides min-w-[700px] z-[3] h-[520px] relative ">
      <SlideIndicat
        forward={forward}
        alt="1"
        className="slide slide-1"
        id="slide-indicat-1"
        img={imgs[0]}
      />
      <SlideIndicat
        className="slide slide-2"
        alt="2"
        forward={forward}
        id="slide-indicat-2"
        img={imgs[1]}
      />
      <SlideIndicat
        forward={forward}
        alt="3"
        className="slide slide-3"
        id="slide-indicat-3"
        img={imgs[2]}
      />
      <SlideIndicat
        forward={forward}
        alt="4"
        className="slide slide-4"
        id="slide-indicat-4"
        img={imgs[3]}
      />
      <SlideIndicat
        forward={forward}
        alt="5"
        className="slide slide-5"
        id="slide-indicat-5"
        img={imgs[4]}
      />
      <SlideIndicat
        forward={forward}
        alt="6"
        className="slide slide-6"
        id="slide-indicat-6"
        img={imgs[5]}
      />
      <SlideIndicat
        forward={forward}
        alt="7"
        className="slide slide-7"
        id="slide-indicat-7"
        img={imgs[6]}
      />

      <SlideIndicat
        forward={forward}
        alt="8"
        className="slide active"
        id="slide-indicat-8"
        img={imgs[7]}
      />

      {/* <Slide className="w-[400px] h-[400px]" /> */}
    </div>
  );
};

export default Slides;
