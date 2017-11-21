import React from "react";
import "./Login.css";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import logo from "./logo.png";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="md" color="dark" className="" fixed="top">
          <div className="container menu">
            <NavbarBrand href="/">
              {/* <div className="hidden-md-down"> THIS didn't work why?*/}
              <img
                className="img-fluid d-sm-none d-md-block d-none d-sm-block"
                src={logo}
                alt="Logo"
                width="50"
              />
            </NavbarBrand>

            <NavbarBrand>
              <span className="logo-name"> 31 Blocks</span>{" "}
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <LinkContainer to="/login">
                <NavItem>
                  <Button color="primary">Log In</Button>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/signup">
                <NavItem>
                  <Button className="ml-4" color="success">
                    Sign Up
                  </Button>
                </NavItem>
              </LinkContainer>
            </Nav>
          </div>
        </Navbar>

        <div className="container my">
          <h1 className="text-center">See how you can get you time back</h1>
          <h3 className="text-center">
            People all around the world get shit done faster and spend more time
            watching TV - thanks to our kick-ass solutions
          </h3>

          <div className="mt-5 text-center">
            <Link className="ml-2" to="/signup">
              <Button color="success">Sign Up - it's free</Button>
            </Link>
          </div>

          <div className="mt-2 text-center">
            <span>Already using 31 Blocks?</span>
            <Link className="ml-2" to="/login">
              Login
            </Link>
          </div>
        </div>

        <div className="line  mb-5 mt-5" />

        <p className="mt-5 text-center">Some great text here</p>

        <h1 className="text-center mt-5 mb-5">
          See how you can get you time back - example -1
        </h1>
        <h1 className="text-center mt-5 mb-5">
          See how you can get you time back - testimonial -1
        </h1>
        <h1 className="text-center mt-5 mb-5">Another great text here</h1>
        <h1 className="text-center mt-5 mb-5">UI screeshots</h1>
        <h1 className="text-center mt-5 mb-5">Video Links</h1>
        <h1 className="text-center mt-5 mb-5">Customer testimonials</h1>
        <h1 className="text-center mt-5 mb-5">
          Anything that might grab attention
        </h1>
        <h1 className="text-center mt-5 mb-5">as we are deseprate ..or not?</h1>
      </div>
    );
  }
}
