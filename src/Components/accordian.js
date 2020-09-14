import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import single from "../single.json";

class Accordian extends Component {
  render() {
    return (
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Card key={single.id}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {single.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="row">
                  <p className="col">{single.rating}</p>
                  <p className="col">{single.priciness}</p>
                </div>
                <img className="rounded-circle" src={single.imgUrl}></img>
                <h5>Bio</h5>
                <p>{single.bio}</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Accordian;
