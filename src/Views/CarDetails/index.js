import React, { useState } from "react";
import { Container, Row, Col, Nav, Table, Tab, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import watchicon from "../../images/watchIcon.png";
import court from "../../images/btngetadobe.gif";
import slideImg from "../../images/modi1.jpg";
import slideImg2 from "../../images/modi2.jpg";
import slideImg3 from "../../images/modi3.jpg";
import pdf from './../../images/dummy.pdf';

import Navigation from '../../Extends/Navigation';

const Index = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    slidesToShow: 7,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    asNavFor: nav2,
    ref: (slider1) => setNav1(slider1),

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  const sliderSync = {
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
    asNavFor: nav1,
    ref: (slider2) => setNav2(slider2),
  };
  return (

    
    <div className=" ar-space body-mrgn">
     <Navigation/>
      <div className="car-details">


        <div className="cr-detail-bxall">
          <Row>
 

            <Col md={7}>
              <div className="dtml-all">
              <div className="dtl-top-model">
                <h4>Volkswagen Golf 2016</h4>
              </div>

              <div className="dtl-current-pr">
                <div className="dl-curnt-iner">
                  <small>Current Price</small>
                  <h4><span>PKR</span>56,600 <span>(PKR <b>100</b>AED 56,600 Min. Increment)</span></h4>
                </div>
                <div className="dtl-lot-no">
                  <small>Lot#</small>
                  <h4>374729</h4>
                </div>
              </div>

              <div className="dtl-bottom-rw">

                <div className="dl-bids">
                  <small>Bids#</small>
                  <h4>189</h4>
                </div>

                <div className="dl-time-rem">
                  <small>Time Remaining</small>
                    <h5>Auction Ended</h5>
                </div>

                <div className="dl-end-dec">
                  <small>End Time</small>
                  <h5>01:06am 01 Dec 2022</h5>
                </div>

                <div className="dtl-circle">
                
                </div>

                <div className="dlt-addnot">
                <img src={watchicon} alt="" />
                </div>

                <div className="dtl-bd-btn">
                  <Button>Bid Now</Button>
                </div>

              </div>


              </div>
            </Col>

           
          </Row>

        </div>

        
        <div className="cardetailsdown">
          <Row>
            <Col md={5}>
              <div className="slider-sync">
                <Slider {...sliderSync}>
                  <div className="slide-img">
                    <img src={slideImg} />
                  </div>
                  <div className="slide-img">
                    <img src={slideImg2} />
                  </div>
                  <div className="slide-img">
                    <img src={slideImg3} />
                  </div>
                  <div className="slide-img">
                    <img src={slideImg} />
                  </div>
                  <div className="slide-img">
                    <img src={slideImg2} />
                  </div>
                  <div className="slide-img">
                    <img src={slideImg3} />
                  </div>
                  <div className="slide-img">
                    <img src={slideImg} />
                  </div>
                  <div className="slide-img">
                    <img src={slideImg2} />
                  </div>
                  <div className="slide-img">
                    <img src={slideImg3} />
                  </div>
                </Slider>
              </div>
            </Col>
            <Col md={7}>
              <div className="disc-sec">
                <div className="desc">
                  <p className="title">Description</p>
                  <p className="text">
                    0 Doors - 2 Seats - Conditional on provider's approval - To
                    be Sold As Is Where Is - In the frame of the precautionary
                    measures pursued by the company, the vehicle will be
                    delivered by the company recovery only according to the set
                    prices.
                  </p>
                </div>
                <Row>
                  <Col md={7}>
                    <div className="detials">
                      <p className="title">Details</p>
                      <Table size="sm">
                        <tbody>
                          <tr>
                            <td> Body type</td>
                            <td> Motorcycle</td>
                          </tr>
                          <tr>
                            <td>Country of made </td>
                            <td> N/A</td>
                          </tr>
                          <tr>
                            <td>VIN</td>
                            <td>MD2A11CX9MCK05346</td>
                          </tr>
                          <tr>
                            <td>Motor No.</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <td>Exterior colour</td>
                            <td>--</td>
                          </tr>
                          <tr>
                            <td>Mileage</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <td>Transmission</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <td>Fuel</td>
                            <td>NA</td>
                          </tr>
                          <tr>
                            <td>Motor Type</td>
                            <td>MD2A11CX9MCK05346</td>
                          </tr>
                          <tr>
                            <td>Key</td>
                            <td>No Key</td>
                          </tr>
                          <tr>
                            <td>Ownership certificate from </td>
                            <td>N/A | N/A</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="providedBy">
                     
                      <a href={pdf} target="_blank">
                        <Button>Download Inspection Report</Button>
                        <img src={court} />
                      </a>
                     
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="other-vehicles">
          <p className="title">Check out other vehicles</p>
          <div className="slider-sec">
            <Slider {...settings}>
              <div className="slide-img">
                <img src={slideImg} />
                <figcaption>
                  <p>
                    Bajaj - PULSAR 150 2020
                    <br />
                    PKR 300
                  </p>
                </figcaption>
              </div>
              <div className="slide-img">
                <img src={slideImg2} />
                <figcaption></figcaption>
              </div>
              <div className="slide-img">
                <img src={slideImg3} />
              </div>
              <div className="slide-img">
                <img src={slideImg} />
              </div>
              <div className="slide-img">
                <img src={slideImg2} />
              </div>
              <div className="slide-img">
                <img src={slideImg3} />
              </div>
              <div className="slide-img">
                <img src={slideImg} />
              </div>
              <div className="slide-img">
                <img src={slideImg2} />
              </div>
              <div className="slide-img">
                <img src={slideImg3} />
              </div>
            </Slider>
          </div>
        </div>
        <div className="term-condition-sec">
          <div className="title">
            <p>Terms & Conditions</p>
          </div>
          <div className="content">
            <div className="heading">
              <p>
                Emirates Auction’s terms and conditions of public auction shall
                apply, along with the following terms and conditions
              </p>
            </div>
            <div className="points">
              <ul>
                <li>
                  PKR 500 administration fee will be applied on each lot price
                  exceeds PKR 2,000 and PKR 300 otherwise.
                </li>
                <li>
                  You must complete payment and collection of the Lot within 48
                  hours of the date of the auction’s conclusion, after acquiring
                  the supplier’s approval. The paper of the lot shall be
                  finalized within approximately 45 work days of completing the
                  payment process.
                </li>
                <li>
                  The buyer of a lot will be responsible for contacting and
                  clearing any paperwork related to the lot with the plaintiff
                  (bank) and the court. Emirates Auction is not responsible or
                  liable for any delays or issues related to the delivery of the
                  lot. Emirates Auction will provide contact details for the
                  owner of the lot.
                </li>
                <li>
                  Emirates Auction is not responsible for delays in the issuance
                  of lot ownership documents as the papers may take up to almost
                  45 working days .
                </li>
                <li>
                  Emirates Auction reserves the right to apply fees of 100PKR
                  for each delay, without prior notice, for any vehicle not paid
                  or received within the specified period
                </li>
                <li>
                  do not fix or modify or use the lot unless lot documents has
                  been completed and you has a possession certificate
                </li>
                <li>
                  PKR 50 loading/unloading fees will be applied for each car.
                </li>
                <li>
                  Registration plate number seen in the picture is not included
                  in auction and they are placed only for bidder's reference.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lower-text">
          <p>
            Used Bajaj - PULSAR 150 2020 for sale. Will be sold to the highest
            bidders under the terms & conditions of the auction.
            <br />
            Used car for sale in Dubai, Abu Dhabi, Sharjah and the UAE including
            salvage and used machines, used plant and used heavy equipment with
            inspected condition reports and detailed information.
            <br />
            Contact Emirates Auction for car export and delivery service in
            Dubai, Sharjah, Abu Dhabi, UAE.
            <br />
            Emirates Auction is the largest online auction and used car website
            in the UAE for best approved used cars.
            <br />
            Sell your car today at the highest price in Emirates Auction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
