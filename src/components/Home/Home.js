import React from "react";
import Hero from "./Hero";
import CTA from "./CTA";
import accessPoints from "../../assets/svg/access-points.svg"
import wifi from "../../assets/svg/wifi.svg"
import camera from "../../assets/svg/camera.svg"
import cameraIcon from "../../assets/svg/camera-icon.svg"
import pos from "../../assets/svg/pos.svg"
import computer from "../../assets/svg/computer.svg"
import Video from "./Video";
import POIs from "./POIs";

const networkingList = ["Wifi Mesh Networks", "Network Administration", "Network Engineering", "Point to Point Connections", "Cable Runs"];
const computersList = ["New Computers", "Refurbished Computers", "Remote Printer Installations", "VOIP Systems", "Merchant Processing", "Credit Card Machine Integration", "Hosted Hospitality Solutions", "Hospitality Communication Solutions"];
const camerasList = ["Security Cameras", "IP Cameras"];

function Home({ toggleModal, ...rest }) {
  return (
    <div>
      <Hero />
      <CTA title="Networking" icon={wifi} img={accessPoints} categoryList={networkingList} />
      <POIs />
      <Video />
      <CTA title="Computers" icon={computer} img={pos} categoryList={computersList} />
      <CTA title="Cameras" icon={cameraIcon} img={camera} categoryList={camerasList} />
    </div>
  );
}

export default Home;
