import "./styles/main.scss";
import React from "react";
import LeafletMap from "./Components/LeafletMap";
import Accordian from "./Components/Accordian";
import SignupForm from "./Components/SignupForm";
import Loaded from "./Components/Loaded";
import Component from "./Components/LeafletMap/";

const App = () => (
  <>
    <div className="page-wrapper">
      <div className={"main__side-panels"}></div>
      <div className={"main__container container"}>
<<<<<<< HEAD
        <Loaded>
          <h1 className={"logo main__elem"}>iScream</h1>
          <LeafletMap className={"main__elem"} />
          <Accordian className={"main__elem"} />
        </Loaded>
=======
        {/* <Loaded> */}
        <h1 className={"logo main__elem"}>iScream</h1>
        {/* <LeafletMap className={"main__elem"} /> */}
        <Component className={"main__elem"} />
        <Accordian className={"main__elem"} />

        {/* </Loaded> */}
>>>>>>> 870e86f11daf5fb0c6c6ae7bfd46b90659dff61a
        {/* <SignupForm className={"main__elem"} /> */}
      </div>
      <div className={"main__side-panels"}> </div>
    </div>
  </>
);

export default App;
