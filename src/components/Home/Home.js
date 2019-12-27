import React from "react";
import Hero from "./Hero";
import CTA from "./CTA";
import video from "../../assets/video/Explosion.mp4"
import logo from '../../assets/svg/NNNS_Logo.svg'

function Home({ toggleModal, ...rest }) {
  return (
    <div>
      <Hero />
      <CTA toggleModal={toggleModal} {...rest} />
      <div className="home__video-wrapper">
            <video class="home__hero-video" width="100%" loop autoPlay muted>
                <source src={video} type="video/mp4"/>
                Sorry, your browser does not support embedded videos.
            </video>
            <img class="nnns-logo" src={logo} alt="Northern Nevada Network Service Logo"/>
        </div>
    </div>
  );
}

export default Home;
