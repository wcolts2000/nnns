import React from "react";
import cloudKey from "../../assets/images/cloudkey-powerful-1.jpg";
import meshAntenna from "../../assets/images/device (1).jpg";
import hangingMeshAntenna from "../../assets/images/mounted.jpg";
import wirelessAntenna from "../../assets/images/device.jpg";
import wirelessAntennaSize from "../../assets/images/size.jpg";
import switchPic from "../../assets/images/switch01.webp";
import uap1 from "../../assets/images/uap-01.png";
import uap2 from "../../assets/images/uap-02.png";
import uap3 from "../../assets/images/uap-03.png";
import uap4 from "../../assets/images/uap-04.png";

function Wifi() {
  const data = {
    pics: [
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: cloudKey
        }
      },
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: meshAntenna
        }
      },
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: hangingMeshAntenna
        }
      },
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: wirelessAntenna
        }
      },
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: wirelessAntennaSize
        }
      },
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: switchPic
        }
      },
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: uap1
        }
      },
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: uap2
        }
      },
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: uap3
        }
      },
      {
        info: {
          header: "some catchy header",
          p: "lorem ipsum dolor sat bacon french rolls with ham and cheese",
          img: uap4
        }
      }
    ]
  };
  return (
    <section className="wifi">
      <div className="wifi__hero">
        <h1 className="wifi__heading">
          We Use Only Commercial Grade
          <br />
          <br />
          Wifi Networking Products{" "}
        </h1>
      </div>
      {data.pics.map(({ info: { header, p, img } }, i) => (
        <div key={i} className={`wifi__card ${i % 2 === 0 ? "right" : ""}`}>
          <div className="wifi__card-info">
            <h2>{header}</h2>
            <p>{p}</p>
          </div>
          <div className="img">
            <img src={img} alt={`networking pic ${i}`} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Wifi;
