import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as generalActionCreators from "../../redux/modules/general";

import firebase from "firebase";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  async login() {
    try {
      var provider = new firebase.auth.GoogleAuthProvider();
      // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      let results = await firebase.auth().signInWithPopup(provider);
      await this.props.setUsername(results.user.email);
      console.log(results);
    } catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <div className="auth-box">
        <div className="hero-auth">
          <span className="auth-text">Pie CX</span>
          <button className="standard-button" onClick={this.login}>
            Log In with Google
          </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
