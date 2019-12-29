import React from 'react';
import data from "../../assets/video/data.mp4";

function Video() {
  return (
    <div className="home__video-wrapper">
        <video class="home__hero-video" width="100%" loop autoPlay muted>
            <source src={data} type="video/mp4"/>
            Sorry, your browser does not support embedded videos.
        </video>
    </div>
  )
}

export default Video
