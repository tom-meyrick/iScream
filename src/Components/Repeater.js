import React from "react";

const Repeater = ({ value, src, alt, className }) => {
  const elements = [];
  for (let i = 0; i < value; i += 1) {
    elements.push(
      <img src={src} className={className} alt={alt} key={i}></img>
    );
  }
  return elements;
};

export default Repeater;
