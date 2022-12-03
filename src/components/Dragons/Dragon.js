import React from 'react';
import '../../styles/dragons.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelReservation } from '../../redux/dragons';

const Dragon = (props) => {
  const dispatch = useDispatch();
  const {
    dragonName, type, dragonImg, dragonId, reserved,
  } = props;
  return (
    <div className="dragon-card">

      <img src={dragonImg} className="dragon-img" alt="dragon pic" />

      <div className="dragon-desc">
        <h3 className="dragon-name">
          {dragonName}
        </h3>
        <p>
          {reserved && (
          <span className="reserve-badge">Reserved</span>
          )}
          {type}
        </p>
        {
          reserved ? (
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                dispatch(cancelReservation(dragonId));
              }}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              className="reserve-btn"
              onClick={() => {
                dispatch(reserveDragon(dragonId));
              }}
            >
              Reserve Dragon
            </button>
          )
        }
      </div>
    </div>
  );
};
Dragon.propTypes = {
  dragonName: PropTypes.string,
  type: PropTypes.string,
  dragonImg: PropTypes.string,
  dragonId: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;
export default Dragon;
