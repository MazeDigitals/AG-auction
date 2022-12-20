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
import card from './../../../images/visa-master.png';



function Carsdeposits() {
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
              <div className='mycar-dep'>

                <div className='deposit-top-heading'>
                  <h3>My Cars Deposits</h3>
                </div>

                <div className='deposit-tabsec'>
                  <div className='deop-cont'>
                    <h5>Increase your deposit</h5>
                  </div>

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
     
    
          <Nav variant="pills" >
            <Nav.Item>
              <Nav.Link eventKey="first">Bank Deposit</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Bank Transfer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Cheque</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Credit Card</Nav.Link>
            </Nav.Item>
          </Nav>
          
          <div className='deop-inner-cont'>
          <Tab.Content>

            <Tab.Pane eventKey="first">
              <div className='pay-bank-heading'>
                <h4>Pay by Bank Deposit</h4>
              </div>
              <div className='bank-cont'>
                <p>To deposit in our Bank account directly, please visit any of the Emirates Islamic Bank branches.
                    Click here for a full list of the bank branches</p>
                    </div>

                    <div className='bank-list'>
                      <ul>
                        <li>Account Name:<span></span></li>
                        <li>Bank Name:</li>
                        <li>IBAN:</li>
                        <li>Account Number:</li>
                        <li>Swift Code:</li>
                        <li>Routing Number: </li>
                      </ul>

                      <img src={bank} />
                      </div>
              <div className='bk-cot'>
              <p>Once your deposit is completed, please submit the deposit details form below, please allow for 24hrs before your deposit is reflected on the system</p>
              </div>
             
              <div className='change-pass-frm bank-depoi'>

<Form>
<Form.Group className="">
<Form.Label>
Deposit Transaction Number</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>

<Form.Group className="" controlId="formBasicPassword">
<Form.Label>Deposit Date</Form.Label>
<Form.Control type="date" placeholder="" />
</Form.Group>

<Form.Group className="" controlId="formBasicPassword">
<Form.Label>Deposit Amount</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>

<Button type='submit'>Submit your Deposit</Button>


</Form>
<img src={slip} />

</div>
            

              <div className='dep-cashsec'>
              <div className='bid-limit'>
                <h4>CURRENT BIDDING LIMIT</h4>
                <ul>
                  <li><span> Total Deposit</span> PKR 0</li>
                  <li><span> Bidding Limit</span> PKR 0</li>
                </ul>
                </div>

                <div className='depcash-box'>

                <img src={depbox} />
              </div>
              </div>
         
            </Tab.Pane>


            <Tab.Pane eventKey="second">

            <div className='pay-bank-heading'>
                <h4>Pay by Bank Transfer</h4>
              </div>
            

                    <div className='bank-list'>
                      <ul>
                        <li>Account Name:<span></span></li>
                        <li>Bank Name:</li>
                        <li>IBAN:</li>
                        <li>Account Number:</li>
                        <li>Swift Code:</li>
                        <li>Routing Number: </li>
                      </ul>
                         <img src={bank} />
                   
                     
                      </div>
              <div className='bk-cot'>
              <p>Once your transfer is completed, please submit the transfer slip using the form below, or attach by email on cs@emiratesauction.com</p>
              <p>or fax to +97144426310</p>
              <p>please allow for 24hrs before your deposit is reflected on our system.</p>
              <Form.Group className="dep-chsen">
<Form.Label></Form.Label>
<Form.Control type="file" placeholder="" />
</Form.Group>
              </div>
              <div className='bank-from'>
              <div className='change-pass-frm pay-bank'>

<Form>


<Form.Group className="" controlId="formBasicPassword">
<Form.Label>Deposit Date</Form.Label>
<Form.Control type="date" placeholder="" />
</Form.Group>

<Form.Group className="" controlId="formBasicPassword">
<Form.Label>Deposit Amount</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>

<Button type='submit'>Submit your Deposit</Button>


</Form>
</div>
          <div className='emfax'>
            <p>or by one of the following methods</p>
            <h5><img src={emat} /> cs@emiratesauction.com</h5>
            <h5><img src={fax} />123 456 789101 </h5>
          </div>


              </div>

              <div className='dep-cashsec'>
              <div className='bid-limit'>
                <h4>CURRENT BIDDING LIMIT</h4>
                <ul>
                  <li><span> Total Deposit</span> PKR 0</li>
                  <li><span> Bidding Limit</span> PKR 0</li>
                </ul>
                </div>

                <div className='depcash-box'>

                <img src={depbox} />
              </div>
              </div>

            </Tab.Pane>

            <Tab.Pane eventKey="third">

<div className='pay-bank-heading'>
    <h4>Cheque Deposit</h4>
  </div>

  <div className='bank-cheque'>
    <Row>
      <Col md={4}>
        <div className='bak-cheque-pak'>
          <h5>Pakistan</h5>
        </div>
      </Col>

      <Col md={8}>
        <div className='bank-chequ-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212644.8169176803!2d72.94602464919134!3d33.61632322093019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1669943981107!5m2!1sen!2s" ></iframe>
        </div>
      </Col>

    </Row>


  </div>

  <div className='dep-cashsec'>
              <div className='bid-limit'>
                <h4>CURRENT BIDDING LIMIT</h4>
                <ul>
                  <li><span> Total Deposit</span> PKR 0</li>
                  <li><span> Bidding Limit</span> PKR 0</li>
                </ul>
                </div>

                <div className='depcash-box'>

                <img src={depbox} />
              </div>
              </div>

              </Tab.Pane>



              <Tab.Pane eventKey="fourth">

<div className='pay-bank-heading bank-card'>
    <h4>Pay by Credit Card</h4>
    <img src={card} />

  </div>
    <div className='card-content'>
      <p>Please note that the minimum required amount is 1,000 AED.
We accept Visa and Mastercard only.</p>
<p>(Note that we do not accept Electron or ATM cards, only cards mentioned above are accepted)</p>
<p>If you select this option, you will be asked to enter your Credit Card details in the bank secure online payment page. Once your transaction has been processed you will be able to enter an auction and begin bidding.</p>
<p>The Amount will be deducted from your card and will show in your bank statement, You can request your deposit refund anytime through our application, Refund will be credited to the same card, It usually takes 7-15 working days to get the credit back, depending on your card issuing bank.</p>
<p>Also please note that you cannot include the security deposit paid by credit card in the car final price, this mean that you have to pay the full amount and the deposit will be refunded to you.</p>
    </div>

              <div className='bnk-cd-frm'>
              <Form.Group >
          <Form.Label>Deposit Amount</Form.Label>
          <Form.Control type="text" placeholder="" />
          </Form.Group>
          <p>New Bidding Deposit
          <span>PAK</span></p>
              </div>
              <div className='card-procs-btn'>
                <Button>Proceed to Payment Site</Button>
              </div>
            

  <div className='dep-cashsec'>
              <div className='bid-limit'>
                <h4>CURRENT BIDDING LIMIT</h4>
                <ul>
                  <li><span> Total Deposit</span> PKR 0</li>
                  <li><span> Bidding Limit</span> PKR 0</li>
                </ul>
                </div>

                <div className='depcash-box'>

                <img src={depbox} />
              </div>
              </div>

              </Tab.Pane>




          </Tab.Content>
          </div>
    
    </Tab.Container>

    </div>
                




              </div>
            </Col>

          </Row>

        </div>




       

      </div>
    </div>
  );

}


export default Carsdeposits;
