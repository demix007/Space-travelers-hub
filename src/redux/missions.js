import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsUrl = 'https://api.spacexdata.com/v3/mission/';
const missionsList = [
  {
    id: '0',
    mission_name: 'Initial mission',
    description: 'Initial mission description.',
  },
];

export const fetchMissions = createAsyncThunk('missions/fetchmissions', async () => {
  const resp = await axios.get(missionsUrl);
  if (resp.data) {
    return resp.data;
  }
  return [];
});

const missionSlice = createSlice({
  name: 'missions',
  initialState: missionsList,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchMissions.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          id: element[1].mission_id,
          mission_name: element[1].mission_name,
          description: element[1].description,
        });
      });
      return newState;
    });
  },
});

export default missionSlice.reducer;
