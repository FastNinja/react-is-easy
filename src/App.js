import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Inside from "./Inside";
import Signout from "./Signout";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { init as firebaseInit } from "./firebase/firebase";
import * as firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    firebaseInit();

    firebase.auth().onAuthStateChanged(user => {
      console.log("onAuthStateChangedfor user", user);
      this.setState({
        user: user
      });
    });

    console.log("constructor of App");
  }
  componentDidlMount() {
    console.log("App did motun");
    if (firebase.auth().currentUser) {
      this.setState({
        user: firebase.auth().currentUser
      });
    }
  }

  render() {
    const insidePage = props => {
      return <Inside user={this.state.user} {...props} />;
    };

    const signoutPage = props => {
      return <Signout user={this.state.user} />;
    };

    const logintPage = props => {
      return <Login user={this.state.user} />;
    };

    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/inside" component={insidePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={logintPage} />
          <Route path="/signout" component={signoutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
