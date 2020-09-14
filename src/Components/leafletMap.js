import React, { Component } from "react";
import axios from "../axiosConfig";

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
    };
  }

  componentDidMount() {
    axios.get(`/data`).then(({ data }) => {
      this.setState({
        vendors: data.data,
      });
    });
  }

  render() {
    return <div className="leafletMap" id="mapid"></div>;
  }
}

export default LeafletMap;
