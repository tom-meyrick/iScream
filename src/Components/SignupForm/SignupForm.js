import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lat: "",
      lon: "",
      priciness: 0,
      rating: 0,
      imgUrl: "",
      bio: "",
      icecreams: "",
    };

    this.handleName = this.handleName.bind(this);
    this.handleLat = this.handleLat.bind(this);
    this.handleLong = this.handleLong.bind(this);
    this.handlePriciness = this.handlePriciness.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleIceCream = this.handleIceCream.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state });
    this.setState({
      name: "",
      lat: "",
      lon: "",
      priciness: 0,
      rating: 0,
      imgUrl: "",
      bio: "",
      icecreams: "",
    });
  }

  handleName(e) {
    this.setState({ name: e.currentTarget.value });
  }
  handleLat(e) {
    this.setState({ lat: e.currentTarget.value });
  }
  handleLong(e) {
    this.setState({ lon: e.currentTarget.value });
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
    this.setState({ icecreams: e.currentTarget.value });
  }

  render() {
    let {
      name,
      lat,
      lon,
      priciness,
      rating,
      imgUrl,
      bio,
      icecreams,
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
          <Form.Control type="text" onChange={this.handleLat} value={lat} />
        </Form.Group>
        <Form.Group controlId="formLongitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control type="text" onChange={this.handleLong} value={lon} />
        </Form.Group>
        <Form.Group controlId="formPriciness">
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
            value={icecreams}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignupForm;
