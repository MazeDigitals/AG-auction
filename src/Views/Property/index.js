import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import Navigation from '../../Extends/Navigation';
import React, { Component, useEffect } from 'react';
import Timer from '../../Extends/Timer';

// images
import alertimg from './../../images/smallalert.png';
import car1 from './../../images/car1.jpg';
import watchIcon from './../../images/watchIcon.png';
import image from './../../images/image.jpg';
import image2 from './../../images/image2.jpg';
import image3 from './../../images/image3.jpg';
import properban from './../../images/banner.jpg';
import proploc from './../../images/properties-loc.png';
import prop1 from './../../images/property-1.jpg';
import prop2 from './../../images/property-2.jpg';
import prop3 from './../../images/property-3.jpg';
import prop4 from './../../images/property-4.jpg';
import prop5 from './../../images/property-5.jpg';
import prop6 from './../../images/property-6.jpg';
import prop7 from './../../images/property-7.jpg';
import prop8 from './../../images/property-8.jpg';
import prop9 from './../../images/property-9.jpg';
import prop10 from './../../images/property-10.jpg';
import prop11 from './../../images/property-11.jpg';

function Property() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

    return (
      <div className='carauction'>
        <div className='ar-space body-mrgn'>
            
          <Navigation/>

          {/* Car Filter Btns Start */}
            {/* <div className='filter-btns'>
                <Row>

                  <Col md={4}>
                    <div className='exp-serv-btn'>
                       <ul>
                       <li><Link to={'/'}>Print</Link></li>
                       <li><Link to={'/'}>F A Q</Link></li>
                       <li><Link to={'/'}>Export Service</Link></li>
                       </ul> 
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className='ctgr-serv-btn'>
                       <ul>
                       <li><Link to={'/'}>Machineries</Link></li>
                       <li><Link to={'/'}>Surplus</Link></li>
                       <li><Link to={'/'}>Vehicles</Link></li>
                       <li><Link className='active' to={'/'}>All</Link></li>
                       </ul> 
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className='srch-serv-btn'>
                       <Button>Search<FontAwesomeIcon icon={solid('search')} /></Button>
                    </div>
                  </Col>

                </Row>
            </div> */}
          {/* Car Filter Btns End */}

          <div className='proper-top-ban'>

              <div className='propert-sev'>
                <h3>47 <span>Properties</span></h3>
              </div>

              <div className='proper-ban-im'>
              <img src={properban} alt="" />
              </div>

              <div className='prop-timer'>
                <p>Auction End Date <span> 15 Jan 2018</span></p>
                <Timer date="Feb 5, 2023 15:37:25" />
              </div>
          </div>

          <div className='my-property'>

              <div className='property-faq-btn'>
              <Link to={'/FAQ'}>FAQ</Link>
              <Link to={'/Property'}>My Properties</Link>
              <Link to={'/'}>Previous Auction</Link>
               
              </div>

              <div className='prop-mid-heading'>
                <h3>Online Auction</h3>
              </div>

              <div className='prop-ban-loc'>
              <img src={proploc} alt="" />
              </div>
          </div>

            <div className='property-box-all'>
            
          <div className='property-alrt-box'>
            <p><img src={alertimg} alt="" />Bid on any property in the last 3 minutes of the property ending time will increase the property time by 3 minutes every time.</p>
          </div>

          <Row>

          <Col md={4}>
            <div className='property-all-box'>
            <div className='resid-prop-all'>
          <div className='residentail-im'>
          <img src={prop1} alt="" />
          <span><small>Residential Villa - Al Rumailah 2 - Ajman</small></span>
          </div>
          <div className='resid-content'>
            <small>12500.99</small>
            <Link to={'/Propertydetails'}>View Details</Link>
          </div>

              <div className='prop-tableline'>
          <div className='allbox-bor'>

          <div className='prty-id'>
            <small>Property Id # </small>
            <p>4800</p>
          </div>

          <div className='bids-id'>
            <small>Bids # </small>
            <p>0</p>
          </div>

          <div className='curent-price'>
            <small>Current Price</small>
            <p>PKR<span>1,562,500</span></p>
          </div>

          </div>

          <div className='prop-time'>
            <div className='pr-time-st'>
              <small>Time Remaining</small>
              <h6>10 <span>Hours</span> 56 <span>M</span> 59<span>S</span></h6>
            </div>
            <div className='pr-ti-end'>
              <small>End Time</small>
              <h6>12:00 pm 29 Nov 2022</h6>
            </div>
          </div>

          <div className='prop-last-line'>
            <div className='prop-circ'>

            </div>
            <div className='prop-add'>
            <img src={watchIcon} alt="" />
            </div>
            <div className='prop-bid-btn'>
              <Button>Bid Now</Button>
            </div>
          </div>

          </div>


          </div>
          </div>
          </Col>

          <Col md={4}>
            <div className='property-all-box'>
            <div className='resid-prop-all'>
          <div className='residentail-im'>
          <img src={prop2} alt="" />
          <span><small>Residential Villa - Al Rumailah 2 - Ajman</small></span>
          </div>
          <div className='resid-content'>
            <small>12500.99</small>
             <Link to={'/Propertydetails'}>View Details</Link>
          </div>

              <div className='prop-tableline'>
          <div className='allbox-bor'>

          <div className='prty-id'>
            <small>Property Id # </small>
            <p>4800</p>
          </div>

          <div className='bids-id'>
            <small>Bids # </small>
            <p>0</p>
          </div>

          <div className='curent-price'>
            <small>Current Price</small>
            <p>PKR<span>1,562,500</span></p>
          </div>

          </div>

          <div className='prop-time'>
            <div className='pr-time-st'>
              <small>Time Remaining</small>
              <h6>10 <span>Hours</span> 56 <span>M</span> 59<span>S</span></h6>
            </div>
            <div className='pr-ti-end'>
              <small>End Time</small>
              <h6>12:00 pm 29 Nov 2022</h6>
            </div>
          </div>

          <div className='prop-last-line'>
            <div className='prop-circ'>

            </div>
            <div className='prop-add'>
            <img src={watchIcon} alt="" />
            </div>
            <div className='prop-bid-btn'>
              <Button>Bid Now</Button>
            </div>
          </div>

          </div>


          </div>
          </div>
          </Col>


          <Col md={4}>
            <div className='property-all-box'>
            <div className='resid-prop-all'>
          <div className='residentail-im'>
          <img src={prop3} alt="" />
          <span><small>Residential Villa - Al Rumailah 2 - Ajman</small></span>
          </div>
          <div className='resid-content afstar'>
            <small>12500.99</small>
             <Link to={'/Propertydetails'}>View Details</Link>
          </div>

              <div className='prop-tableline'>
          <div className='allbox-bor'>

          <div className='prty-id'>
            <small>Property Id # </small>
            <p>4800</p>
          </div>

          <div className='bids-id'>
            <small>Bids # </small>
            <p>0</p>
          </div>

          <div className='curent-price'>
            <small>Current Price</small>
            <p>PKR<span>1,562,500</span></p>
          </div>

          </div>

          <div className='prop-time'>
            <div className='pr-time-st'>
              <small>Time Remaining</small>
              <h6>10 <span>Hours</span> 56 <span>M</span> 59<span>S</span></h6>
            </div>
            <div className='pr-ti-end'>
              <small>End Time</small>
              <h6>12:00 pm 29 Nov 2022</h6>
            </div>
          </div>

          <div className='prop-last-line'>
            <div className='prop-circ'>

            </div>
            <div className='prop-add'>
            <img src={watchIcon} alt="" />
            </div>
            <div className='prop-bid-btn'>
              <Button>Bid Now</Button>
            </div>
          </div>

          </div>


          </div>
          </div>
          </Col>

          </Row>

          <Row>

<Col md={4}>
  <div className='property-all-box'>
  <div className='resid-prop-all'>
<div className='residentail-im'>
<img src={prop4} alt="" />
<span><small>Residential Villa - Al Rumailah 2 - Ajman</small></span>
</div>
<div className='resid-content'>
  <small>12500.99</small>
   <Link to={'/Propertydetails'}>View Details</Link>
</div>

    <div className='prop-tableline'>
<div className='allbox-bor'>

<div className='prty-id'>
  <small>Property Id # </small>
  <p>4800</p>
</div>

<div className='bids-id'>
  <small>Bids # </small>
  <p>0</p>
</div>

<div className='curent-price'>
  <small>Current Price</small>
  <p>PKR<span>1,562,500</span></p>
</div>

</div>

<div className='prop-time'>
  <div className='pr-time-st'>
    <small>Time Remaining</small>
    <h6>10 <span>Hours</span> 56 <span>M</span> 59<span>S</span></h6>
  </div>
  <div className='pr-ti-end'>
    <small>End Time</small>
    <h6>12:00 pm 29 Nov 2022</h6>
  </div>
</div>

<div className='prop-last-line'>
  <div className='prop-circ'>

  </div>
  <div className='prop-add'>
  <img src={watchIcon} alt="" />
  </div>
  <div className='prop-bid-btn'>
    <Button>Bid Now</Button>
  </div>
</div>

</div>


</div>
</div>
</Col>

<Col md={4}>
  <div className='property-all-box'>
  <div className='resid-prop-all'>
<div className='residentail-im'>
<img src={prop5} alt="" />
<span><small>Residential Villa - Al Rumailah 2 - Ajman</small></span>
</div>
<div className='resid-content'>
  <small>12500.99</small>
   <Link to={'/Propertydetails'}>View Details</Link>
</div>

    <div className='prop-tableline'>
<div className='allbox-bor'>

<div className='prty-id'>
  <small>Property Id # </small>
  <p>4800</p>
</div>

<div className='bids-id'>
  <small>Bids # </small>
  <p>0</p>
</div>

<div className='curent-price'>
  <small>Current Price</small>
  <p>PKR<span>1,562,500</span></p>
</div>

</div>

<div className='prop-time'>
  <div className='pr-time-st'>
    <small>Time Remaining</small>
    <h6>10 <span>Hours</span> 56 <span>M</span> 59<span>S</span></h6>
  </div>
  <div className='pr-ti-end'>
    <small>End Time</small>
    <h6>12:00 pm 29 Nov 2022</h6>
  </div>
</div>

<div className='prop-last-line'>
  <div className='prop-circ'>

  </div>
  <div className='prop-add'>
  <img src={watchIcon} alt="" />
  </div>
  <div className='prop-bid-btn'>
    <Button>Bid Now</Button>
  </div>
</div>

</div>


</div>
</div>
</Col>


<Col md={4}>
  <div className='property-all-box'>
  <div className='resid-prop-all'>
<div className='residentail-im'>
<img src={prop6} alt="" />
<span><small>Residential Villa - Al Rumailah 2 - Ajman</small></span>
</div>
<div className='resid-content afstar'>
  <small>12500.99</small>
   <Link to={'/Propertydetails'}>View Details</Link>
</div>

    <div className='prop-tableline'>
<div className='allbox-bor'>

<div className='prty-id'>
  <small>Property Id # </small>
  <p>4800</p>
</div>

<div className='bids-id'>
  <small>Bids # </small>
  <p>0</p>
</div>

<div className='curent-price'>
  <small>Current Price</small>
  <p>PKR<span>1,562,500</span></p>
</div>

</div>

<div className='prop-time'>
  <div className='pr-time-st'>
    <small>Time Remaining</small>
    <h6>10 <span>Hours</span> 56 <span>M</span> 59<span>S</span></h6>
  </div>
  <div className='pr-ti-end'>
    <small>End Time</small>
    <h6>12:00 pm 29 Nov 2022</h6>
  </div>
</div>

<div className='prop-last-line'>
  <div className='prop-circ'>

  </div>
  <div className='prop-add'>
  <img src={watchIcon} alt="" />
  </div>
  <div className='prop-bid-btn'>
    <Button>Bid Now</Button>
  </div>
</div>

</div>


</div>
</div>
</Col>

          </Row>


          <Row>

          <Col md={4}>
            <div className='property-all-box'>
            <div className='resid-prop-all'>
          <div className='residentail-im'>
          <img src={prop7} alt="" />
          <span><small>Residential Villa - Al Rumailah 2 - Ajman</small></span>
          </div>
          <div className='resid-content'>
            <small>12500.99</small>
             <Link to={'/Propertydetails'}>View Details</Link>
          </div>

              <div className='prop-tableline'>
          <div className='allbox-bor'>

          <div className='prty-id'>
            <small>Property Id # </small>
            <p>4800</p>
          </div>

          <div className='bids-id'>
            <small>Bids # </small>
            <p>0</p>
          </div>

          <div className='curent-price'>
            <small>Current Price</small>
            <p>PKR<span>1,562,500</span></p>
          </div>

          </div>

          <div className='prop-time'>
            <div className='pr-time-st'>
              <small>Time Remaining</small>
              <h6>10 <span>Hours</span> 56 <span>M</span> 59<span>S</span></h6>
            </div>
            <div className='pr-ti-end'>
              <small>End Time</small>
              <h6>12:00 pm 29 Nov 2022</h6>
            </div>
          </div>

          <div className='prop-last-line'>
            <div className='prop-circ'>

            </div>
            <div className='prop-add'>
            <img src={watchIcon} alt="" />
            </div>
            <div className='prop-bid-btn'>
              <Button>Bid Now</Button>
            </div>
          </div>

          </div>


          </div>
          </div>
          </Col>

          <Col md={4}>
            <div className='property-all-box'>
            <div className='resid-prop-all'>
          <div className='residentail-im'>
          <img src={prop8} alt="" />
          <span><small>Residential Villa - Al Rumailah 2 - Ajman</small></span>
          </div>
          <div className='resid-content'>
            <small>12500.99</small>
             <Link to={'/Propertydetails'}>View Details</Link>
          </div>

              <div className='prop-tableline'>
          <div className='allbox-bor'>

          <div className='prty-id'>
            <small>Property Id # </small>
            <p>4800</p>
          </div>

          <div className='bids-id'>
            <small>Bids # </small>
            <p>0</p>
          </div>

          <div className='curent-price'>
            <small>Current Price</small>
            <p>PKR<span>1,562,500</span></p>
          </div>

          </div>

          <div className='prop-time'>
            <div className='pr-time-st'>
              <small>Time Remaining</small>
              <h6>10 <span>Hours</span> 56 <span>M</span> 59<span>S</span></h6>
            </div>
            <div className='pr-ti-end'>
              <small>End Time</small>
              <h6>12:00 pm 29 Nov 2022</h6>
            </div>
          </div>

          <div className='prop-last-line'>
            <div className='prop-circ'>

            </div>
            <div className='prop-add'>
            <img src={watchIcon} alt="" />
            </div>
            <div className='prop-bid-btn'>
              <Button>Bid Now</Button>
            </div>
          </div>

          </div>


          </div>
          </div>
          </Col>


          <Col md={4}>
            <div className='property-all-box'>
            <div className='resid-prop-all'>
          <div className='residentail-im'>
          <img src={prop9} alt="" />
          <span><small>Residential Villa - Al Rumailah 2 - Ajman</small></span>
          </div>
          <div className='resid-content afstar'>
            <small>12500.99</small>
             <Link to={'/Propertydetails'}>View Details</Link>
          </div>

              <div className='prop-tableline'>
          <div className='allbox-bor'>

          <div className='prty-id'>
            <small>Property Id # </small>
            <p>4800</p>
          </div>

          <div className='bids-id'>
            <small>Bids # </small>
            <p>0</p>
          </div>

          <div className='curent-price'>
            <small>Current Price</small>
            <p>PKR<span>1,562,500</span></p>
          </div>

          </div>

          <div className='prop-time'>
            <div className='pr-time-st'>
              <small>Time Remaining</small>
              <h6>10 <span>Hours</span> 56 <span>M</span> 59<span>S</span></h6>
            </div>
            <div className='pr-ti-end'>
              <small>End Time</small>
              <h6>12:00 pm 29 Nov 2022</h6>
            </div>
          </div>

          <div className='prop-last-line'>
            <div className='prop-circ'>

            </div>
            <div className='prop-add'>
            <img src={watchIcon} alt="" />
            </div>
            <div className='prop-bid-btn'>
              <Button>Bid Now</Button>
            </div>
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
  
  
  export default Property;
  