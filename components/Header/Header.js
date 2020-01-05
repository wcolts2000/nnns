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
          {
            navOpen ? 
            <p onClick={toggleNav} className="menu-link close">X</p> : 
          <img src='/svg/menu.svg' onClick={toggleNav} className="menu-link" alt="menu icon"/>
          }
        </nav>
        <nav className={`openNav ${navOpen ? "open" : ""}`}>
          <ul>
            <li><a href="/networking" >Networking</a></li>
            <li><a href="/computers"><a>Computers</a></li>
            <li><a href="/voip"><a>VOIP</a></li>
            <li><a href="/cameras"><a>Cameras</a></li>
            <li><a href="/pos"><a>Point of Sales</a></li>
            <li><a href="/merchantProcessing"><a>Merchant Processing</a></li>
          </ul>
        </nav>
      </header>
      <div className="header-spacer">&nbsp;</div>
    </>
  );
}

export default Header;
