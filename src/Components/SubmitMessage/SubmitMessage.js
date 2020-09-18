import React, { Component } from "react";

class SubmitMessage extends Component {
  render() {
    let { handleClick } = this.props;
    return (
      <>
        <h1>Your application was a success!</h1>
        <p>
          Click{" "}
          <a href="#/" onClick={handleClick}>
            here
          </a>{" "}
          to return to the main page.
        </p>
      </>
    );
  }
}

export default SubmitMessage;
