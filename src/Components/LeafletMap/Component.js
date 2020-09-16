import React, { useEffect } from "react";
import axios from "../../axiosConfig";
import multiple from "../../multiple.json";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import vanMarker from "../../assets/marker01.png";
import usrMarker from "../../assets/marker03.png";

const vendorMarker = L.icon({
  iconUrl: vanMarker,
  iconAnchor: [48, 92],
  popupAnchor: [0, -85],
});

const userMarker = L.icon({
  iconUrl: usrMarker,
  iconAnchor: [13, 13],
});

const view = {
  lat: 51.454711,
  lon: -2.587923,
  zoom: 13,
};

export default function Component({ handleMount, userPos, handleClick }) {
  console.log(userPos);
  //component did mount equivilent
  useEffect(() => {
    debugger;
    handleMount();
  }, []);

  return (
    <Map
      className={"map" + " " + "main__elem"}
      center={[view.lat, view.lon]}
      zoom={view.zoom}
      minZoom={10}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[userPos.lat, userPos.lon]} icon={userMarker}></Marker>
      {multiple.map((vendor) => {
        const { latitude, longitude } = vendor.location;
        return (
          <Marker
            position={[latitude, longitude]}
            icon={vendorMarker}
            key={vendor.id}
          >
            <Popup key={vendor.id}>
              <p>Name: {vendor.name}</p>
              <p>Rating: {vendor.rating}/5</p>
              <a onClick={() => handleClick(vendor.id)} href={"#" + vendor.id}>
                Click here
              </a>
            </Popup>
          </Marker>
        );
      })}
    </Map>
  );
}
