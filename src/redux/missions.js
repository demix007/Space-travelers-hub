import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsUrl = 'https://api.spacexdata.com/v3/missions/';
const missionsList = [];

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const resp = await axios.get(missionsUrl);
  if (resp.data) {
    return resp.data;
  }
  return [];
});

const missionSlice = createSlice({
  name: 'missions',
  initialState: missionsList,
  reducers: {
    joinMission(state, action) {
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return { ...mission };
        }
        return { ...mission, joined: true };
      });
    },

    cancelMission(state, action) {
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return { ...mission };
        }
        return { ...mission, joined: false };
      });
    },

  },
  extraReducers: (build) => {
    build.addCase(fetchMissions.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          id: element[1].mission_id,
          mission_name: element[1].mission_name,
          description: element[1].description,
          status: 'Not a member',
          joined: false,
        });
      });
      return newState;
    });
  },
});

export const { joinMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
