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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const missionsArr = useSelector((state) => state.missions);
  if (missionsArr.length > 0) {
    return (
      <div className="missions-container">
        {
          missionsArr.map((mission) => (
            <Mission
              key={mission.id}
              missionName={mission.mission_name}
              description={mission.description}
            />
          ))
        }
      </div>
    );
  }
  return '';
};
export default Missions;
