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
import user from './../../../images/my-account-profile-icon.png';
import home from './../../../images/my-account-address-icon.png';
import atcal from './../../../images/my-account-contact-icon.png';
import file from './../../../images/my-account-mydocs.png';


function Profileupdate() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='carauction'>
      <div className='ar-space body-mrgn'>

        <Navigation />

        <div className='reg-main-heading'>
          <h3>Profile</h3>
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
                      <h3>Personal Info</h3>
                      <Button>Update Personal Info</Button>
                  </div>

                  <div className='personal-inner-cont'>

                    <div className='pronal-info-in'>
                      <ul>
                        <li><span> Full Name </span> Yor Name</li>
                        <li><span>  Nationality</span>    <Form.Select aria-label="Default select example">
      <option>N/A</option>
      <option value="1">PAK </option>
      <option value="2">UAE</option>
      <option value="3">US</option>
    </Form.Select></li>
                        <li><span>  ID Type </span> <Form.Select aria-label="Default select example">
      <option>Please Select</option>
      <option value="1">PAK National ID</option>
      <option value="2">Passport</option>
      <option value="3">Driving Licences</option>
    </Form.Select></li>
                        <li><span> ID Number</span>  <Form.Control aria-label="Username"/></li>
                        <li className='prof-lang'><span> Language</span>     <Form.Group className="inp-radio" controlId="">
                
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
                </Form.Group></li>
                      </ul>

                      <Button>Update your Information</Button>
                    </div>


                    <div className='persl-info-im'>
                      <img src={user} />
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


export default Profileupdate;
