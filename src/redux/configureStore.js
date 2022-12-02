import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets';
import missionsReducer from './missions';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});
export default store;
