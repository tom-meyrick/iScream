import React, { Component } from "react";
import axios from "../axiosConfig";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
    };
  }

  componentDidMount() {
    axios.get(`/vendors`).then(({ data }) => {
      this.setState({
        vendors: data.data,
      });
    });
  }

  render() {
    const view = {
      lat: 51.4544682,
      lon: -2.5880223,
      zoom: 13,
    };
    return (
      <Map className={"map"} center={[view.lat, view.lon]} zoom={view.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}

export default LeafletMap;
