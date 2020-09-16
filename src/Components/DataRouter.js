import React, { useState } from "react";
import LeafletMap from "./LeafletMap/LeafletMap";
import Accordian from "./Accordian/Accordian";

// Acts as parent to map and accordion
// Clicking in map passes the id to DataRouter
// DataRouter passes this id into Accordion's
// Update when click in accordion and map
// Pass function to accordion using onClick

function DataRouter() {
  const [vendorID, setVendorID] = useState(0);

  function handleCaptureID(value) {
    console.log(value);
  }

  return (
    <>
      <LeafletMap captureID={handleCaptureID} />
      <Accordian />
    </>
  );
}

export default DataRouter;
