import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import single from "../single.json";
import axios from "../axiosConfig";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: [],
    };
  }

  componentDidMount() {
    axios.get(`/${this.id}/data`).then(({ data }) => {
      this.setState({
        loaded: true,
        data: data.data,
      });
    });
  }

  render() {
    let { loaded, data } = this.state;
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
                <img
                  className="rounded-circle"
                  src="../assets/van01.png"
                  alt="An ice cream man"
                ></img>
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

//Completed API component

// class Accordian extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: false,
//       vendors: [],
//     };
//   }

//   componentDidMount() {
//     axios.get(`/${this.id}/data`).then(({ data }) => {
//       this.setState({
//         loaded: true,
//         vendors: data.data,
//       });
//     });
//   }

//   render() {
//     let { loaded, data } = this.state;
//     return !loaded ? (
//       <p>Loading...</p>
//     ) : (
//       <div className="container">
//         {data.map((vendor) => (
//           <Accordion defaultActiveKey="0">
//             <Card key={vendor.id}>
//               <Card.Header>
//                 <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                   {vendor.name}
//                 </Accordion.Toggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey="0">
//                 <Card.Body>
//                   <div className="row">
//                     <p className="col">{vendor.rating}</p>
//                     <p className="col">{vendor.priciness}</p>
//                   </div>
//                   <img
//                     className="rounded-circle"
//                     src={vendor.imgUrl}
//                     alt="An ice cream man"
//                   ></img>
//                   <h5>Bio</h5>
//                   <p>{vendor.bio}</p>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           </Accordion>
//         ))}
//       </div>
//     );
//   }
// }

export default Accordian;
