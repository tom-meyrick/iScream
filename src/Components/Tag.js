import React from "react";

let count = 0;

export default function Tag({ tag }) {
  const colors = ["pink", "blue", "chocolate", "vanilla", "lime"];
  console.log(count);
  count += 1;
  const select = count % colors.length;
  return <button className={`tag-${colors[select]}`}>{tag}</button>;
}
