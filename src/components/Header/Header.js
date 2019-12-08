import React from "react";
import { Link } from "react-router-dom";
import SocialHeader from "./SocialHeader";

function Header() {
  return (
    <>
      <div className="fixed-header">
        <SocialHeader />
        <header className="App-header">
          <nav className="nav">
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
