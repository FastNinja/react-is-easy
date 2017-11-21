import React from "react";
import { Button, Form, Label, Input, Alert } from "reactstrap";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import logo from "./logo.png";
import * as firebase from "firebase";
import "./Loader.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleAlert: false,
      alertMessage: "",
      inProgress: false
    };

    console.log("Hello! I am login component");

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onLoginClick() {
    console.log(this.password.value);
    console.log(this.email.value);
    this.login(this.email.value, this.password.value);
  }

  login(email, password) {
    this.setState({
      inProgress: true
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(x => {
        this.setState({
          redirectToLoggedIn: true,
          visibleAlert: false,
          inProgress: false
        });
      })
      .catch(error => {
        console.error(error);
        var errorCode = error.code;
        var errorMessage = error.message;

        this.setState({
          inProgress: false,
          visibleAlert: true,
          alertMessage: errorMessage
        });
      });
  }

  onDismiss() {
    this.setState({ visibleAlert: false });
  }

  render() {
    var user = this.props.user;

    const { redirectToLoggedIn, inProgress } = this.state;
    if (user) {
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

        {inProgress ? (
          <div className="loader">Verifing your details...</div>
        ) : null}
        <Input
          autoFocus={true}
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
          placeholder="Password"
          className="mb-4"
          innerRef={password => {
            this.password = password;
          }}
        />
        <Label check>
          <Input className="mr-1 mb-4" type="checkbox" />Remember me
        </Label>
        <Button
          className="btn-block  mb-4"
          color="primary"
          // type="submit" -- FOR SOME REASON THIS TYPE RELOADS THE WHOLE PAGE - THAT IS NOT HOW IT IS SUPPOSED TO WORK
          size="lg"
          onClick={() => this.onLoginClick()}
        >
          <strong>Login</strong>
        </Button>
        <div className="text-center mb-4">
          <small>
            <Link to="/forgot_password">Forgot Password? </Link>
          </small>
        </div>
        <div className="line  mb-4" />
        <div className="text-center">
          <span>Don't have an account?</span>
          <Link className="ml-2" to="/signup">
            Sign Up
          </Link>
        </div>
      </Form>
    );
  }
}
