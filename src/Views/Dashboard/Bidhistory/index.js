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
import fogt from './../../../images/forgot-bg.gif';



function Bidhistory() {
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

            <div className='bid-his-heading'>
              <h4>My Cars Bids</h4>
            </div>
            <div className='bid-tab'>



            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
     
          <Nav variant="pills" >
            <Nav.Item>
              <Nav.Link eventKey="first">Cars I Won</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='gen-cir'>Highest Bids</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="third" className='red-cir'>Out Bids</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="fourth">Bid History</Nav.Link>
            </Nav.Item>
          </Nav>
      
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <div className='cr-win'>
                  <Row>
                    <Col md={4}>
                      <div className='questin-im'>
                        <img src={fogt} />
                      </div>
                    </Col>
                    <Col md={8}>
                      <div className='question-cont'>
                        <p>You do not have any cars you won at the moment, please note that you have to wait till the auction end for the cars you make bid on to appear in this list, you can view the status for your bids through the above links.</p>
                      </div>
                    </Col>
                  </Row>
                </div>
            </Tab.Pane>


            <Tab.Pane eventKey="second">
            <div className='cr-win'>
              <div className='high-bid-heading'>
                <h3>Cars I'm winning</h3>
              </div>
              </div>
       
            </Tab.Pane>


            <Tab.Pane eventKey="third">
            <div className='cr-win'>
              <div className='high-bid-heading'>
                <h3>My Out Bidding Cars</h3>
              </div>
              </div>
       
            </Tab.Pane>


            <Tab.Pane eventKey="fourth">
            <div className='cr-win'>
              <div className='high-bid-heading'>
                <h3>Bid History</h3>
              </div>
              </div>
       
            </Tab.Pane>






          </Tab.Content>
        
    </Tab.Container>






            </div>
          
              
            </Col>

          </Row>

        </div>




       

      </div>
    </div>
  );

}


export default Bidhistory;
