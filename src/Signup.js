import React from "react";
import { Button, Form, Input, Alert } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import logo from "./logo.png";
import * as firebase from "firebase";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleAlert: false,
      alertMessage: ""
    };

    this.onSignupClick = this.onSignupClick.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSignupClick() {
    this.signup(this.name.value, this.email.value, this.password.value);
  }

  signup(name, email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        return user.updateProfile({
          displayName: name
        });
      })
      .then(x => {
        this.setState({ redirectToLoggedIn: true });
      })
      .catch(error => {
        console.error(error);
        var errorCode = error.code;
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

  render() {
    const { redirectToLoggedIn } = this.state;
    if (redirectToLoggedIn) {
      return <Redirect to="/inside" />;
    }

    return (
      <Form className="form-login">
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
        <Input
          type="name"
          name="name"
          id="name"
          placeholder="Your Name"
          className="mb-4"
          innerRef={name => {
            this.name = name;
          }}
        />
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email Address"
          className="mb-4"
          innerRef={email => {
            this.email = email;
          }}
        />
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Create a Password"
          className="mb-4"
          innerRef={password => {
            this.password = password;
          }}
        />
        <div className="text-center mb-4">
          <small>
            <span>By signing up, you agree to our</span>
            <Link className="ml-2" to="/terms_and_privacy">
              Terms & Privacy Policy
            </Link>
          </small>
        </div>

        <Button
          className="btn-block  mb-4"
          color="primary"
          // type="submit"
          size="lg"
          onClick={() => this.onSignupClick()}
        >
          <strong>Sign up</strong>
        </Button>

        <div className="line  mb-4" />
        <div className="text-center">
          <span>Already have an account?</span>
          <Link className="ml-2" to="/login">
            Login
          </Link>
        </div>
      </Form>
    );
  }
}
