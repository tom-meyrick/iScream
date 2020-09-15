import React, { Component } from "react";
import axios from "../axiosConfig";
import multiple from "../multiple.json";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import marker from "../assets/marker01.png";

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

  marker = L.icon({
    iconUrl: marker,
    iconAnchor: [48, 92],
  });

  render() {
    const view = {
      lat: 51.454711,
      lon: -2.587923,
      zoom: 13,
    };

    // 51.454711, -2.587923
    const { vendors } = this.state;
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
        {multiple.map((vendor) => {
          const { latitude, longitude } = vendor.location;
          return (
            <Marker
              className={"vendor-marker"}
              position={[longitude, latitude]}
              icon={this.marker}
            >
              <Popup>
                <p>Name: {vendor.name}</p>
                <p>Rating: {vendor.rating}/5</p>
                <a onClick={console.log} href={"#" + vendor.id}>
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
