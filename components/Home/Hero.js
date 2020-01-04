function Hero() {
    return (
        <section className="hero">
            <div className="hero__left">
                <img src='/svg/NNNS_Logo.svg' alt="NNNS logo"/>
            </div>
            <div className="hero__right">
                <ul>
                    <li><a href="/networking">NETWORKING</a></li>
                    <li><a href="/computers">COMPUTERS</a></li>
                    <li><a href="/voip">VOIP</a></li>
                    <li><a href="/cameras">CAMERAS</a></li>
                    <li><a href="/pos">POINT OF SALES</a></li>
                    <li><a href="/merchantProcessing">MERCHANT PROCESSING</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Hero
