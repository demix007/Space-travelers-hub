import React from 'react';
import '../../styles/missions.css';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    missionName, description, missionStatus, missionSubscription,
  } = props;
  return (
    <table>
      <tr className="t-row">
        <td>Name</td>
        <td>Description</td>
        {' '}
        <td>Status</td>
        <td />
      </tr>

      <tr className="t-row">
        <td>{missionName}</td>
        <td>{description}</td>
        {' '}
        <td>{missionStatus}</td>
        <td>{missionSubscription}</td>
      </tr>
    </table>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  missionStatus: PropTypes.string.isRequired,
  missionSubscription: PropTypes.string.isRequired,
};

export default Mission;
