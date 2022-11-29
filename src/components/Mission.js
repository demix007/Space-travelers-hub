import React from 'react';
import '../styles/mission.css';

const Mission = () => (
  <table>
    <tr className="t-row">
      <td>Mission</td>
      <td>Description</td>
      {' '}
      <td>Status</td>
      <td>Mission</td>
    </tr>

    <tr className="t-row">
      <td>Thaicom</td>
      <td>lorem ipsumhuvydyfbuybudybifdifdufbddfffddf</td>
      {' '}
      <td>Not a member</td>
      <td>Join Mission</td>
    </tr>

    <tr className="t-row">
      <td>Telstar</td>
      <td>lorem ipsumhuvydyfbuybudybifdifdufbddfffddf</td>
      {' '}
      <td>Active member</td>
      <td>Leave Mission</td>
    </tr>
  </table>
);

export default Mission;
