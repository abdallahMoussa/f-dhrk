import React, { useEffect, useState } from "react";
import Text from "./Text";

const Texts = ({ texts, active }) => {
  const [text, setText] = useState({ id: "", title: "", description: "" });
  useEffect(() => {
    let active = document.querySelector(".active");
    if (active) {
      let temp = texts.filter((text) => text.id == active.getAttribute("id"));
      setText(temp[0]);
    }
  }, [active]);

  return (
    <div className="texts absolute  z-[2] w-full pl-[650px] right-10">
      <Text text={text} />
    </div>
  );
};

export default Texts;
