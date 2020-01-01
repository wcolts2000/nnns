import React from 'react';
import logo from "../../assets/svg/NNNS_Logo.svg";

function Hero() {
    return (
        <div className="hero">
            <div className="hero__left">
                <img src={logo} alt="NNNS logo"/>
            </div>
            <div className="hero__right">
                <ul>
                    <li><a href="/networking">NETWORKING</a></li>
                    <li><a href="/computers">COMPUTERS</a></li>
                    <li><a href="/voip">VOIP</a></li>
                    <li><a href="/cameras">CAMERAS</a></li>
                    <li><a href="/pos">POINT OF SALES</a></li>
                    <li><a href="/merchant">MERCHANT PROCESSING</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Hero
