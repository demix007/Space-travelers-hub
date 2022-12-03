import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import '../../styles/missions.css';
import { fetchMissions } from '../../redux/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      dispatch(fetchMissions());
    }
  }, []);
  const missionsArr = useSelector((state) => state.missions);
  if (missionsArr.length > 0) {
    return (
      <div className="missions-container">
        <table>
          <tr className="t-row">
            <td>Name</td>
            <td>Description</td>
            <td>Status</td>
            <td />
          </tr>
          {
          missionsArr.map((mission) => (
            <Mission
              key={mission.mission_id}
              missionName={mission.mission_name}
              description={mission.description}
              missionId={mission.id}
              status={mission.status}
              joined={mission.joined}
            />
          ))
        }
        </table>
      </div>
    );
  }
  return '';
};
export default Missions;
