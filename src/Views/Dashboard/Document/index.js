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


function Document() {
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
                      <h3>Add A Document</h3>
                  
                  </div>

                  <div className='personal-inner-cont'>

                    <div className='upload-docu'>
                      <ul>
                      
                        <li>
                        <Form.Group className="lah-inpas" controlId="formBasicEmail">
                  <Form.Label>File Description</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                            </li>

                        <li><Form.Group className="lah-inpas fli-uploder" controlId="formBasicEmail">
                  <Form.Label>please use only jpg and png files only</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                 </li>

                     

                     
                      </ul>

                      <Button>Save File</Button>
                    </div>


                    <div className='persl-info-im'>
                      <img src={file} />
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


export default Document;
