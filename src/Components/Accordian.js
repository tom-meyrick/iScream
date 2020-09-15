import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import multiple from "../multiple.json";
import axios from "../axiosConfig";
// import Profile from "./Profile";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      vendors: [],
    };
  }

  componentDidMount() {
    axios.get(`/vendors`).then(({ data }) => {
      this.setState({
        loaded: true,
        vendors: data.data,
      });
    });
  }

  repeatElements(value, src, description, alt) {
    const elements = [];
    for (let i = 0; i < value; i += 1) {
      elements.push(<img src={src} className={description} alt={alt}></img>);
    }
    return elements;
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
      <div className={this.props.className}>
        <Accordion defaultActiveKey="0">
          {multiple.map((vendor, index) => (
            <Card key={vendor.id}>
              <Card.Header
                className={`accord-head accord-${this.styleTab(index)}`}
              >
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={vendor.id}
                >
                  <h2 className="accord-title">{vendor.name}</h2>
                  <div class={"accord-waffle-texture"}></div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={vendor.id}>
                <Card.Body className={`accord accord-${this.styleBody(index)}`}>
                  <div className={`acord-body`}>
                    <div className={"accord-row-1"}>
                      <img
                        className={`van-img-${this.styleProfile(index)}`}
                        src={require("../assets/van01.png")}
                        alt="An ice cream man"
                      />
                      <div className="star-container">
                        {this.repeatElements(
                          vendor.rating,
                          require("../assets/star-full.png"),
                          "star--full",
                          "stars"
                        )}
                      </div>
                      <div class="w-100"></div>
                      <div className="col">
                        {this.repeatElements(
                          vendor.priciness,
                          require("../assets/pound-02.png"),
                          "pound",
                          "pound coin"
                        )}
                      </div>
                    </div>
                    <p className={"accord-bio"}>{vendor.bio}</p>
                  </div>
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
