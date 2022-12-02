import React from 'react';
import '../../styles/dragons.css';
import PropTypes from 'prop-types';

const Dragon = (props) => {
  const {
    dragonName, type, dragonImg,
  } = props;
  return (
    <div className="dragon-card">

      <img src={dragonImg} className="dragon-img" alt="dragon pic" />

      <div className="dragon-desc">
        <h3 className="dragon-name">
          {dragonName}
        </h3>
        <p>
          {type}
        </p>
        <button type="button" className="reserve-btn">Reserve Dragon</button>
      </div>
    </div>
  );
};
Dragon.propTypes = {
  dragonName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dragonImg: PropTypes.string.isRequired,
};
export default Dragon;
