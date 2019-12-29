import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/svg/NNNS_NavLogo.svg';
import hamburger from '../../assets/svg/menu.svg';


function Header() {
  return (
    <>
      <div className="fixed-header">
        <header className="App-header">
          <nav className="nav">
            <NavLink exact to="/" className="home-link">
              <img src={logo} alt="NNNS logo"/>
            </NavLink>
            <NavLink exact to="/" className="menu-link">
              <img src={hamburger} alt="menu icon"/>
            </NavLink>
          </nav>
        </header>
      </div>
      <div className="header-spacer">&nbsp;</div>
    </>
  );
}

export default Header;
