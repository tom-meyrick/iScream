import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Distance from "./Distance";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import multiple from "../../multiple.json";
import axios from "../../axiosConfig";
import Repeater from "../Repeater";
import Tags from "../Tags";
import Profile from "../Profile";

const styleTab = (i) => {
  const styles = ["pink", "caramel", "chocolate", "blue", "lime"];
  return styles[i % styles.length];
};
const styleBody = (i) => {
  const styles = ["blue", "lime", "pink", "lime", "chocolate"];
  return styles[i % styles.length];
};
const styleProfile = (i) => {
  const styles = ["caramel", "chocolate", "blue", "pink", "lime"];
  return styles[i % styles.length];
};

const Accordian = ({ userPos, vendorID, handleClick, vendors, className }) => {
  return (
    <div className={className}>
      <Accordion activeKey={vendorID}>
        {vendors.map((vendor, index) => (
          <Card key={vendor.id}>
            <Card.Header className={`accord__header bg__${styleTab(index)}`}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={vendor.id}
                id={vendor.id}
                className={"accord__title"}
                onClick={() => handleClick(vendor.id)}
              >
                {vendor.name}
                <div className={"bg__waffle"}></div>
              </Accordion.Toggle>
              <Distance userPos={userPos} vendorPos={vendor.location} />
            </Card.Header>
            <Accordion.Collapse eventKey={vendor.id}>
              <Card.Body className={`accord bg__${styleBody(index)}`}>
                <div className={`acord__body`}>
                  <section className={"accord__section-data"}>
                    <Profile
                      url={vendor.imgUrl}
                      color={styleProfile(index)}
                      alt="An ice cream man"
                    />

                    <div className="icon__star-container">
                      <Repeater
                        value={vendor.rating}
                        src={require("../../assets/star-full.png")}
                        className={"icon__star"}
                        alt={"stars"}
                      />
                    </div>

                    <div className="icon__pound-container">
                      <Repeater
                        value={vendor.priciness}
                        src={require("../../assets/pound-02.png")}
                        className={"icon__pound"}
                        alt={"pound-coin"}
                      />
                    </div>
                  </section>
                  <section className={"accord__section-bio"}>
                    <p>{vendor.bio}</p>
                  </section>
                  <Tags tags={["ice", "cream", "lollies", "flakes"]} />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
