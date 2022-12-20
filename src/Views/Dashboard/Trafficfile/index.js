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


function Trafficfile() {
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
                      <h3>Traffic file information</h3>
                      
                  </div>

                  <div className='personal-inner-cont'>

                    <div className='pronal-info-in'>
                      <ul>
                        <li><span>Traffic information <small>Type</small>  </span> <Form.Select aria-label="Default select example">
      <option>Please Select</option>
      <option value="1">Traffic file Number </option>
      <option value="2">Driver License Number</option>
      <option value="3">Plate Number</option>
    </Form.Select>
    </li>
                  
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


export default Trafficfile;
