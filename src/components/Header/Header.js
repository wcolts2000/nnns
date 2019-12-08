import React from "react";
import { Link } from "react-router-dom";
import SocialHeader from "./SocialHeader";
import sprite from '../../assets/svg/sprite.svg'

function Header() {
  return (
    <>
      <div className="fixed-header">
        <SocialHeader />
        <header className="App-header">
          <nav className="nav">
            <Link to="/" className="home-link">
              <svg viewBox="0 0 60 60" className="icon">
                <use xlinkHref={`${sprite}#wifi-signal`}></use>
              </svg>
              HOME
            </Link>
            <Link exact to="/services">
              SERVICES
            </Link>
            <Link to="/wifi">WIFI</Link>
            <Link to="/contact">CONTACT US</Link>
          </nav>
        </header>
      </div>
      <div className="header-spacer">&nbsp;</div>
    </>
  );
}

export default Header;
