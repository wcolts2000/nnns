import React from 'react'
import cloudBanner from '../../assets/images/cloudkeyHero.jpg';
import cloudKey from '../../assets/images/cloudkey-powerful-1.jpg';
import meshAntenna from '../../assets/images/device (1).jpg';
import hangingMeshAntenna from '../../assets/images/mounted.jpg';
import wirelessAntenna from '../../assets/images/device.jpg';
import wirelessAntennaSize from '../../assets/images/size.jpg';
import switchPic from '../../assets/images/switch01.webp';
import uap1 from '../../assets/images/uap-01.png';
import uap2 from '../../assets/images/uap-02.png';
import uap3 from '../../assets/images/uap-03.png';
import uap4 from '../../assets/images/uap-04.png';



function Wifi() {
    const pics = [
        cloudBanner,
        cloudKey,
        meshAntenna,
        hangingMeshAntenna,
        wirelessAntenna,
        wirelessAntennaSize,
        switchPic,
        uap1,
        uap2,
        uap3,
        uap4
    ]
    return (
        <section className="wifi">
            <h1 className="wifi__heading">Wifi Networking Products We Use</h1>
            {pics.map((pic, i) => (
                <img key={i} src={pic} alt={`networking pic ${i}`} />
            ))}
        </section>
    )
}

export default Wifi
