import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "../axiosConfig";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      longitude: "",
      latitude: "",
      priciness: "",
      rating: "",
      imgUrl: "",
      bio: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleLat = this.handleLat.bind(this);
    this.handleLong = this.handleLong.bind(this);
    this.handlePriciness = this.handlePriciness.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleIceCream = this.handleIceCream.bind(this);
  }
  handleClick = (e) => {
    e.preventDefault();
    let {
      name,
      latitude,
      longitude,
      priciness,
      rating,
      imgUrl,
      bio,
    } = this.state;
    axios
      .post("/vendors/signup", {
        name: name,
        latitude: latitude,
        longitude: longitude,
        priciness: priciness,
        rating: rating,
        imgUrl: imgUrl,
        bio: bio,
      })
      .then(() => {
        this.setState({
          name: "",
          latitude: "",
          longitude: "",
          priciness: "",
          rating: "",
          imgUrl: "",
          bio: "",
          iceCream: "",
        });
      })
      .catch((error) => {
        console.log("Something has gone wrong", error.response);
      });
  };

  handleName(e) {
    this.setState({ name: e.currentTarget.value });
  }
  handleLat(e) {
    this.setState({ latitude: e.currentTarget.value });
  }
  handleLong(e) {
    this.setState({ longitude: e.currentTarget.value });
  }
  handlePriciness(e) {
    this.setState({ priciness: e.currentTarget.value });
  }
  handleRating(e) {
    this.setState({ rating: e.currentTarget.value });
  }
  handleImg(e) {
    this.setState({ imgUrl: e.currentTarget.value });
  }
  handleBio(e) {
    this.setState({ bio: e.currentTarget.value });
  }
  handleIceCream(e) {
    this.setState({ iceCream: e.currentTarget.value });
  }

  render() {
    let { handleClick } = this.props;
    let {
      name,
      latitude,
      longitude,
      priciness,
      rating,
      imgUrl,
      bio,
      iceCream,
    } = this.state;
    return (
      <Form className={this.props.className}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            onChange={this.handleName}
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="formLatitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type="float"
            placeholder="51.4545"
            onChange={this.handleLat}
            value={latitude}
          />
        </Form.Group>
        <Form.Group controlId="formLongitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type="float"
            placeholder="2.5879"
            onChange={this.handleLong}
            value={longitude}
          />
        </Form.Group>
        <Form.Group controlId="formLongitude">
          <Form.Label>Priciness</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number between 1 and 3"
            onChange={this.handlePriciness}
            value={priciness}
          />
        </Form.Group>
        <Form.Group controlId="formRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number between 1 and 5"
            onChange={this.handleRating}
            value={rating}
          />
        </Form.Group>
        <Form.Group controlId="formImg">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="website"
            placeholder="Add an image URL"
            onChange={this.handleImg}
            value={imgUrl}
          />
        </Form.Group>
        <Form.Group controlId="formBio">
          <Form.Label>Biography</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tell us about yourself"
            onChange={this.handleBio}
            value={bio}
          />
        </Form.Group>
        <Form.Group controlId="formIceCream">
          <Form.Label>Ice Cream</Form.Label>
          <Form.Control
            type="text"
            placeholder="Magnum, Zoom, Lemon sorbet..."
            onChange={this.handleIceCream}
            value={iceCream}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleClick(e)}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignupForm;
