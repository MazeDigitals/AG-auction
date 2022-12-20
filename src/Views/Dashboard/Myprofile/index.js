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


function Myprofile() {
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
                      <h3>Personal Info</h3>
                     <Link to={'/Profileupdate'}>Update Personal Info</Link>
                  </div>

                  <div className='personal-inner-cont'>
                    <div className='prnal-list'>
                      <ul>
                        <li>Full Name  <span>Yor Name</span></li>
                        <li>Nationality   <span>N/A</span></li>
                        <li>ID Type</li>
                        <li>ID Number</li>
                        <li>Language    <span>English</span></li>
                      </ul>
                    </div>


                    <div className='persl-info-im'>
                      <img src={user} />
                    </div>



                  </div>



                </div>
              </div>


              <div className='my-prf-inner'>
                <div className='my-personal-info'>
                  <div className='personal-hed-btn'>
                      <h3>Address</h3>
                    <Link to={'/Addressupdate'}> Update Personal Info</Link>
                  </div>

                  <div className='personal-inner-cont'>
                    <div className='prnal-list'>
                      <ul>
                        <li>Address 1</li>
                        <li>Address 2</li>
                        <li>City</li>
                        <li>Country</li>
                        <li>Land Line Phone</li>
                        <li>P.O.Box</li>
                      </ul>
                    </div>


                    <div className='persl-info-im'>
                      <img src={home} />
                    </div>



                  </div>



                </div>
              </div>



              <div className='my-prf-inner'>
                <div className='my-personal-info'>
                  <div className='personal-hed-btn'>
                      <h3>Traffic file information</h3>
                      <Link to={'/Trafficfile'}> Update Personal Info</Link> 
                  </div>

                  <div className='personal-inner-cont'>
                    <div className='prnal-list'>
                      <ul>
                        <li>Traffic information Type</li>
                        <li>Traffic File Number</li>
                        <li>Plate Number</li>
                        <li>Plate State</li>
                        <li>Plate Code</li>
                        <li>Driver License Number</li>
                        <li>Issue City</li>
                      </ul>
                    </div>


                    <div className='persl-info-im'>
                      <img src={user} />
                    </div>



                  </div>



                </div>
              </div>
              


              <div className='my-prf-inner'>
                <div className='my-personal-info'>
                  <div className='personal-hed-btn'>
                      <h3>Communication Preference</h3>
                  <Link to={'/Communication'}>Update Personal Info</Link> 
                  </div>

                  <div className='personal-inner-cont'>
                  <div className='prnal-list'>
                      <ul>
                        <li>Email <span>Info@gmail.com</span></li>
                        <li>Mobile 1  <span>123456789</span></li>
                        <li>Mobile 2</li>
                      </ul>
                    </div>


                    <div className='persl-info-im'>
                      <img src={atcal} />
                    </div>



                  </div>



                </div>
              </div>


              <div className='my-prf-inner'>
                <div className='my-personal-info'>
                  <div className='personal-hed-btn'>
                      <h3>Personal Documents</h3>
                      <Link to={'/Document'}>Update Personal Info</Link> 
                  </div>

                  <div className='personal-inner-cont prs-file'>
                  <div className='prnal-list '>
                      <Link to={'/'}> Click here to upload a new document</Link>
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


export default Myprofile;
