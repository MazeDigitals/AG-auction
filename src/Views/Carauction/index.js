import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import Navigation from '../../Extends/Navigation';
import React, { Component, useEffect } from 'react';

// images
import alertimg from './../../images/smallalert.png';
import car1 from './../../images/car1.jpg';
import watchIcon from './../../images/watchIcon.png';
import image from './../../images/image.jpg';
import image2 from './../../images/image2.jpg';
import image3 from './../../images/image3.jpg';

function Carauction() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

    return (
      <div className='carauction'>
        <div className='ar-space body-mrgn'>
            
          <Navigation/>

          {/* Car Filter Btns Start */}
            <div className='filter-btns'>
                <Row>

                  <Col md={4}>
                    <div className='exp-serv-btn'>
                       <ul>
                       <li><Link to={'/'}>Print</Link></li>
                       <li><Link to={'/FAQ'}>F A Q</Link></li>
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
            </div>
          {/* Car Filter Btns End */}

          <div className='car-disp'>
            <h6><FontAwesomeIcon icon={solid('car')} />Cars & Machineries Auction</h6>
            <p>The first and the largest online auction in Pakistan for cars and machineries, Buy new and used cars
            in pak, shipping and delivery service are available, Sell your car at the highest price online with no worries visitin
             New, used, damaged and Salvaged cars and machineries with detailed information about the car such as shape, type, color,
             mileage, and the year of manufacture, Contact us now to sell your car.</p>
            <p>Shipping services is also available to all over the world with good prices, professional and safe shipping to your door.</p>
          </div>

          <div className='alrt-box'>
            <p><img src={alertimg} alt="" />Please note: any bid on any car in the last 4 minutes of the car ending time will increase the time of the car with 4 minutes every time.</p>
          </div>

          <div className='prod-fltr'>
            <div className='prod-fltr-blk'>
               <span>View by</span>
               <Button><FontAwesomeIcon icon={solid('list')} /></Button> 
            </div>
            <div className='prod-fltr-blk'>
               <span>View</span>
               <Button className="active">All Cars</Button>
               <Button>My Cars</Button> 
            </div>
            <div className='prod-fltr-blk'>
               <span>Sort by</span>
               <Button>Lot#</Button>
               <Button>Current Price</Button> 
               <Button>Bids #</Button>
               <Button className="active">End Time</Button> 
               <Button>Year</Button>
               <Button>Mileage</Button> 
            </div>
            <div className='prod-fltr-blk'>
               <Button className="active"><FontAwesomeIcon icon={solid('caret-up')} /></Button>
               <Button><FontAwesomeIcon icon={solid('caret-down')} /></Button> 
            </div>
          </div>

           
           <div className='nav-pg-name'>
            
            <div className='pgnation-blk'>
               <Row>
                <Col md={4}>
                   <span className='num-of-pg'>Page 1 of 8</span> 
                </Col>
                <Col md={4}>
                <div className='vcl-pgintion'>
                 <span>View</span>
                 <Button>10</Button>
                 <Button>25</Button>
                 <Button>35</Button>
                 <Button>50</Button>
                 <Button>80</Button>
                 <Button className='active'>100</Button>
                 <span>Vehicles per page</span>
                </div> 
                </Col>
                <Col md={4}>
                  <div className='pgnation-num'>
                  <Button className='active'>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                  <Button>5</Button>
                  <Button>6</Button>
                  <Button><FontAwesomeIcon icon={solid('ellipsis')} /></Button>
                  <Button><FontAwesomeIcon icon={solid('angle-right')} /></Button>
                  <Button><FontAwesomeIcon icon={solid('angles-right')} /></Button>
                  </div>
                </Col>
               </Row> 
            </div>

            {/* Products Sec Start */}
            <div className='prod-tbl'>
              <div className='prod-img'>
                <Link to={'/'}><img src={car1} alt="" /></Link>
                <span className='img-quant'>30 Images</span>
              </div>
              <div className='prod-disp-main'>
              <div className='prod-disp-blk'>
              <div className='prod-disp-title'><h4>Peugeot 407  2002</h4><span><Button><FontAwesomeIcon icon={solid('star')} /></Button></span></div>
              <div className='prod-disp-txt'>
                <p>Conditional on provider's approval - To be Sold As Is Where Is - In the frame of the precautionary measures
                   pursued by the company, the vehicle will be - 5% VAT will be applied to final auction price</p>
                <Link to={'/car-details'}>View Details</Link>
                </div>
              </div>
              <div className='prod-point-main'>
               
              <div class='prod-disp-num prod-point-num'><small>Current Price</small><span><b>Rs</b>000,000</span></div>
              <div class='prod-disp-num prod-point-num'><small>Min. Increment</small><span><b>Rs</b>00,000</span></div>
              <div class='prod-disp-num prod-point-num'><small>Bids #</small><span>0</span></div>
              <div class='prod-disp-num prod-point-num'><small>Time Remaining</small><span>3 : 15</span></div>
              <div class='prod-disp-num prod-point-num end-tm-blk'><small>End Time</small><span>06:00pm 29 Nov 2022</span></div>

              </div>
              </div>
              <div className='prod-disp-lot'>
              <div className='prod-disp-num prod-num-hit'>
                <small>Lot#</small>
                <span>00000</span>
                </div>
                <div className='wtch-blk-nm'>
                <div className='circ-blk'>
                  <span>i</span>
                </div>
                <div className='watch-blk'>
                  <img src={watchIcon} alt="" />
                </div>
                </div>
              </div>
              <div className='prod-disp-odom'>
              <div className='prod-disp-num prod-disp-odo prod-num-hit'>
                <small>Odometer</small>
                <span>N/A</span>
                </div>
                <div className='prod-disp-btn'>
                  <Button>Bid Now</Button>
                </div>
              </div>
            </div>
            {/* Products Sec End */}

            {/* Products Sec Start */}
            <div className='prod-tbl'>
              <div className='prod-img'>
                <Link to={'/'}><img src={image} alt="" /></Link>
                <span className='img-quant'>20 Images</span>
              </div>
              <div className='prod-disp-main'>
              <div className='prod-disp-blk'>
              <div className='prod-disp-title'><h4>Bentley Bentayga 2018</h4><span><Button><FontAwesomeIcon icon={solid('star')} /></Button></span></div>
              <div className='prod-disp-txt'>
                <p>Conditional on provider's approval - To be Sold As Is Where Is - In the frame of the precautionary measures
                   pursued by the company, the vehicle will be - 5% VAT will be applied to final auction price</p>
                <Link to={'/car-details'}>View Details</Link>
                </div>
              </div>
              <div className='prod-point-main'>
               
              <div class='prod-disp-num prod-point-num'><small>Current Price</small><span><b>Rs</b>000,000</span></div>
              <div class='prod-disp-num prod-point-num'><small>Min. Increment</small><span><b>Rs</b>00,000</span></div>
              <div class='prod-disp-num prod-point-num'><small>Bids #</small><span>0</span></div>
              <div class='prod-disp-num prod-point-num'><small>Time Remaining</small><span>3 : 15</span></div>
              <div class='prod-disp-num prod-point-num end-tm-blk'><small>End Time</small><span>06:00pm 29 Nov 2022</span></div>

              </div>
              </div>
              <div className='prod-disp-lot'>
              <div className='prod-disp-num prod-num-hit'>
                <small>Lot#</small>
                <span>00000</span>
                </div>
                <div className='wtch-blk-nm'>
                <div className='circ-blk'>
                  <span>i</span>
                </div>
                <div className='watch-blk'>
                  <img src={watchIcon} alt="" />
                </div>
                </div>
              </div>
              <div className='prod-disp-odom'>
              <div className='prod-disp-num prod-disp-odo prod-num-hit'>
                <small>Odometer</small>
                <span>N/A</span>
                </div>
                <div className='prod-disp-btn'>
                  <Button>Bid Now</Button>
                </div>
              </div>
            </div>
            {/* Products Sec End */}

            {/* Products Sec Start */}
            <div className='prod-tbl'>
              <div className='prod-img'>
                <Link to={'/'}><img src={image2} alt="" /></Link>
                <span className='img-quant'>25 Images</span>
              </div>
              <div className='prod-disp-main'>
              <div className='prod-disp-blk'>
              <div className='prod-disp-title'><h4>Lexus LX 570 2020</h4><span><Button><FontAwesomeIcon icon={solid('star')} /></Button></span></div>
              <div className='prod-disp-txt'>
                <p>Conditional on provider's approval - To be Sold As Is Where Is - In the frame of the precautionary measures
                   pursued by the company, the vehicle will be - 5% VAT will be applied to final auction price</p>
                <Link to={'/car-details'}>View Details</Link>
                </div>
              </div>
              <div className='prod-point-main'>
               
              <div class='prod-disp-num prod-point-num'><small>Current Price</small><span><b>Rs</b>000,000</span></div>
              <div class='prod-disp-num prod-point-num'><small>Min. Increment</small><span><b>Rs</b>00,000</span></div>
              <div class='prod-disp-num prod-point-num'><small>Bids #</small><span>0</span></div>
              <div class='prod-disp-num prod-point-num'><small>Time Remaining</small><span>3 : 15</span></div>
              <div class='prod-disp-num prod-point-num end-tm-blk'><small>End Time</small><span>06:00pm 29 Nov 2022</span></div>

              </div>
              </div>
              <div className='prod-disp-lot'>
              <div className='prod-disp-num prod-num-hit'>
                <small>Lot#</small>
                <span>00000</span>
                </div>
                <div className='wtch-blk-nm'>
                <div className='circ-blk'>
                  <span>i</span>
                </div>
                <div className='watch-blk'>
                  <img src={watchIcon} alt="" />
                </div>
                </div>
              </div>
              <div className='prod-disp-odom'>
              <div className='prod-disp-num prod-disp-odo prod-num-hit'>
                <small>Odometer</small>
                <span>N/A</span>
                </div>
                <div className='prod-disp-btn'>
                  <Button>Bid Now</Button>
                </div>
              </div>
            </div>
            {/* Products Sec End */}

            {/* Products Sec Start */}
            <div className='prod-tbl'>
              <div className='prod-img'>
                <Link to={'/'}><img src={image3} alt="" /></Link>
                <span className='img-quant'>40 Images</span>
              </div>
              <div className='prod-disp-main'>
              <div className='prod-disp-blk'>
              <div className='prod-disp-title'><h4>Rolls Royce Phantom 2005</h4><span><Button><FontAwesomeIcon icon={solid('star')} /></Button></span></div>
              <div className='prod-disp-txt'>
                <p>Conditional on provider's approval - To be Sold As Is Where Is - In the frame of the precautionary measures
                   pursued by the company, the vehicle will be - 5% VAT will be applied to final auction price</p>
                <Link to={'/car-details'}>View Details</Link>
                </div>
              </div>
              <div className='prod-point-main'>
               
              <div class='prod-disp-num prod-point-num'><small>Current Price</small><span><b>Rs</b>000,000</span></div>
              <div class='prod-disp-num prod-point-num'><small>Min. Increment</small><span><b>Rs</b>00,000</span></div>
              <div class='prod-disp-num prod-point-num'><small>Bids #</small><span>0</span></div>
              <div class='prod-disp-num prod-point-num'><small>Time Remaining</small><span>3 : 15</span></div>
              <div class='prod-disp-num prod-point-num end-tm-blk'><small>End Time</small><span>06:00pm 29 Nov 2022</span></div>

              </div>
              </div>
              <div className='prod-disp-lot'>
              <div className='prod-disp-num prod-num-hit'>
                <small>Lot#</small>
                <span>00000</span>
                </div>
                <div className='wtch-blk-nm'>
                <div className='circ-blk'>
                  <span>i</span>
                </div>
                <div className='watch-blk'>
                  <img src={watchIcon} alt="" />
                </div>
                </div>
              </div>
              <div className='prod-disp-odom'>
              <div className='prod-disp-num prod-disp-odo prod-num-hit'>
                <small>Odometer</small>
                <span>N/A</span>
                </div>
                <div className='prod-disp-btn'>
                  <Button>Bid Now</Button>
                </div>
              </div>
            </div>
            {/* Products Sec End */}

            <div className='pgnation-blk pgnation-blk-btm'>
               <Row>
                <Col md={4}>
                   <span className='num-of-pg'>Page 1 of 8</span> 
                </Col>
                <Col md={4}>
                <div className='vcl-pgintion'>
                 <span>View</span>
                 <Button>10</Button>
                 <Button>25</Button>
                 <Button>35</Button>
                 <Button>50</Button>
                 <Button>80</Button>
                 <Button className='active'>100</Button>
                 <span>Vehicles per page</span>
                </div> 
                </Col>
                <Col md={4}>
                  <div className='pgnation-num'>
                  <Button className='active'>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                  <Button>5</Button>
                  <Button>6</Button>
                  <Button><FontAwesomeIcon icon={solid('ellipsis')} /></Button>
                  <Button><FontAwesomeIcon icon={solid('angle-right')} /></Button>
                  <Button><FontAwesomeIcon icon={solid('angles-right')} /></Button>
                  </div>
                </Col>
               </Row> 
            </div>

           </div>

           




        </div>
      </div>
    );
    
  }
  
  
  export default Carauction;
  