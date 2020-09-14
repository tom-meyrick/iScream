import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import multiple from "../multiple.json";
import axios from "../axiosConfig";
import Profile from "./Profile";

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

<<<<<<< HEAD
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
=======
  repeatElements(value, src) {
    const elements = [];
    for (let i = 0; i < value; i += 1) {
      elements.push(<img src={src} alt="stars"></img>);
    }
    return elements;
>>>>>>> feature/accordian
  }

  styleTab = (i) => {
    const styles = ["pink", "caramel", "chocolate", "blue", "vanilla"];
    return styles[i % styles.length];
  };
  styleBody = (i) => {
    const styles = ["blue", "vanilla", "pink", "vanilla", "chocolate"];
    return styles[i % styles.length];
  };
  styleProfile = (i) => {
    const styles = ["caramel", "chocolate", "blue", "pink", "vanilla"];
    return styles[i % styles.length];
  };

  render() {
    // let { loaded, vendors } = this.state;
    return (
      <div className="container">
        <Accordion defaultActiveKey="0">
          {multiple.map((vendor, index) => (
            <Card key={vendor.id}>
              <Card.Header className={`accord-${this.styleTab(index)}`}>
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                  <div className="accord-title">{vendor.name}</div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
<<<<<<< HEAD
                  <div className="row">{this.repeatStars(vendor.rating)}</div>
                  <div className="row">
                    {this.repeatPounds(vendor.priciness)}
=======
                  <div className="row">
                    {this.repeatElements(vendor.rating, "asset")}
                  </div>
                  <div className="row">
                    {this.repeatElements(vendor.priciness, "asset")}
>>>>>>> feature/accordian
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
