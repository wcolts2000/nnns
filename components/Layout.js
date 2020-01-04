import Header from './Header/Header';
import Head from 'next/head';
import Footer from './Footer/Footer';
import {useState} from 'react';

const Layout = props => {
  const [mobileNav, setMobileNav] = useState({navOpen: false});
  const toggleNav = () => setMobileNav({navOpen: !mobileNav.navOpen})
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta name="description" content={props.description}/>
      </Head>
      <Header toggleNav={toggleNav} navOpen={mobileNav.navOpen}/>
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;