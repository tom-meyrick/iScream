import React, { Component } from "react";

class Loaded extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.handleLoad();
    }
  }

  render() {
    const { children, loaded } = this.props;
    return loaded ? (
      children
    ) : (
      <div class="loading-wrapper">

      <span class="loader"></span>
    
      <p class="loading-paragraph">Loading...</p>
    </div>
    );
  }
}
export default Loaded;
