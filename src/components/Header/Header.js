import React from "react";
import { NavLink } from "react-router-dom";
import SocialHeader from "./SocialHeader";
import sprite from '../../assets/svg/sprite.svg'

function Header() {
  return (
    <>
      <div className="fixed-header">
        <SocialHeader />
        <header className="App-header">
          <nav className="nav">
            <NavLink exact to="/" className="home-link">
              <svg viewBox="0 0 60 60" className="icon">
                <use xlinkHref={`${sprite}#wifi-signal`}></use>
              </svg>
              HOME
            </NavLink>
            <NavLink exact to="/services">
              SERVICES
            </NavLink>
            <NavLink to="/wifi">WIFI</NavLink>
            <NavLink to="/contact">CONTACT US</NavLink>
          </nav>
        </header>
      </div>
      <div className="header-spacer">&nbsp;</div>
    </>
  );
}

export default Header;
