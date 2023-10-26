import * as React from "react";

import "./waves.css";

const Waves = ({ className = "fill-cyan-500", ...props }) => (
  <svg
    className={`svg-waves drop-shadow-md ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28"
    preserveAspectRatio="none"
    {...props}
  >
    <defs>
      <path
        id="waveHref"
        d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
      />
    </defs>
    <g className={`svg-waves__parallax`}>
      <use xlinkHref="#waveHref" x={48} />
      <use xlinkHref="#waveHref" x={48} y={3} />
      <use xlinkHref="#waveHref" x={48} y={5} />
      <use xlinkHref="#waveHref" x={48} y={7} />
    </g>
  </svg>
);

export default Waves;
