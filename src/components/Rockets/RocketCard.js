import React from 'react';
import '../../styles/rockets.css';
import PropTypes from 'prop-types';

const RocketCard = (props) => {
  const {
    rocketName, description, rocketImg,
  } = props;
  return (
    <div className="rocket-card">

      <img src={rocketImg} className="rocket-img" alt="rocket pic" />

      <div className="rocket-desc">
        <h3 className="rocket-name">
          {rocketName}
        </h3>
        <p>
          {description}
        </p>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </div>
  );
};
RocketCard.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rocketImg: PropTypes.string.isRequired,
};
export default RocketCard;
