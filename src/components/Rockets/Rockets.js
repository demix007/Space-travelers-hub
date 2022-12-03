import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from './RocketCard';
import '../../styles/rockets.css';
import { fetchRockets } from '../../redux/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsArr = useSelector((state) => state.rockets);
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      if (rocketsArr.length === 0) {
        shouldFetch.current = false;
        dispatch(fetchRockets());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (rocketsArr.length > 0) {
    return (
      <div className="rockets-container">
        {
          rocketsArr.map((rocket) => (
            <RocketCard
              key={rocket.id}
              rocketName={rocket.rocket_name}
              description={rocket.description}
              rocketImg={rocket.flickr_images}
              rocketId={rocket.id}
              reserved={rocket.reserved}
            />
          ))
        }
      </div>
    );
  }
  return '';
};
export default Rockets;
