import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { Redirect, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./Login.css";
import logo from "./logo.png";
import "./Loader.css";

export default class Inside extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { user } = this.props;

    if (!user) {
      console.warn(
        "looks like user is not authenticated. redirecting back to login screen..."
      );
      return <Redirect to="/login" />;
    }

    const displayName = user.displayName || user.email;

    return (
      <div>
        <Navbar expand="md" color="dark" className="" fixed="top">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} alt="Logo" width="60" />
            </NavbarBrand>

            <NavbarBrand>
              <span className="logo-name"> 31 Blocks</span>{" "}
            </NavbarBrand>

            <Nav className="ml-auto" navbar>
              <LinkContainer to="/login">
                <NavItem>
                  <span>Projects</span>
                </NavItem>
              </LinkContainer>

              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle nav caret>
                  <Button color="info">{displayName}</Button>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem disabled>User Profile</DropdownItem>
                  <DropdownItem disabled>Settings</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/signout">Sign out</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </div>
        </Navbar>
        <div className="container my">
          <h1>Welcome to the world where everything is possible</h1>
          <h3>You are logged in!</h3>
        </div>
      </div>
    );
  }
}
