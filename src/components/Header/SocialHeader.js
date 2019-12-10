import React from "react";
import { Link } from "react-router-dom";
import sprite from "./../../assets/svg/sprite.svg";

function SocialHeader() {
  return (
    <nav className="social-header">
      <Link to="/">Northern Nevada Networking Service</Link>
      <a
        href="https://www.facebook.com/pg/nnnsllc/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg viewBox="0 0 60 60" className="icon icon-fb">
          <use xlinkHref={`${sprite}#facebook`}></use>
        </svg>
      </a>
      <a href="tel:775-555-5555">Phone: 775-555-5555</a>
    </nav>
  );
}

export default SocialHeader;
