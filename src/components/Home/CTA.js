import React from "react";
import accent from "./../../assets/svg/accent.svg";

function CTA({ title, categoryList, icon, img, position="" }) {
  return (
    <section className={`home-cta ${position}`}>
      <img class="icon-bg" src={icon} alt="icon"/>
      <div className="home-cta__left"><h2>{title}</h2>
        <div className="home-cta__left--icon-bar-wrapper">
          <img className="home-cta__left--icon-bar" src={accent} alt="design element" />
          <img className="home-cta__left--icon" src={icon} alt="icon"/>
        </div>
        <ul className="home-cta__list">
        {categoryList.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul></div>
      <div className="home-cta__right">
        <img src={img} alt="product image"/>
      </div>
    </section>
  );
}

export default CTA;
