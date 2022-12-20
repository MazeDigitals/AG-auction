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
import lock from './../../../images/login-bg.png';



function Changepassword() {
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
                <div className='my-personal-info'>
                  <div className='personal-hed-btn'>
                      <h3>Change Password</h3>
                     
                  </div>

                  <div className='personal-inner-cont'>
                   <div className='change-pass-frm'>

                    <Form>
                    <Form.Group className="" controlId="formBasicPassword">
        <Form.Label>Your Old Password</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Form.Group className="" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Form.Group className="" controlId="formBasicPassword">
        <Form.Label>Retype New Password</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>

      <Button type='submit'>Change Password Now</Button>


                    </Form>

                   </div>

                   


                    <div className='persl-info-im'>
                      <img src={lock} />
                    </div>



                  </div>



                </div>
              </div>




         


           



            </Col>

          </Row>

        </div>




       

      </div>
    </div>
  );

}


export default Changepassword;
