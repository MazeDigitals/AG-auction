import React from "react";
import { Link } from "react-router-dom";
// images
import caricon from "./../images/carsicon2.png";
import proIcon from "./../images/proIcon2.png";
import machine from "./../images/machine.png";
import mobile from "./../images/mobile.png";
import plate2 from "./../images/plate2.png";

const Navigation = () => {
  return (
    <div>
      <div className="web-nav">
        <ul>
          <li>
            <Link to={"/Carauction"}>
              <img src={caricon} />
              <span>129</span>
            </Link>
          </li>
          <li>
            <Link to={"/Property"}>
              <img src={proIcon} />
              <span>96</span>
            </Link>
          </li>
          <li>
            <Link to={"/Carauction"}>
              <img src={machine} />
              <span>110</span>
            </Link>
          </li>
          <li>
            <Link to={"/number-plate"}>
              <img src={plate2} />
              <span>soon</span>
            </Link>
          </li>
          <li>
            <Link to={"/mobile-phone"}>
              <img src={mobile} />
              <span>soon</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
