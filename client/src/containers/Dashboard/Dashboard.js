import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as generalActionCreators from "../../redux/modules/general";

import firebase from "firebase";

import { TopBar, BottomBar } from "../../containers";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  async logout() {
    try {
      firebase.auth().signOut();
    } catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <div className="dashboard-box">
        <div className="left-bar">
          <span>Pie CX</span>
        </div>
        <div className="right-bar">
          <TopBar />
          <BottomBar />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
