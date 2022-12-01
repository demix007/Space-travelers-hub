import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets';
import missionsReducer from './missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});
export default store;
