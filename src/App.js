import "./styles/main.scss";
import React from "react";
import Heading from "./Components/Heading";
import LeafletMap from "./Components/LeafletMap";
import Accordian from "./Components/Accordian";
import SideBar from "./Components/SideBar";

const App = () => (
  <>
    <div className="container">
      <h1>Pattern Library</h1>
      <hr></hr>
      <h5>Title</h5>
      <Heading />
      <LeafletMap />
      <h5>Accordian</h5>
      {/* <Accordian /> */}
      <h5>SideBar</h5>
      <SideBar />
      <h5>Map</h5>
    </div>
  </>
);

export default App;
