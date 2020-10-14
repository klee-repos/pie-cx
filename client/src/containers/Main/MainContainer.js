import React, { Component } from "react";

import "../../css/main.css";

class MainContainer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default MainContainer;
