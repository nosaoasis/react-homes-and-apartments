import React, { Component } from "react";

import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLinks } from "./index";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav_header">
              <Link to="/">
                <img src={logo} alt="Home and Apartments" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              {/* <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li> */}
              <NavLinks />
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
