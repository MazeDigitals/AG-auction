import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import Navigation from '../../Extends/Navigation';
import React, { Component, useEffect } from 'react';
import Timer from '../../Extends/Timer';
import Propsli from '../../Extends/Propsli';

// images

import properban from './../../images/banner.jpg';
import proploc from './../../images/properties-loc.png';



import pdf from './../../images/dummy.pdf';

function Propertydetails() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='carauction'>
      <div className='ar-space body-mrgn'>

        <Navigation />



        <div className='proper-top-ban'>

          <div className='propert-sev'>
            <h3>60<span>Properties</span></h3>
          </div>

          <div className='proper-ban-im'>
            <img src={properban} alt="" />
          </div>

          <div className='prop-timer'>
            <p>Auction End Date <span> 21 Aug 2022 </span></p>
            <Timer date="Feb 5, 2023 15:37:25" />
          </div>
        </div>

        <div className='my-property'>

          <div className='property-faq-btn'>
            <Link to={'/FAQ'}>FAQ</Link>
            <Link to={'/Property'}>My Properties</Link>
            <Link to={'/'}>Previous Auction</Link>

          </div>

          <div className='prop-mid-heading'>
            {/* <h3>Online Auction</h3> */}
          </div>

          <div className='prop-ban-loc'>
            <img src={proploc} alt="" />
          </div>
        </div>

        <div className='property-box-all'>



          <Row>

            <Col md={4}>
              <div className='property-sl'>
                <Propsli />
              </div>
            </Col>

            <Col md={4}>
              <div className='des-prob-heading'>
                <h5>Property Description</h5>
              </div>
              <div className='pr-description'>

                <div className='prb-des-inner'>
                  <p>Land no. 2501068<br></br>
                    Al Muhallab / Fujairah<br></br>
                    Land Use : Residential<br></br>
                    Total Area 4,768.41 sq ft</p>

                  <p>Property details:<br></br>
                    3BR + 2 bathroom<br></br>
                    kitchen + store<br></br></p>
                  <p>Only for PAK citizens</p>
                  <p>In respect of claims relating refund
                    of the rent or vacancy of the property
                    the competent authority is the Dispute
                    Settlement Committee and that
                    Emirates Auction and the Court
                    bear no responsibility.</p>
                  <p>Your participation in the auction is an
                    acknowledgment of the property legal
                    and physical conditions</p>
                  <p>For more details or to participate in the auction
                    please call us at 600545454 available 24 hours.</p>

                  <Button>Click to request viewing appointment</Button>
                </div>
              </div>

              <div className='prf-deta-heading'>
                <h6>Details</h6>
              </div>
              <div className='prf-deta'>
                <ul>
                  <li><span>Location:</span> Shah Faisal Ave, E-8</li>
                  <li><span>Total Area</span>  	4768.41</li>
                  <li><span>Property Type</span> 	Residential</li>
                </ul>
              </div>



            </Col>

            <Col md={4}>
              <div className='des-prob-heading'>
                <h5>Property Description</h5>
              </div>
              <div className='pr-description'>

                <div className='pr-psd'>

                  <a href={pdf} target="_blank"
                    rel="noreferrer">● Municipal scheme</a>
                </div>
              </div>
              <div className='print-i-btn'>
                <Button className='prnt-det'><FontAwesomeIcon icon={solid('print')} />Print Details</Button>
                <Button className='sed-inqu'><FontAwesomeIcon icon={solid('circle-info')} />Send Inquiry</Button>
              </div>
            </Col>

          </Row>

          <div className='prp-detail-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13272.81922222506!2d73.0371536!3d33.7295198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e66e0de3e2598c0!2sShah%20Faisal%20Masjid!5e0!3m2!1sen!2s!4v1669760175453!5m2!1sen!2s" ></iframe>
            <Button>Enlarge Map</Button>
          </div>

        </div>









      </div>
    </div>
  );

}


export default Propertydetails;
