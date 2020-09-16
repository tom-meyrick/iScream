import React from "react";
import Tag from "./Tag";

export default function Tags({ tags }) {
  return (
    <div className={"tags__container"}>
      {tags.map((tag, i) => {
        return <Tag tag={tag} i={i} key={i} />;
      })}
    </div>
  );
}
