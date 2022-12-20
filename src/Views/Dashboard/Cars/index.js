import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import Navigation from '../../../Extends/Navigation';
import React, { Component, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import Profileside from '../../../Extends/Profileside';

// images

import rec from './../../../images/recap.png';
import depo from './../../../images/deposit-icon.png';
import wth from './../../../images/watch-icon.png';
import big from './../../../images/bid-history-icon.png';
import clk from './../../../images/payment-icon.png';
import dvlr from './../../../images/car-del-icon.png';
import expt from './../../../images/export-icon.png';



function Cars() {
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
              <div className='my-prf-inner'>
                <Row>
                  <Col md={4}>
                   
                    <div className='car-ag-box'>
                    <Link to={'/Carsdeposits'}>
                      <img src={depo}/>
                      <span>Deposits</span>
                      </Link>
                    </div>
                 
                  </Col>

                  <Col md={4}>
                 
                    <div className='car-ag-box'>
                    <Link to={'/Watching'}>
                      <img src={wth}/>
                      <span>Watching</span>
                      </Link>
                    </div>
                    
                  </Col>

                  <Col md={4}>
                
                    <div className='car-ag-box'>
                    <Link to={'/Bidhistory'}>
                      <img src={big}/>
                      <span>Bid History</span>
                      </Link>
                    </div>
                   
                  </Col>
                </Row>


                <Row>
                  <Col md={4}>
                  
                    <div className='car-ag-box'>
                    <Link to={'/Bidhistory'}>
                      <img src={clk}/>
                      <span>Winning</span>
                      </Link>
                    </div>
                   
                  </Col>

                  <Col md={4}>
                 
                    <div className='car-ag-box'>
                    <Link to={'/'}>
                      <img src={dvlr}/>
                      <span>Delivery</span>
                      </Link>
                    </div>
                 
                  </Col>

                  <Col md={4}>
                  
                    <div className='car-ag-box'>
                    <Link to={'/'}>
                      <img src={expt}/>
                      <span>Export</span>
                      </Link>
                    </div>
                   
                  </Col>
                </Row>
                
              </div>

            </Col>

          </Row>

        </div>




       

      </div>
    </div>
  );

}


export default Cars;
