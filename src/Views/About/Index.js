import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import React, { Component, useEffect } from "react";
import Navigation from "../../Extends/Navigation";
import textImg from "../../images/aboutus2.png";
import License from "../../images/record01.jpg";

function About() {
  return (
    <div className="about">
      <div className="ar-space body-mrgn">
        <div className="">
          <Navigation />
        </div>
        <div className="heading">
          <h3>About AG Auction</h3>
        </div>
        <div className="about-inner">
          <div className="content">
            <Row>
              <Col md={7}>
                <div className="text">
                  <p>
                    Ag Auction is a leading UAE-based auction
                    company in the Middle East. Founded in 2004, the company
                    specializes in automobiles, vehicle license plates, real
                    estate and properties, asset liquidation, VIP mobile
                    numbers, jewelry, time-sensitive items, and heavy machinery,
                    plant and construction equipments.
                  </p>
                  <p>
                    Ag Auction has achieved numerous milestones in a short
                    span of time since its establishment, breaking ten (10)
                    Guinness World Records along the way and giving its clients
                    from the government and private sectors higher returns for
                    their actionable items and unrivaled customer service.
                  </p>
                  <img src={textImg} />
                  <p>The ten record-breaking achievements include:</p>
                  <div>
                    <ul className="firstUL">
                      <li>
                        {" "}
                        12 May 2007: The most expensive
                        <span>vehicle registration plate </span>auctioned
                      </li>
                      <li>
                        {" "}
                        16 February 2008: The most expensive
                        <span>vehicle registration plate</span>auctioned
                      </li>
                      <li>
                        19 February 2013: The most expensive
                        <span>real property</span>sold via online auction at a
                        staggering AED 94 million
                      </li>
                      <li>
                        {" "}
                        21 July 2014: The most expensive <span>oil tanker</span>
                        sold via online auction
                      </li>
                      <li>
                        25 November 2015: The most expensive
                        <span>helmet</span>
                        auctioned at over AED 24 million. The riding helmet was
                        previously owned by H.H. Sheikh Mohammad Bin Rashid Al
                        Maktoum, Vice-President and Prime Minister of the UAE
                        and Ruler of Dubai
                      </li>
                      <li>
                        25 November 2015: The most expensive
                        <span>horse riding saddle</span>auctioned at AED 2.4
                        million
                      </li>
                      <li>
                        22 January 2015: Breaking it is own previous record for
                        selling the most expensive
                        <span>real property</span>
                        via online auction and smart apps at a staggering AED
                        102 million.
                      </li>
                    </ul>
                  </div>

                  <p>
                    With increasing annual sales and registered bidders across
                    the UAE, GCC and North Africa states, Russia and other
                    countries across the world, the leading auctioneer conducts
                    over 200 online and physical auctions per year (3 auctions
                    per week over all segments). Ag Auction provides an
                    extensive range of accessibility for its bidders, including
                    three large physical auction venues, online and mobile
                    auction websites, telephone, SMS, and Mobile apps for smart
                    phones & tablets.
                  </p>
                  <p>
                    Due to its consistent efforts to meet globally recognized
                    standards, Ag Auction undertook certification and
                    strives to maintain the following standards:
                  </p>
                  <div>
                    <ul className="secondUL">
                      <li>
                        {" "}
                        ISO 9001:2008 Quality Management (Physical and online
                        auctions of vehicle number plates and real estate of
                        government and industrial assets);
                      </li>
                      <li>
                        . ISO 10002:2004 Customer Satisfaction & Complaint
                        handling;
                      </li>
                      <li>ISO 27001 Information Security Management System;</li>
                      <li>ISO 22301 Business Continuity.</li>
                    </ul>
                  </div>
                  <p>
                    Its key clients comprise a number of distinguished public
                    sector organizations as well as leading commercial entities
                    across various sectors and industry verticals.
                  </p>
                  <p>
                    Ag Auction has significantly contributed to the
                    development of auction concepts in the Arab World, providing
                    creative methods that facilitate online auctions while
                    ensuring a high level of security and ease of use. The
                    company is a member of the ‘National Auctioneers
                    Association,’ the world’s largest professional association
                    focused solely on the auctioneering profession.
                  </p>
                  <p className="socio-resp">Social Responsibilities</p>
                  <p>
                    As a socially responsible company, Ag Auction has
                    always ensured that it makes valuable contributions to the
                    community. In recent years, it has supported the cause of
                    the poor, needy and unprivledged members of society through
                    well-known and reputed philanthropic organizations. Emirates
                    Auction raised over AED 150,000 during an auction held at
                    the end of Beyond Borders – an Emirati television
                    documentary series – to provide the Philippines disaster
                    relief through the UAE Red Crescent. In 2015 a charity
                    auction organized by Ag Auction listed a helmet worn
                    by His Highness Sheikh Mohammed bin Rashid Al Maktoum, UAE
                    Vice President and Prime Minister and Ruler of Dubai during
                    their victory at the 2012 International Federation for
                    Equestrian Sports (FEI) World Endurance Championships. This
                    helmet was auctioned for AED 24 Million and was awarded the
                    most expensive helmet sold in an auction. The total fund of
                    AED 89.8 million raised during the charity auction was
                    donated to the Al Jalila Foundation, a UAE-based global
                    philanthropic organization. Ag Auction continues to
                    donate regularly to charitable organizations such as Dubai
                    Cares and the Red Crescent Society to bring about meaningful
                    changes in the lives of underprivileged people.
                  </p>
                </div>
              </Col>
              <Col md={5}>
                <div className="license">
                  <img src={License} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
