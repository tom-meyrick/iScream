import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import multiple from "../../multiple.json";
import axios from "../../axiosConfig";
import Repeater from "../Repeater";
// import Profile from "./Profile";
//Test
class Accordian extends Component {
  styleTab = (i) => {
    const styles = ["pink", "caramel", "chocolate", "blue", "lime"];
    return styles[i % styles.length];
  };
  styleBody = (i) => {
    const styles = ["blue", "lime", "pink", "lime", "chocolate"];
    return styles[i % styles.length];
  };
  styleProfile = (i) => {
    const styles = ["caramel", "chocolate", "blue", "pink", "lime"];
    return styles[i % styles.length];
  };

  render() {
    return (
      <div className={this.props.className}>
        <Accordion defaultActiveKey={`${this.vendorID}`}>
          {multiple.map((vendor, index) => (
            <Card key={vendor.id}>
              <Card.Header
                className={`accord-head accord-${this.styleTab(index)}`}
              >
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={vendor.id}
                  id={vendor.id}
                  className={"accord-title"}
                >
                  {vendor.name}
                  <div className={"accord-waffle-texture"}></div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={vendor.id}>
                <Card.Body className={`accord accord-${this.styleBody(index)}`}>
                  <div className={`acord-body`}>
                    <div className={"accord-row-1"}>
                      <img
                        className={`van-img-${this.styleProfile(index)}`}
                        src={vendor.imgUrl}
                        alt="An ice cream man"
                      />
                      <div className="star-container">
                        <Repeater
                          value={vendor.rating}
                          src={require("../../assets/star-full.png")}
                          description={"star--full"}
                          alt={"stars"}
                        />
                      </div>

                      <div className="">
                        <Repeater
                          value={vendor.priciness}
                          src={require("../../assets/pound-02.png")}
                          description={"pound"}
                          alt={"pound-coin"}
                        />
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
