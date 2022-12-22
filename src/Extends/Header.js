import React, { Component, useState } from "react";
import ReactDOM, { render } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// import logo from "./../images/logo.png";
// LOGO
// import sitelogo from '../Assets/Logo.png';
import ScrollToTop from "../Views/ScrollToTop/Index";
import logo from "./../images/ag_logo.png";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  };

  return (
    <div className="main-header">
      <div className="ar-space">
        <Row>
          <Col md={3}>
            <div className="logo">
              {/* <img src={logo} /> */}
              <Link to={"/"}>
                <img src={logo} alt="logo" width={200} className="mb-3" />
              </Link>
            </div>
          </Col>
          <Col md={9}>
            <div className="hdr-sec">
              <Row>
                <Col md={6}>
                  <div className="hdr-disp">
                    <span className="localTime">
                      <span id="lblpakLocal">Pak Local Time</span>
                      <br />
                      10:43 pm - Thursday 24
                    </span>
                    <span className="localDate">
                      <span>November</span>2022
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="hdr-btns">
                    <ul>
                      <li>
                        <Link to={"/"}>اردو</Link>
                      </li>
                      <li>
                        <Link to={"/Signin"}>Sign In</Link>
                      </li>
                      <li className="red-btn">
                        <Link to={"/Register"}>Register </Link>
                      </li>
                      <li className="pfr-my">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Account{" "}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Link to={"/Myprofile"}>My Profile</Link>
                            <Link to={"/Changepassword"}>Cahnge Password</Link>
                            <Link to={"/Cars"}>Cars</Link>
                            <Link to={"/"}>Sign Out</Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="hdr-disp">
                <ul>
                  <li>
                    <Link to={"/Aboutus"}>About Ag Auction</Link>
                  </li>
                  <li>
                    <Link to={"/FAQ"}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={"/Contactus"}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to={""}>Download</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
