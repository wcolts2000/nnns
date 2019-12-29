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
                    <li>NETWORKING</li>
                    <li>COMPUTERS</li>
                    <li>VOIP</li>
                    <li>CAMERAS</li>
                    <li>POINT OF SALES</li>
                    <li>MERCHANT PROCESSING</li>
                </ul>
            </div>
        </div>
    )
}

export default Hero
