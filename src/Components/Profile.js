import React from "react";

export default function Profile({ url, color, alt }) {
  return <img src={url} className={`van-img-${color}`} alt={alt} />;
}
