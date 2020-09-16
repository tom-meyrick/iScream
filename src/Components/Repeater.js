import React from "react";

const Repeater = ({ value, src, description, alt }) => {
  const elements = [];
  for (let i = 0; i < value; i += 1) {
    elements.push(
      <img src={src} className={description} alt={alt} key={i}></img>
    );
  }
  return elements;
};

export default Repeater;
