import React from 'react';
import '../../styles/missions.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelMission, joinMission } from '../../redux/missions';

const Mission = (props) => {
  const dispatch = useDispatch();
  const {
    missionName, description, missionId, joined,
  } = props;

  return (
    <tbody>
      <tr className="missionRow">
        <td><h4>{missionName}</h4></td>
        <td>{description}</td>
        <td id="missionStatus" className="mission-status">
          <p>
            {joined ? (
              <span className="active-member">Active Member</span>
            ) : (<span>Not a Member</span>)}
          </p>
        </td>
        <td>

          {
                  joined ? (
                    <button
                      type="button"
                      className="join-mission"
                      onClick={() => {
                        dispatch(cancelMission(missionId));
                      }}

                    >
                      Cancel Mission
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="join-mission"
                      onClick={() => {
                        dispatch(joinMission(missionId));
                      }}
                    >
                      Join Mission
                    </button>
                  )
}
        </td>
      </tr>
    </tbody>
  );
};
Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};
export default Mission;
