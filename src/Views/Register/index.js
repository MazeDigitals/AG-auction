import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import Navigation from '../../Extends/Navigation';
import React, { Component, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Timer from '../../Extends/Timer';

// images

import rec from './../../images/recap.png';


function Register() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='carauction'>
      <div className='ar-space body-mrgn'>

        <Navigation />

        <div className='reg-main-heading'>
          <h3>Register New User</h3>
        </div>

        <div className='register-sec'>

          <div className='personal-info'>
            <div className='personal-heading'>
              <h4>PERSONAL INFORMATION</h4>
            </div>

            <div className='pers-form'>
              <Form>
                <Form.Group className="lab-inp" controlId="formBasicEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <div className='mid-text'>
                  <Form.Text className="">
                    * Please fill the full name as per passport or id
                  </Form.Text>
                </div>

                <Form.Group className="lab-inp" controlId="formBasicPassword">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="lab-inp inp-double" controlId="">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Pakistan (92)</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control type="text" />

                  <span>please enter a valid mobile number</span>

                </Form.Group>
                <p>	* Please make sure to enter a valid mobile number as it will be used to receive your activation message</p>


              </Form>
            </div>

          </div>


        </div>




        <div className='register-sec'>

          <div className='personal-info'>
            <div className='personal-heading'>
              <h4>ACCOUNT INFORMATION</h4>
            </div>

            <div className='pers-form'>
              <Form>
                <Form.Group className="lab-inp lah-inpas" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <div className='mid-text'>
                  <Button>Check Availability</Button>
                </div>

                <Form.Group className="lab-inp lah-inpas" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group className="lab-inp" controlId="">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>


                <Form.Group className="inp-radio" controlId="">
                  <Form.Label>Preferred language</Form.Label>
                  {['radio'].map((type) => (
        <div key={`default-${type}`} >
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`English`}
          />
          <Form.Check
            type={type}
            label={`Arabic`}
            id={`default-${type}`}
          />
        </div>
      ))}
                </Form.Group>
               


              </Form>
            </div>

          </div>


        </div>



        <div className='register-sec'>

<div className='personal-info'>
  
    <div className='reg-recp'>
    <span>Prove You Are Human</span>
  <img src={rec} alt="" />

  </div>

  <div className='regcapt-content'>
    <p>	BY Clicking on Create your account you agree on Emirates Auction  <Link to={'/Termscondition'}>Terms & Conditions</Link> </p>
    <Button>Create your Account</Button>
  </div>

   
 
</div>


</div>


      </div>
    </div>
  );

}


export default Register;
