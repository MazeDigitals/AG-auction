import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import ftrcard from './../images/footerlogos16.jpg';

// LOGO
// import sitelogo from '../Assets/Logo.png';



function Footer() {
  return (
    <div className='main-footer'>
      <div className='main-footer-links'>
        <Row>
        <Col sm={6}>
          <div className='ftr-logo'>
            <Link to={'/'}>
              <h1>Logo</h1>
            </Link>
            <p>Ag Auction L.L.C. is a leading UAE-based auction company in the Middle East. Founded in 2004 by innovative Emirati
               businessmen, the company specializes in automobiles, vehicle license plates, real estate and properties, asset liquidation,
                VIP mobile numbers, jewelry, time-sensitive items, and heavy machinery, plant, and construction equipment.</p>
            <p>Ag Auction has achieved numerous milestones in a short span of time since its establishment, breaking seven (7) Guinness
               World Records along the way and giving its clients from the government and private sectors higher returns for their actionable
                items and unrivaled customer service.</p>
                <ul>
                  <li><Link to={'/Termscondition'}>Terms and Conditions <FontAwesomeIcon icon={solid('arrow-right-long')} /></Link></li>
                  <li><Link to={'/'}>Learn more about Ag Auction <FontAwesomeIcon icon={solid('arrow-right-long')} /></Link></li>
                </ul>
          </div>
        </Col>
        <Col md={6}>
        <div className='ftr-links-main'>
        <Row>
          <Col md={6}>
          <div className='ftr-links'>
            <h5>Auctions</h5>
            <ul>
              <li><Link to={'/Carauction'}>Vehicles & Machinery</Link></li>
              <li><Link to={'/Carauction'}>General Auction</Link></li>
              <li><Link to={'/Property'}>Ag Properties</Link></li>
            </ul>
          </div>
          </Col>
          <Col md={6}>
           <div className='ftr-links'>
            <h5>Ag Auction</h5>
            <ul>
              <li><Link to={'/Aboutus'}>About Us</Link></li>
              <li><Link to={'/Contactus'}>Contact Us</Link></li>
              <li><Link to={'/Property'}>Property Auction Results</Link></li>
              <li><Link to={'/Register'}>Registration</Link></li>
            </ul>
          </div> 
          </Col>
          </Row>
          <Row>
          <Col md={12}>
           <div className='ftr-links'>
            <h5>Help</h5>
            <ul>
              <li><Link to={'/Register'}>Forgot Password</Link></li>
              <li><Link to={'/FAQ'}>FAQ</Link></li>
              <li><Link to={'/Register'}>Registration</Link></li>
              <li><Link to={'/FAQ'}>How to bid</Link></li>
            </ul>
          </div> 
          </Col>
        </Row>
        </div>
        </Col> 
        </Row>

        <Row>
          <Col md={6}>
            <div className='ftr-cntc'>
              <ul>
                <li className='ftr-cntc-title'>At Your Service <span>24/7</span></li>
                <li>PAK 123 456789</li>
                <li>INTL +012 123 456789</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
          <div className='ftr-soc'>
            <h6>Follow us on:</h6>
             <ul className='f-social'>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={brands('twitter')} /></Link>
              </li>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={brands('facebook')} /></Link>
              </li>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={brands('instagram')} /></Link>
              </li>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={brands('google-plus-g')} /></Link>
              </li>
              <li>
                <Link to={'/'}><FontAwesomeIcon icon={brands('youtube')} /></Link>
              </li>
            </ul>
            </div>
            </Col>
        </Row>
        </div>

        <div className='copyrit'>
          <p>Copyright © 2004 - 2022 Ag Auction All rights reserved.</p>
          <img src={ftrcard} alt=''/>
        </div>

    </div>
    
  );
}

export default Footer;
