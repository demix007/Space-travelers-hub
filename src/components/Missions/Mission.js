import React, { useEffect } from 'react';
import '../../styles/missions.css';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, fetchMissions, cancelMission } from '../../redux/missions';

const Mission = () => {
  const showMissions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showMissions.length) dispatch(fetchMissions());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const manageMissionsJoin = (id) => {
    dispatch(joinMission(id));
  };

  const manageMissionsLeave = (id) => {
    dispatch(cancelMission(id));
  };

  return (
    <tbody>
      {showMissions.map((mission, index) => (
        <tr className="missionRow" key={[index]}>
          <td><h4>{mission.name}</h4></td>
          <td>{mission.description}</td>
          <td className="mission-status">
            {(mission.joined)
              ? <span className="active-member">Active Member</span>
              : <span className="not-a-member">Not a Member</span>}
          </td>
          <td className="mission-action">
            {(mission.joined)
              ? <button type="button" className="leave-mission" onClick={() => manageMissionsLeave(mission.id)}>Leave Mission</button>
              : <button type="button" className="join-mission" onClick={() => manageMissionsJoin(mission.id)}>Join Mission</button>}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Mission;
