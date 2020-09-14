import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import multiple from "../multiple.json";
import axios from "../axiosConfig";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      vendors: [],
    };
  }

  componentDidMount() {
    axios.get(`/${this.id}/data`).then(({ data }) => {
      this.setState({
        loaded: true,
        vendors: data.data,
      });
    });
  }

  repeatStars(value) {
    const stars = [];
    for (let i = 0; i < value; i += 1) {
      stars.push(<img src="../assets/star-full.png" alt="stars"></img>);
    }
    return stars;
  }

  repeatPounds(value) {
    const pounds = [];
    for (let i = 0; i < value; i += 1) {
      pounds.push(<img src="../assets/star-empty.png" alt="pounds"></img>);
    }
    return pounds;
  }

  render() {
    // let { loaded, vendors } = this.state;
    return (
      <div className="container">
        <Accordion defaultActiveKey="0">
          {multiple.map((vendor, index) => (
            <Card key={vendor.id}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                  {vendor.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  <div className="row">{this.repeatStars(vendor.rating)}</div>
                  <div className="row">
                    {this.repeatPounds(vendor.priciness)}
                  </div>
                  <img
                    className="rounded-circle"
                    src={"../assets/van01.png"}
                    alt="An ice cream man"
                  ></img>
                  <h5>Bio</h5>
                  <p>{vendor.bio}</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default Accordian;
