import React, { useEffect } from "react";
import axios from "../../axiosConfig";
import multiple from "../../multiple.json";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import vanMarker from "../../assets/marker01.png";
import usrMarker from "../../assets/marker03.png";
import { Link } from "react-router-dom";

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

const styleProfile = (i) => {
  const styles = ["caramel", "chocolate", "blue", "pink", "lime"];
  return styles[i % styles.length];
};

export default function Component({
  handleMount,
  vendors,
  userPos,
  handleClick,
}) {
  //component did mount equivilent
  useEffect(() => {
    handleMount();
  }, []);

  return (
    <Map
      className={"map" + " " + "main__elem"}
      center={[view.lat, view.lon]}
      zoom={view.zoom}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[userPos.lat, userPos.lon]} icon={userMarker}></Marker>
      {vendors.map((vendor, i) => {
        return (
          <Marker
            position={vendor.location}
            icon={vendorMarker}
            key={vendor.id}
          >
            <Popup key={vendor.id}>
              <Link
                onClick={() => handleClick(vendor.id)}
                href={"#" + vendor.id}
              >
                <img
                  src={vendor.imgUrl}
                  className={`map__popup-img-${styleProfile(i)}`}
                />
              </Link>
            </Popup>
          </Marker>
        );
      })}
    </Map>
  );
}
