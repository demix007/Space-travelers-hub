import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from './RocketCard';
import '../../styles/rockets.css';
import { fetchRockets } from '../../redux/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsArr = useSelector((state) => state.rockets);
  const shouldFetch = useRef(false);
  useEffect(() => {
    if (shouldFetch.current || process.env.NODE_ENV !== 'development') {
      if (rocketsArr.length === 0) {
        dispatch(fetchRockets());
      }
    }
    shouldFetch.current = true;
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
