import React from "react";
import "./navbar-css.css";
import TeslaLogo from "../img/TeslaLogo";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <p className="whiteNav">Read Tesla's 2021 Impact Report</p>
      </div>
      <div className="navbarOver">
        <div className="navLogo">
          <TeslaLogo />
          {/* <p>TESLA</p> */}
        </div>
        <div>
          <ul className="navServices">
            <li className="serviceItem"><span className="navText">Model S</span></li>
            <li className="serviceItem"><span className="navText">Model 3</span></li>
            <li className="serviceItem"><span className="navText">Model X</span></li>
            <li className="serviceItem"><span className="navText">Model Y</span></li>
            <li className="serviceItem"><span className="navText">Solar Roof</span></li>
            <li className="serviceItem"><span className="navText">Solar Panels</span></li>
          </ul>
        </div>
        <div>
          <ul className="webNav">
            <li className="webItem navText">Shop</li>
            <li className="webItem navText">Account</li>
            <li className="webItem navText">Menu</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
