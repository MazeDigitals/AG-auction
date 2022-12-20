import React, { Component } from "react";
import Slider from "react-slick";

import const1 from './../images/construc-1.jpeg';
import const2 from './../images/construc-2.jpg';
import const3 from './../images/construc-3.jpg';
import const4 from './../images/construc-4.jpeg';
import const5 from './../images/construc-5.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
            <div className="construc-prop">
            <img src={const1} />
            </div>
          </div>

          <div>
             <div className="construc-prop">
            <img src={const2} />
            </div>
          </div>

          <div>
             <div className="construc-prop">
            <img src={const3} />
            </div>
          </div>

          <div>
             <div className="construc-prop">
            <img src={const4} />
            </div>
          </div>

          <div>
             <div className="construc-prop">
            <img src={const5} />
            </div>
          </div>

         

        </Slider>
      </div>
    );
  }
}