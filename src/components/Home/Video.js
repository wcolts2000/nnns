import React from 'react';
import data from "../../assets/video/data.mp4";

function Video() {
  return (
    <div className="home__video-wrapper">
      <div className="home__video-caption">
        <h3>Some Title Here</h3>
        <p>Some info goes here. Make it SEO friendly adding enough keywords to make the search crawlers happy.</p>
        <p>You may even want to think of adding some useful outside link to a large reputable site to help with backlink seo optimization.</p>
        <button> <a href="#!">See Pricing Here</a></button>    
      </div>
        <video class="home__video-video" width="100%" loop autoPlay muted>
            <source src={data} type="video/mp4"/>
            Sorry, your browser does not support embedded videos.
        </video>
    </div>
  )
}

export default Video