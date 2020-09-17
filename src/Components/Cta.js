import React from "react";
import { Link } from "react-router-dom";

export default function Cta({ className }) {
  return (
    <div className={"footer " + className}>
      <p className={"footer__text"}>are you a vendor?</p>
      <Link to="/signup">
        <h3 className={"footer__cta"}>work with us</h3>
      </Link>
    </div>
  );
}
