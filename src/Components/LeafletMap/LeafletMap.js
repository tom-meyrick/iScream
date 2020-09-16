import React, { Component } from "react";
import axios from "../../axiosConfig";
import multiple from "../../multiple.json";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import vanMarker from "../../assets/marker01.png";
import usrMarker from "../../assets/marker03.png";

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      userPos: {
        lat: 0.0,
        lon: 0.0,
      },
    };

    this.getLocale = this.getLocale.bind(this);
  }

  getLocale() {
    return navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        userPos: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        },
      });
    });
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      this.getLocale();
    } else {
      console.log("Not Available");
    }

    axios.get(`/vendors`).then(({ data }) => {
      this.setState({
        vendors: data.data,
      });
    });
  }

  vendorMarker = L.icon({
    iconUrl: vanMarker,
    iconAnchor: [48, 92],
    popupAnchor: [0, -85],
  });
  usrMarker = L.icon({
    iconUrl: usrMarker,
    iconAnchor: [13, 13],
  });

  render() {
    const { handleClick } = this.props;
    const { vendorID } = this.state;

    const view = {
      lat: 51.454711,
      lon: -2.587923,
      zoom: 13,
    };

    // 51.454711, -2.587923
    const { vendors, userPos } = this.state;

    return (
      <Map
        className={"map" + " " + this.props.className}
        center={[view.lat, view.lon]}
        zoom={view.zoom}
        minZoom={10}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[userPos.lat, userPos.lon]}
          icon={this.usrMarker}
        ></Marker>
        {multiple.map((vendor) => {
          const { latitude, longitude } = vendor.location;
          return (
            <Marker
              position={[latitude, longitude]}
              icon={this.vendorMarker}
              key={vendor.id}
            >
              <Popup key={vendor.id}>
                <p>Name: {vendor.name}</p>
                <p>Rating: {vendor.rating}/5</p>
                <a
                  onClick={() => handleClick(vendor.id)}
                  href={"#" + vendor.id}
                >
                  Click here
                </a>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    );
  }
}

export default LeafletMap;
