import React from 'react';
import clock from '../../assets/svg/clock.svg';
import award from '../../assets/svg/award.svg';
import event from '../../assets/svg/event.svg';

function POIs() {
  return (
    <div className="home__pois">
      <div>
        <img src={clock} alt="clock icon"/>
        <h3>Locally Owned</h3>
        <p>Something catchy and informative goes here. Make sure to have enough content to fill it out well.</p>
      </div>
      <div>
        <img src={award} alt="award icon"/>
        <h3>Established</h3>
        <p>Something catchy and informative goes here. Make sure to have enough content to fill it out well.</p>
      </div>
      <div>
        <img src={event} alt="event icon"/>
        <h3>Schedule</h3>
        <p>Something catchy and informative goes here. Make sure to have enough content to fill it out well.</p>
      </div>
      
    </div>
  )
}

export default POIs
