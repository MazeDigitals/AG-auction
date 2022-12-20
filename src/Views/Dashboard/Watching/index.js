import { Container, Row, Col, Nav, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import Navigation from '../../../Extends/Navigation';
import React, { Component, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';

import Form from 'react-bootstrap/Form';

import Profileside from '../../../Extends/Profileside';

// images

import rec from './../../../images/recap.png';
import bank from './../../../images/bankim.png';
import slip from './../../../images/bank-slip.jpg';
import depbox from './../../../images/cashbox.png';
import emat from './../../../images/email-icon.png';
import fax from './../../../images/fax-icon.png';
import wth from './../../../images/watch-icon.png';



function Watching() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='carauction'>
      <div className='ar-space body-mrgn'>

        <Navigation />

        <div className='reg-main-heading'>
          <h3>My Account</h3>
        </div>


        <div className='myprofile-dash'>

          <Row> 
            <Col md={4}>

               <Profileside />

            </Col>



            <Col md={8}>

              <div className='watchin-sec'>

                <div className='watching-top'>

                  <div className='watch-cont'>
                  <h5>Im Watching <span>0</span>Cars</h5>
                  <Button>Back to Menu</Button>
                </div>
                <div className='wtch-im'>
                  <img src={wth} />
                  <span>Watching</span>
                </div>

                </div>

              </div>

              <div className='wtm-content-bdy'>
              <div className='wath-bd-cont'>
                <p>To add cars to your watch list just choose the car you want from the list and click on the [Add to Watch List] button shown on the right</p>
                <p>To add to your list you must be signed in, if you are not yet signed in,you can still add to the watch list, but once you close your browser the list will be deleted unless you sign-in again</p>
                <Button>Go to auction list NOW</Button>
              </div>
              </div>
          
              
            </Col>

          </Row>

        </div>




       

      </div>
    </div>
  );

}


export default Watching;
