import React from "react";

export default function Profile({ url, color }) {
  return <img src={url} className={`van-img border-${color}`} />;
}
