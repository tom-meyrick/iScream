import "./styles/main.scss";
import React from "react";
import Heading from "./Components/Heading";
import LeafletMap from "./Components/LeafletMap";
import Accordian from "./Components/Accordian";
import SideBar from "./Components/SideBar";
import SignupForm from "./Components/SignupForm";

const App = () => (
  <>
    <div className="page-wrapper">
      <div className={"main__side-panels"}> </div>
      <div className={"main__container container"}>
        <Heading />
        <LeafletMap />
        <Accordian />
        <SideBar />
        <h5>Form</h5>
        <SignupForm />
      </div>
      <div className={"main__side-panels"}> </div>
    </div>
  </>
);

export default App;
