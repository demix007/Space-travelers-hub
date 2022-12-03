import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/myProfile.css';

const Myprofile = () => {
  const rocketsData = useSelector((state) => state.rockets);
  return (
    <div className="profile-container">
      <div>Missions</div>
      <div className="reserved-rockets">
        <h2>My Rockets</h2>
        <ul className="rockets-list">
          {rocketsData.map((rocket) => {
            if (rocket.reserved) { return <li key={rocket.id}>{rocket.rocket_name}</li>; }
            return '';
          })}
        </ul>
      </div>
      <div>Dragons</div>
    </div>
  );
};
export default Myprofile;
