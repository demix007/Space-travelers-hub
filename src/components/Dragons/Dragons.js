import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dragon from './Dragon';
import '../../styles/dragons.css';
import { fetchDragons } from '../../redux/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      dispatch(fetchDragons());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dragonsArr = useSelector((state) => state.dragons);
  if (dragonsArr.length > 0) {
    return (
      <div className="dragons-container">
        {
          dragonsArr.map((dragon) => (
            <Dragon
              key={dragon.id}
              dragonName={dragon.dragon_name}
              type={dragon.type}
              dragonImg={dragon.flickr_images}
            />
          ))
        }
      </div>
    );
  }
  return '';
};
export default Dragons;
