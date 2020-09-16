import React from "react";

export default function Tag({ tag, i }) {
  const colors = ["pink", "caramel", "chocolate", "blue", "lime"];
  const select = i % colors.length;
  return <button className={`tag-${colors[select]}`}>{tag}</button>;
}
