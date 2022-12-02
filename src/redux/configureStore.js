import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets';
import missionsReducer from './missions';
import dragonsReducer from './dragons';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
    dragons: dragonsReducer,
  },
});
export default store;
