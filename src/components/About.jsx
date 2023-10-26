import React, { useContext, useEffect, useRef, useState } from "react";
import Card from "./Card";
import Mens from "./Mens";
import Cards from "./Cards";
import Join from "./Join";
const About = () => {
  const [showCards, setShowCards] = useState(false);
  const [showMens, setShowMens] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const cardsRef = useRef();
  const mensRef = useRef();
  const joinRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (cardsRef.current) {
        let section = cardsRef.current.getBoundingClientRect();
        if (
          section.top <= window.innerHeight / 3 &&
          section.top > window.innerHeight * -1
        ) {
          setShowCards(true);
        } else {
          setShowCards(false);
        }
      }
      if (mensRef.current) {
        let section = mensRef.current.getBoundingClientRect();
        if (
          section.top <= window.innerHeight * 0.6 &&
          section.top > window.innerHeight * -1
        ) {
          setShowMens(true);
        } else {
          setShowMens(false);
        }
      }
      if (joinRef.current) {
        let section = joinRef.current.getBoundingClientRect();
        if (section.top <= window.innerHeight * 0.5) {
          setShowJoin(true);
        } else {
          setShowJoin(false);
        }
      }
    });
  }, []);
  return (
    <>
      <div id="mens" className="mens min-h-screen" ref={mensRef}>
        {showMens ? <Mens /> : null}
      </div>
      <div id="cards" className="cards min-h-screen" ref={cardsRef}>
        {showCards ? <Cards /> : null}
      </div>
      <div id="join" className="join min-h-screen" ref={joinRef}>
        {showJoin ? <Join /> : null}
      </div>
    </>
  );
};

export default About;
