import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as generalActionCreators from "../../redux/modules/general";

import firebase from "firebase";

class TopBar extends Component {
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
      <div className="top-bar">
        <div className="top-bar-left"></div>
        <div className="top-bar-right">
          <div className="top-bar-right-buttons">
            <button className="standard-button" onClick={this.logout}>
              Log-out
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

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
