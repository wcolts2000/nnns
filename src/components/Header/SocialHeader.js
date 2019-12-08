import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/images/facebook.png";
// import sprite from "./../../assets/svg/sprite.svg";

function SocialHeader() {
  return (
    <nav className="social-header">
      <Link to="/">Northern Nevada Networking Service</Link>
      <a
        href="https://www.facebook.com/pg/nnnsllc/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="fb"
          src={fb}
          alt="facebook logo"
          width="16px"
          height="16px"
        />
      </a>
      <a href="tel:775-555-5555">Phone: 775-555-5555</a>
    </nav>
  );
}

export default SocialHeader;
