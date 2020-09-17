import React from "react";
import Loaded from "./Loaded";

export default function PageWrap({ children }) {
  return (
    <div className="page-wrapper">
      <div className={"main__side-panels"}></div>
      <div className={"main__container container"}>
        <Loaded>
          <h1 className={"logo main__elem"}>iScream</h1>
          {children}
        </Loaded>
      </div>
      <div className={"main__side-panels"}> </div>
    </div>
  );
}
