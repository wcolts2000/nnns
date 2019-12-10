import React from "react";
import sprite from "./../../assets/svg/sprite.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h3>Wifi Services</h3>
        <ul>
          <li>Wifi Network Installation</li>
          <li>Wifi Network Administration</li>
          <li>Security Camera Installation</li>
        </ul>
        <small>2019 &copy; all rights reserved</small>
      </div>
      <div className="footer__right">
        <h3>Contact us with any questions</h3>
        <p>
          <svg viewBox="0 0 16 16" className="icon">
            <use xlinkHref={`${sprite}#pin`}></use>
          </svg>
          1115 S. Wells Ave.
        </p>
        <p>Reno, NV 89502</p>
        <p>
        <a href="mailto:airitsolutionsreno@gmail.com">
          <svg viewBox="0 0 16 16" className="icon mail">
            <use xlinkHref={`${sprite}#mail`}></use>
          </svg>
          Email Us</a>
        </p>
        <p>
          <a href="tel:775-555-5555">
            <svg viewBox="0 0 16 16" className="icon">
              <use xlinkHref={`${sprite}#telephone`}></use>
            </svg>
            775-555-5555
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
