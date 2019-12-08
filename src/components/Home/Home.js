import React from "react";
import Hero from "./Hero";
import CTA from "./CTA";

function Home({ toggleModal, ...rest }) {
  return (
    <div>
      <Hero />
      <CTA toggleModal={toggleModal} {...rest} />
    </div>
  );
}

export default Home;
