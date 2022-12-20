import { Container, Row, Col, Nav, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import Navigation from "../../Extends/Navigation";
import React, { Component, useEffect } from "react";
import faqimg from "../../images/faq-bg.gif";
import faqIcon from "../../images/icon-ea-small.png";
import recap from '../../images/recap.png'

function FAQ() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="contacus ar-space body-mrgn">
      <div className="">
        <Navigation />
      </div>
      <div className="vert-Tabs">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <div className="col-three">
                <Nav variant="pills" className="flex-column vert-Tabs-btns">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Registration</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">General Question</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Security Deposit</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Cars Auction</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="five">Property Auction</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="">
                    <Nav.Link eventKey="six">Bank Account Details</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="img-sec">
                  <img src={faqimg} />
                </div>
              </div>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="faqs-sec">
                    <ul>
                      <a href="#1">
                        <img src={faqIcon} />{" "}
                        <li>
                          1.Who can participate in the auction?
                        </li>
                      </a>
                      <a href="#2">
                        <img src={faqIcon} />{" "}
                        <li>2.  Is opening an account in Ag Auction free of
                          charge?</li>
                      </a>
                      <a href="#3">
                        <img src={faqIcon} />{" "}
                        <li>3. I did not receive my activation code?</li>
                      </a>
                      <a href="#4">
                        <img src={faqIcon} />{" "}
                        <li>
                          4. Which nationalities are eligible to participate in
                          the auction?
                        </li>
                      </a>
                      <a href="#5">
                        <img src={faqIcon} />{" "}
                        <li>6. What should I do if I can not log in?</li>
                      </a>
                      <a href="#6">
                        <img src={faqIcon} />{" "}
                        <li>5. I forgot my username or password</li>
                      </a>
                    </ul>
                  </div>
                  <div className="detailed-FAQs-sec">
                    <div className="single-faq" id="1">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          1. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="2">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          2. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="3">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          3. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="4">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          4. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="5">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          5. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="6">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          6. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                  </div>
                  <div className="Faq-form-sec">
                    <p className="note">
                      Can’t find what you’re looking for? Send a Question...
                    </p>
                    <form>
                      <div>
                        <label>Full Name</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Email Address</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Mobile Number</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        {" "}
                        <label>Your Question</label>
                        <textarea rows="4" cols="40"/>
                      </div>
                      <div className="recap-sec">
                        <img src={recap}/>
                      </div>
                      <div className="submit-btn">
                        <input type="submit"/>
                      </div>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <div className="faqs-sec">
                    <ul>
                      <a href="#7">
                        <img src={faqIcon} />{" "}
                        <li>
                        4. Which nationalities are eligible to participate in
                          the auction? 
                        </li>
                      </a>
                      <a href="#8">
                        <img src={faqIcon} />{" "}
                        <li>2. Who can participate in the auction?</li>
                      </a>
                      <a href="#9">
                        <img src={faqIcon} />{" "}
                        <li>3. I did not receive my activation code?</li>
                      </a>
                      <a href="#10">
                        <img src={faqIcon} />{" "}
                        <li>
                               1. Is opening an account in Ag Auction free of
                          charge?
                        </li>
                      </a>
                      <a href="#11">
                        <img src={faqIcon} />{" "}
                        <li>5. I forgot my username or password</li>
                      </a>
                      <a href="#12">
                        <img src={faqIcon} />{" "}
                        <li>6. What should I do if I can not log in?</li>
                      </a>
                    </ul>
                  </div>
                  <div className="detailed-FAQs-sec">
                    <div className="single-faq" id="7">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          1. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="8">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          2. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="9">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          3. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="10">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          4. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="11">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          5. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="12">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          6. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                  </div>
                  <div className="Faq-form-sec">
                    <p className="note">
                      Can’t find what you’re looking for? Send a Question...
                    </p>
                    <form>
                      <div>
                        <label>Full Name</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Email Address</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Mobile Number</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        {" "}
                        <label>Your Question</label>
                        <textarea rows="4" cols="40"/>
                      </div>
                      <div className="recap-sec">
                        <img src={recap}/>
                      </div>
                      <div className="submit-btn">
                        <input type="submit"/>
                      </div>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <div className="faqs-sec">
                    <ul>
                      <a href="#1">
                        <img src={faqIcon} />{" "}
                        <li>
                          1. Is opening an account in Ag Auction free of
                          charge?
                        </li>
                      </a>
                      <a href="#2">
                        <img src={faqIcon} />{" "}
                        <li>3. I did not receive my activation code?</li>
                      </a>
                      <a href="#3">
                        <img src={faqIcon} />{" "}
                        <li> 2. Who can participate in the auction?</li>
                      </a>
                      <a href="#4">
                        <img src={faqIcon} />{" "}
                        <li>
                          4. Which nationalities are eligible to participate in
                          the auction?
                        </li>
                      </a>
                      <a href="#5">
                        <img src={faqIcon} />{" "}
                        <li>6. What should I do if I can not log in?</li>
                      </a>
                      <a href="#6">
                        <img src={faqIcon} />{" "}
                        <li>5. I forgot my username or password</li>
                      </a>
                    </ul>
                  </div>
                  <div className="detailed-FAQs-sec">
                    <div className="single-faq" id="1">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          1. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="2">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          2. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="3">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          3. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="4">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          4. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="5">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          5. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="6">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          6. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                  </div>
                  <div className="Faq-form-sec">
                    <p className="note">
                      Can’t find what you’re looking for? Send a Question...
                    </p>
                    <form>
                      <div>
                        <label>Full Name</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Email Address</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Mobile Number</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        {" "}
                        <label>Your Question</label>
                        <textarea rows="4" cols="40"/>
                      </div>
                      <div className="recap-sec">
                        <img src={recap}/>
                      </div>
                      <div className="submit-btn">
                        <input type="submit"/>
                      </div>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                <div className="faqs-sec">
                    <ul>
                      <a href="#1">
                        <img src={faqIcon} />{" "}
                        <li>
                          1. Is opening an account in Ag Auction free of
                          charge?
                        </li>
                      </a>
                      <a href="#2">
                        <img src={faqIcon} />{" "}
                        <li>2. Who can participate in the auction?</li>
                      </a>
                      <a href="#3">
                        <img src={faqIcon} />{" "}
                        <li>3. I did not receive my activation code?</li>
                      </a>
                      <a href="#4">
                        <img src={faqIcon} />{" "}
                        <li>
                          4. Which nationalities are eligible to participate in
                          the auction?
                        </li>
                      </a>
                      <a href="#5">
                        <img src={faqIcon} />{" "}
                        <li>5. I forgot my username or password</li>
                      </a>
                      <a href="#6">
                        <img src={faqIcon} />{" "}
                        <li>6. What should I do if I can not log in?</li>
                      </a>
                    </ul>
                  </div>
                  <div className="detailed-FAQs-sec">
                    <div className="single-faq" id="1">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          1. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="2">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          2. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="3">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          3. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="4">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          4. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="5">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          5. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="6">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          6. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                  </div>
                  <div className="Faq-form-sec">
                    <p className="note">
                      Can’t find what you’re looking for? Send a Question...
                    </p>
                    <form>
                      <div>
                        <label>Full Name</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Email Address</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Mobile Number</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        {" "}
                        <label>Your Question</label>
                        <textarea rows="4" cols="40"/>
                      </div>
                      <div className="recap-sec">
                        <img src={recap}/>
                      </div>
                      <div className="submit-btn">
                        <input type="submit"/>
                      </div>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                <div className="faqs-sec">
                    <ul>
                      <a href="#1">
                        <img src={faqIcon} />{" "}
                        <li>
                          5. I forgot my username or password
                        </li>
                      </a>
                      <a href="#2">
                        <img src={faqIcon} />{" "}
                        <li>2.  Which nationalities are eligible to participate in
                          the auction?</li>
                      </a>
                      <a href="#3">
                        <img src={faqIcon} />{" "}
                        <li>3. I did not receive my activation code?</li>
                      </a>
                      <a href="#4">
                        <img src={faqIcon} />{" "}
                        <li>
                          4. Who can participate in the auction?
                        </li>
                      </a>
                      <a href="#5">
                        <img src={faqIcon} />{" "}
                        <li></li>
                      </a>
                      <a href="#6">
                        <img src={faqIcon} />{" "}
                        <li>6. What should I do if I can not log in?</li>
                      </a>
                    </ul>
                  </div>
                  <div className="detailed-FAQs-sec">
                    <div className="single-faq" id="1">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          1. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="2">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          2. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="3">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          3. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="4">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          4. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="5">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          5. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="6">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          6. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                  </div>
                  <div className="Faq-form-sec">
                    <p className="note">
                      Can’t find what you’re looking for? Send a Question...
                    </p>
                    <form>
                      <div>
                        <label>Full Name</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Email Address</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Mobile Number</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        {" "}
                        <label>Your Question</label>
                        <textarea rows="4" cols="40"/>
                      </div>
                      <div className="recap-sec">
                        <img src={recap}/>
                      </div>
                      <div className="submit-btn">
                        <input type="submit"/>
                      </div>
                    </form>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="six">
                <div className="faqs-sec">
                    <ul>
                      <a href="#1">
                        <img src={faqIcon} />{" "}
                        <li>
                          1. Is opening an account in Ag Auction free of
                          charge?
                        </li>
                      </a>
                      <a href="#2">
                        <img src={faqIcon} />{" "}
                        <li>2. Who can participate in the auction?</li>
                      </a>
                      <a href="#3">
                        <img src={faqIcon} />{" "}
                        <li>3. I did not receive my activation code?</li>
                      </a>
                      <a href="#4">
                        <img src={faqIcon} />{" "}
                        <li>
                          4. Which nationalities are eligible to participate in
                          the auction?
                        </li>
                      </a>
                      <a href="#5">
                        <img src={faqIcon} />{" "}
                        <li>5. I forgot my username or password</li>
                      </a>
                      <a href="#6">
                        <img src={faqIcon} />{" "}
                        <li>6. What should I do if I can not log in?</li>
                      </a>
                    </ul>
                  </div>
                  <div className="detailed-FAQs-sec">
                    <div className="single-faq" id="1">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          1. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="2">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          2. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="3">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          3. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="4">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          4. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="5">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          5. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                    <div className="single-faq" id="6">
                      <div className="question">
                        <img src={faqIcon} />
                        <p>
                          {" "}
                          6. Is opening an account in Ag Auction free of
                          charge?
                        </p>
                      </div>
                      <div className="ans">
                        <p>
                          Yes, you can register yourself by visiting our website
                        </p>
                      </div>
                      <a href="#">
                        <FontAwesomeIcon icon={solid("caret-up")} />
                        Back to top
                      </a>
                    </div>
                  </div>
                  <div className="Faq-form-sec">
                    <p className="note">
                      Can’t find what you’re looking for? Send a Question...
                    </p>
                    <form>
                      <div>
                        <label>Full Name</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Email Address</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        <label>Mobile Number</label>
                        <input placeholder="" type="text" />
                      </div>
                      <div>
                        {" "}
                        <label>Your Question</label>
                        <textarea rows="4" cols="40"/>
                      </div>
                      <div className="recap-sec">
                        <img src={recap}/>
                      </div>
                      <div className="submit-btn">
                        <input type="submit"/>
                      </div>
                    </form>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default FAQ;
