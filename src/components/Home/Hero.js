import React from 'react';
import sprite from "./../../assets/svg/sprite.svg";

function Hero() {
    return (
        <div className="hero">
            <div className="hero__left">
                <h1>
                    Northern Nevada Networking Services <br/> <span>Business and Hotel Wifi Network Provider</span>
                </h1>
                <p>Providing Wifi Network Installation and Service to the greater Reno/Carson Valley, NNNS is your local Network Specialists</p>
                <button>
                    <svg viewBox="0 0 60 60" className="icon hero-icon">
                        <use xlinkHref={`${sprite}#wifi-signal`}></use>
                    </svg>
                    Wifi Packages
                </button>
            </div>
            <div className="hero__right">
                <h2>Wifi Services</h2>
                <ul>
                    <li>Mesh Wifi Network Installation</li>
                    <li>Mesh Wifi Network Installation</li>
                    <li>Mesh Wifi Network Installation</li>
                    <li>Mesh Wifi Network Installation</li>
                    <li>Mesh Wifi Network Installation</li>
                    <li>Mesh Wifi Network Installation</li>
                </ul>
            </div>
        </div>
    )
}

export default Hero
