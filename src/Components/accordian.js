import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import single from "../single.json";
import multiple from "../multiple.json";
import axios from "../axiosConfig";
import Profile from "./Profile";

// class Accordian extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: false,
//       data: [],
//     };
//   }

//   componentDidMount() {
//     axios.get(`/${this.id}/data`).then(({ data }) => {
//       this.setState({
//         loaded: true,
//         data: data.data,
//       });
//     });
//   }

//   render() {
//     let { loaded, data } = this.state;
//     return (
//       <div className="container">
//         <Accordion defaultActiveKey="0">
//           <Card key={single.id}>
//             <Card.Header>
//               <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                 {single.name}
//               </Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey="0">
//               <Card.Body>
//                 <div className="row">
//                   <p className="col">{single.rating}</p>
//                   <p className="col">{single.priciness}</p>
//                 </div>
//                 <img
//                   className="rounded-circle"
//                   src="../assets/van01.png"
//                   alt="An ice cream man"
//                 ></img>
//                 <h5>Bio</h5>
//                 <p>{single.bio}</p>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//         </Accordion>
//       </div>
//     );
//   }
// }

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
    let { loaded, vendors } = this.state;
    return (
      <div className="container">
        <Accordion defaultActiveKey="0">
          {multiple.map((vendor, index) => (
            <Card key={vendor.id}>
              <Card.Header className={`accord-${this.styleTab(index)}`}>
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                  {vendor.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <Card.Body className={`accord-${this.styleBody(index)}`}>
                  <div className="accord-body-row-1">
                    <Profile
                      url={vendor.imgUrl}
                      color={this.styleProfile(index)}
                    />
                    <p className="col">{vendor.rating}</p>
                    <p className="col">{vendor.priciness}</p>
                  </div>

                  <div className={"accord-bio"}>
                    <p>{vendor.bio}</p>
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
