import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as generalActionCreators from "../../redux/modules/general";
// initialize firebase
import "../../firebaseInit";
import firebase from "firebase";
// socket
import socketClient from "../../socketClient";

import { Authentication, Dashboard } from "../../containers";

// navigator.serviceWorker.register('sw.js');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // auth management
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await this.props.setSocketId(socketClient.id);
        await this.props.setUsername(user.email);
      }
      await this.props.setIsSignedIn(!!user);
    });
    // ask for permission to send notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  render() {
    return (
      <div className="home-container">
        {this.props.isSignedIn ? <Dashboard /> : <Authentication />}
      </div>
    );
  }
}

function mapStateToProps({ general }) {
  return {
    isSignedIn: general.isSignedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...generalActionCreators,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
