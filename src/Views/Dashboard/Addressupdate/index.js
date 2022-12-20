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


function Addressupdate() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='carauction'>
      <div className='ar-space body-mrgn'>

        <Navigation />

        <div className='reg-main-heading'>
          <h3>My Profile</h3>
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
                      <h3>Address Information</h3>
                  
                  </div>

                  <div className='personal-inner-cont'>

                    <div className='pronal-info-in'>
                      <ul>
                        <li><span>Country </span> <Form.Select aria-label="Default select example">
      <option>N/A</option>
      <option value="1">PAK </option>
      <option value="2">UAE</option>
      <option value="3">US</option>
    </Form.Select>
    </li>
                        <li><span>  City</span>  <Form.Control type='text' aria-label="Username"/>  </li>

                        <li><span>  Address 1 </span>  <Form.Control type='text' aria-label="Username"/> </li>

                        <li><span>  Address 2 </span>  <Form.Control type='text' aria-label="Username"/> </li>

                        <li><span>Land Line Phone</span>  <Form.Control type='text' aria-label="Username"/></li>

                        <li><span>P.O.Box</span>  <Form.Control type='text' aria-label="Username"/></li>
                      </ul>

                      <Button>Update your Address</Button>
                    </div>


                    <div className='persl-info-im'>
                      <img src={home} />
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


export default Addressupdate;
