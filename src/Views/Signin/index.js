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


function Signin() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='carauction'>
      <div className='ar-space body-mrgn'>

        <Navigation />

        <div className='register-sec'>

          <div className='sign-info'>
            <div className='personal-heading'>
              <h4>Sign In</h4>
            </div>

            <div className='sign-form'>
              <div className='sin-content'>
                <p>If you are already a member, please enter your account details below to start using our services, if you do not have an account then please
                <Link to={'/Register'}>register here for a new account</Link> for free.</p>
              </div>

            <Form>
      <Form.Group className="sig-inp" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="" />
      
      </Form.Group>

      <Form.Group className="sig-inp" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me?" />
      </Form.Group>
      <div className='dig-bt'>
      <Button type="submit">Sign In</Button>
      <Link to={'/Register'}><FontAwesomeIcon icon={solid('lock')} />Forgot Password?</Link>
      </div>
    </Form>
            
            </div>

          </div>
        </div>


      </div>
    </div>
  );

}


export default Signin;
