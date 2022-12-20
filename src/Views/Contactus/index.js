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
import telephone from "../../images/contact-logo.jpg";

function Contactus() {
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
                    <Nav.Link eventKey="first">Karachi</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Lahore</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Islamabad</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Pishawar</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="five">Pindi</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="bank-details-tab">
                    <Nav.Link eventKey="six">Bank Account Details</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="img-sec">
                  <img src={telephone} />
                </div>
              </div>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                <div className="googleMap">
                    <div className="mapouter">
                      <div className="gmap_canvas ">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1669770194702!5m2!1sen!2s"></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="address-info">
                    <Row>
                      <Col md={6}>
                        <div className="info-keys">
                          <ul>
                            <li>Address:</li>
                            <li>Telephone:</li>
                            <li>Fax:</li>
                            <li>Email:</li>
                            <li>Working Hours:</li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="info-values">
                          <ul>
                            <li>Dummy Address</li>
                            <li>
                              <Link to={"/"}>25417932</Link>
                            </li>
                            <li>Dummy Fax</li>
                            <li>
                              <Link to={"/"}>DummyEmail@gmail.com</Link>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  <div className="googleMap">
                    <div className="mapouter">
                      <div className="gmap_canvas ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1669770194702!5m2!1sen!2s"></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="address-info">
                    <Row>
                      <Col md={6}>
                        <div className="info-keys">
                          <ul>
                            <li>Address:</li>
                            <li>Telephone:</li>
                            <li>Fax:</li>
                            <li>Email:</li>
                            <li>Working Hours:</li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="info-values">
                          <ul>
                            <li>Dummy Address</li>
                            <li>
                              <Link to={"/"}>25417932</Link>
                            </li>
                            <li>Dummy Fax</li>
                            <li>
                              <Link to={"/"}>DummyEmail@gmail.com</Link>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="googleMap">
                    <div className="mapouter">
                      <div className="gmap_canvas ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1669770194702!5m2!1sen!2s"></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="address-info">
                    <Row>
                      <Col md={6}>
                        <div className="info-keys">
                          <ul>
                            <li>Address:</li>
                            <li>Telephone:</li>
                            <li>Fax:</li>
                            <li>Email:</li>
                            <li>Working Hours:</li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="info-values">
                          <ul>
                            <li>Dummy Address</li>
                            <li>
                              <Link to={"/"}>25417932</Link>
                            </li>
                            <li>Dummy Fax</li>
                            <li>
                              <Link to={"/"}>DummyEmail@gmail.com</Link>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="googleMap">
                    <div className="mapouter">
                      <div className="gmap_canvas ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1669770194702!5m2!1sen!2s"></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="address-info">
                    <Row>
                      <Col md={6}>
                        <div className="info-keys">
                          <ul>
                            <li>Address:</li>
                            <li>Telephone:</li>
                            <li>Fax:</li>
                            <li>Email:</li>
                            <li>Working Hours:</li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="info-values">
                          <ul>
                            <li>Dummy Address</li>
                            <li>
                              <Link to={"/"}>25417932</Link>
                            </li>
                            <li>Dummy Fax</li>
                            <li>
                              <Link to={"/"}>DummyEmail@gmail.com</Link>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                  <div className="googleMap">
                    <div className="mapouter">
                      <div className="gmap_canvas ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1669770194702!5m2!1sen!2s"></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="address-info">
                    <Row>
                      <Col md={6}>
                        <div className="info-keys">
                          <ul>
                            <li>Address:</li>
                            <li>Telephone:</li>
                            <li>Fax:</li>
                            <li>Email:</li>
                            <li>Working Hours:</li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="info-values">
                          <ul>
                            <li>Dummy Address</li>
                            <li>
                              <Link to={"/"}>25417932</Link>
                            </li>
                            <li>Dummy Fax</li>
                            <li>
                              <Link to={"/"}>DummyEmail@gmail.com</Link>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="six">
                  <Table bordered size="sm">
                    <tbody className="bank-details">
                      <tr>
                        <td>Bank Name:</td>
                        <td>Pakistan Islamic Bank</td>
                      </tr>
                      <tr>
                        <td>Account Name:</td>
                        <td>Pakistan Auction</td>
                      </tr>
                      <tr>
                        <td>IBAN:</td>
                        <td>AE860340003707200100101</td>
                      </tr>
                      <tr>
                        <td>Account Number:</td>
                        <td>3707200100101</td>
                      </tr>
                      <tr>
                        <td>Swift Code:</td>
                        <td> MEBLAEAD</td>
                      </tr>
                      <tr>
                        <td>Routing Number:</td>
                        <td>403420113</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default Contactus;
