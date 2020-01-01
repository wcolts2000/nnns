import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/svg/NNNS_NavLogo.svg';
import hamburger from '../../assets/svg/menu.svg';


function Header({toggleNav, navOpen}) {
  return (
    <>
      <div className="fixed-header">
        <header className="App-header">
          <nav className="nav">
            <NavLink exact to="/" className="home-link">
              <img src={logo} alt="NNNS logo"/>
            </NavLink>
            <img src={hamburger} onClick={toggleNav} className="menu-link" alt="menu icon"/>
          </nav>
          <nav className={`openNav ${navOpen ? "open" : ""}`}>
            <ul>
              <li><a href="/networking">Networking</a> </li>
              <li><a href="/computers">Computers</a> </li>
              <li><a href="/voip">VOIP</a> </li>
              <li><a href="/cameras">Cameras</a> </li>
              <li><a href="/pos">Point of Sales</a> </li>
              <li><a href="/merchant">Merchant Processing</a> </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="header-spacer">&nbsp;</div>
    </>
  );
}

export default Header;
