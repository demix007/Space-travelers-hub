import React from 'react';
import '../../styles/rockets.css';

const RocketCard = () => (
  <div className="rocket-card">
    <div className="rocket-img">
      <img alt="rocket pic" />
      Image
    </div>
    <div className="rocket-desc">
      <h3 className="rocket-name">Falcon 1</h3>
      <p>
        The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX
        during 2006-2009. On 28 September 2008, Falcon 1 became the first
        privately-developed liquid-fuel
        launch vehicle to go into orbit around the Earth.
      </p>
      <button type="button" className="reserve-btn">Reserve Rocket</button>
    </div>
  </div>
);
export default RocketCard;
