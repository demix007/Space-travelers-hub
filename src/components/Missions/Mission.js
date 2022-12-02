import React from 'react';
import '../../styles/missions.css';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    missionName, description,
  } = props;
  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      {' '}
      <td><button type="button">NOT A MEMBER</button></td>
      <td><button type="button">Join Mission</button></td>
    </tr>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
