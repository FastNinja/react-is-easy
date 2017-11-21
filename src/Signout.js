import React from "react";
import { Alert } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import logo from "./logo.png";
import * as firebase from "firebase";

export default class Signout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleAlert: false,
      alertMessage: ""
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  signout(userName) {
    firebase
      .auth()
      .signOut()
      .then(x => {
        console.log("signout successfully!");
        this.setState({
          signedOutName: userName,
          visibleAlert: false
        });
      })
      .catch(error => {
        console.error(error);
        var errorMessage = error.message;
        this.setState({
          visibleAlert: true,
          alertMessage: errorMessage
        });
      });
  }
  onDismiss() {
    this.setState({ visibleAlert: false });
  }

  componentDidMount() {
    if (this.props.user) {
      console.log("starting sign out process!");
      this.signout(this.props.user.displayName);
    }
  }

  render() {
    console.log("signout - render, user", this.props.user);
    const { user, signedOutName } = this.props;

    //  this.signout(user.email || user.displayName);

    return (
      <div>
        <div className="text-center mb-4">
          <Link to="/">
            <img src={logo} alt="Logo" width="150" />
          </Link>
        </div>
        <Alert
          color="danger"
          isOpen={this.state.visibleAlert}
          toggle={this.onDismiss}
        >
          {this.state.alertMessage}
        </Alert>
        <div className="text-center">
          <p>You have signed out. {signedOutName}</p>
          <p>Noone can see your data any more</p>
        </div>
        <div className="line  mb-4" />
        <div className="text-center">
          <span>Signed out by mistake?</span>
          <Link className="ml-2" to="/login">
            Login
          </Link>
        </div>
      </div>
    );
  }
}
