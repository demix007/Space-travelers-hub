import React from 'react';
import '../../styles/rockets.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservation, reserveRocket } from '../../redux/rockets';

const RocketCard = (props) => {
  const dispatch = useDispatch();
  const {
    rocketName, description, rocketImg, rocketId, reserved,
  } = props;
  return (
    <div className="rocket-card">

      <img src={rocketImg} className="rocket-img" alt="rocket pic" />

      <div className="rocket-desc">
        <h3 className="rocket-name">
          {rocketName}
        </h3>

        <p>
          {reserved && (
          <span className="reserve-badge">Reserved</span>
          )}
          {description}
        </p>
        {
          reserved ? (
            <button
              type="button"
              onClick={() => {
                dispatch(cancelReservation(rocketId));
              }}
            >
              Cancel Reseravation
            </button>
          ) : (
            <button
              type="button"
              className="reserve-btn"
              onClick={() => {
                dispatch(reserveRocket(rocketId));
              }}
            >
              Reserve Rocket
            </button>
          )
        }

      </div>
    </div>
  );
};
RocketCard.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rocketImg: PropTypes.string.isRequired,
  rocketId: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default RocketCard;
