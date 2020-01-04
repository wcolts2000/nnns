function Testimonial() {
  return (
    <section className="home__testimonial">
      <h2>Testimonials</h2>
      <div className="home__testimonial-card-wrapper">
        <div className="home__testimonial-card">
          <img src='/svg/woman-avatar.svg' alt="Author"/>
          <img className="quote" src='/svg/quote-left.svg' alt="Author"/>
          <div className="paragraph-wrapper">
            <p>Alex has been taking care of my properties networks for years now. Whenever I get a new property, I call him to come take care of setting me up.</p>
            <p className="author">-Lynn Something</p>
          </div>
        </div>
        <div className="home__testimonial-card">
          <img src='/svg/man-avatar.svg' alt="Author"/>
          <img className="quote" src='/svg/quote-left.svg' alt="Author"/>
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
