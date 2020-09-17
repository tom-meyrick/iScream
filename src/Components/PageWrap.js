import React from "react";
import Loaded from "./Loaded";

export default function PageWrap({ children }) {
  return (
    <div className="page-wrapper">
      <div className={"main__side-panels"}></div>
      <div className={"main__container container"}>
        <Loaded>
          <header className={"logo main__elem"}>
            <h1 className="logo">iScream</h1>
          </header>
          {children}
        </Loaded>
      </div>
      <div className={"main__side-panels"}> </div>
    </div>
  );
}
