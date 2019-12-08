import React from "react";
import sprite from "./../../assets/svg/sprite.svg";

function CTA({ toggleModal }) {
  return (
    <main>
      <figure className="card">
        <svg viewBox="0 0 60 60" className="icon">
          <use xlinkHref={`${sprite}#sitemap`}></use>
        </svg>
        <figcaption>Wifi Services</figcaption>
        <button onClick={() => toggleModal("wifi")}>DETAILS</button>
      </figure>
      <figure className="card">
        <svg viewBox="0 0 60 60" className="icon">
          <use xlinkHref={`${sprite}#save`}></use>
        </svg>
        <figcaption>Pricing</figcaption>
        <button onClick={() => toggleModal("pricing")}>DETAILS</button>
      </figure>
      <figure className="card">
        <svg viewBox="0 0 60 60" className="icon">
          <use xlinkHref={`${sprite}#maps-and-location`}></use>
        </svg>
        <figcaption>Security Cameras</figcaption>
        <button onClick={() => toggleModal("cameras")}>DETAILS</button>
      </figure>
      <figure className="card">
        <svg viewBox="0 0 60 60" className="icon">
          <use xlinkHref={`${sprite}#survey`}></use>
        </svg>
        <figcaption>Free Job Appraisal</figcaption>
        <button onClick={() => toggleModal("appraisal")}>DETAILS</button>
      </figure>
    </main>
  );
}

export default CTA;
