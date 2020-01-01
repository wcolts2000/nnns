import React from "react";
import phone from "./../../assets/svg/phone.svg";
import email from "./../../assets/svg/email.svg";
import facebook from "./../../assets/svg/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-list">
        <h3>Networking Services</h3>
        <ul>
          <li>Wifi Mesh Network</li>
          <li>Network Administration</li>
          <li>Network Engineering</li>
          <li>Point to Point Connections</li>
          <li>Cable Runs</li>
        </ul>
      </div>

      <div className="footer-list">
        <h3>Computers</h3>
        <ul>
          <li>New Computers</li>
          <li>Refurbished Computers</li>
          <li>Remote Printer Installation</li>
          <li>VOIP Systems</li>
          <li>Merchant Processing</li>
          <li>Credit Card Machine Integrations</li>
          <li>Hosted Hospitality Solutions</li>
          <li>Hospitality Communication Solutions</li>
        </ul>
      </div>
      <div className="footer-list">
        <h3>Cameras</h3>
        <ul>
          <li>Security Cameras</li>
          <li>IP Cameras</li>
        </ul>
      </div>
      <div className="footer-list last">
      <h3>Network tips and tricks</h3>
        <ul>
          <li>5 tips to make your network faster</li>
          <li>Is your network secure? Check these settings</li>
          <li>IP cameras, what's the benefits?</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2019 | Design by Hurry Up Print. All Rights Reserved</p>
        <div className="footer-icons">
          <a href="tel:775-555-5555"> <img src={phone} alt="phone"/></a>
          <a href="mailto:airitsolutionsreno@gmail.com"> <img src={email} alt="email"/></a>
          <a href="https://www.facebook.com/pg/nnnsllc/"
          rel="noopener noreferrer"
          target="_blank"> <img src={facebook} alt="facebook"/></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
