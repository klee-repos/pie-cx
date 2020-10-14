import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as generalActionCreators from "../../redux/modules/general";

// socket
import socketClient from "../../socketClient";


class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.showNotification = this.showNotification.bind(this);
  }

  showNotification() {
    var options = {
      body: "This is the body of the Notification",
      icon: "",
      dir: "auto",
      data: {
        socketId: this.props.socketId,
      },
      actions: [
        { action: "like", title: "Like", data: "test" },
        { action: "reply", title: "Reply" },
      ],
    };
    // new Notification("Hey", options);
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification("test", options);
    });
  }

  componentDidMount() {
    socketClient.on("message", (message) => {
      console.log(message);
      this.showNotification();
    });
  }

  render() {
    return (
      <div className="bottom-bar">
        <div className="bottom-bar-box">
        <div className="bottom-bar-hero">
        <button className="standard-button" onClick={this.showNotification}>
          Click to show notification
        </button>
        </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ general }) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...generalActionCreators,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
