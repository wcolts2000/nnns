import Link from "next/link";
import '../../styles.scss';


function Header({toggleNav, navOpen}) {
  return (
    <>
      <header className="App-header">
        <nav className="nav">
          <Link href="/">
            <img className="home-link" src='/svg/NNNS_NavLogo.svg' alt="NNNS logo"/>
          </Link>
          <Link href="/">
            <a className="acct-link">Acct Login</a>
          </Link>
          {
            navOpen ? 
            <p onClick={toggleNav} className="menu-link close">X</p> : 
          <img src='/svg/menu.svg' onClick={toggleNav} className="menu-link" alt="menu icon"/>
          }
        </nav>
        <nav className={`openNav ${navOpen ? "open" : ""}`}>
          <ul>
            <li><a href="/Networking" >Networking</a></li>
            <li><a href="/Computers">Computers</a></li>
            <li><a href="/Voip">VOIP</a></li>
            <li><a href="/Cameras">Cameras</a></li>
            <li><a href="/Pos">Point of Sales</a></li>
            <li><a href="/MerchantProcessing">Merchant Processing</a></li>
          </ul>
        </nav>
      </header>
      <div className="header-spacer">&nbsp;</div>
    </>
  );
}

export default Header;
