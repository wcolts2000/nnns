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
            <li><Link href="/networking"><a>Networking</a></Link> </li>
            <li><Link href="/computers"><a>Computers</a></Link> </li>
            <li><Link href="/voip"><a>VOIP</a></Link> </li>
            <li><Link href="/cameras"><a>Cameras</a></Link> </li>
            <li><Link href="/pos"><a>Point of Sales</a></Link> </li>
            <li><Link href="/merchantProcessing"><a>Merchant Processing</a></Link> </li>
          </ul>
        </nav>
      </header>
      <div className="header-spacer">&nbsp;</div>
    </>
  );
}

export default Header;
