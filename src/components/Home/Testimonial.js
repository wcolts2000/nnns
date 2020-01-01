import React from 'react';
import girl from '../../assets/svg/woman-avatar.svg';
import boy from '../../assets/svg/man-avatar.svg';
import quote from '../../assets/svg/quote-left.svg';

function Testimonial() {
  return (
    <section className="home__testimonial">
      <h2>Testimonials</h2>
      <div className="home__testimonial-card-wrapper">
        <div className="home__testimonial-card">
          <img src={girl} alt="Authors Picture"/>
          <img className="quote" src={quote} alt="Authors Picture"/>
          <div className="paragraph-wrapper">
            <p>Alex has been taking care of my properties networks for years now. Whenever I get a new property, I call him to come take care of setting me up.</p>
            <p className="author">-Lynn Something</p>
          </div>
        </div>
        <div className="home__testimonial-card">
          <img src={boy} alt="Authors Picture"/>
          <img className="quote" src={quote} alt="Authors Picture"/>
          <div className="paragraph-wrapper">
            <p>Alex has been taking care of my properties networks for years now. Whenever I get a new property, I call him to come take care of setting me up.</p>
            <p className="author">-Lynn Something</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
