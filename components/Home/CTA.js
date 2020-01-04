function CTA({ title, categoryList, icon, img, position="" }) {
  return (
    <section className={`home-cta ${position}`}>
      <img className="icon-bg" src={`/svg/${icon}.svg`} alt="icon"/>
      <div className="home-cta__left"><h2>{title}</h2>
        <div className="home-cta__left--icon-bar-wrapper">
          <img className="home-cta__left--icon-bar" src="/svg/accent.svg" alt="design element" />
          <img className="home-cta__left--icon" src={`/svg/${icon}.svg`} alt="icon"/>
        </div>
        <ul className="home-cta__list">
        {categoryList.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul></div>
      <div className="home-cta__right">
        <img src={`/svg/${img}.svg`} alt="product"/>
      </div>
    </section>
  );
}

export default CTA;
