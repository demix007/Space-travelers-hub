import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets/';
const rocketsList = [
  {
    id: '0',
    rocket_name: 'Initial Rocket',
    description: 'Initial rocket description.',
    flickr_images: 'https://imgur.com/azYafd8.jpg',
    reserved: false,
  },
];

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const resp = await axios.get(rocketsUrl);
  if (resp.data) {
    return resp.data;
  }
  return [];
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: rocketsList,
  reducers: {
    reserveRocket(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    },

    cancelReservation(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: false };
      });
    },

  },
  extraReducers: (build) => {
    build.addCase(fetchRockets.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((elt) => {
        newState.push({
          id: elt[1].rocket_id,
          rocket_name: elt[1].rocket_name,
          description: elt[1].description,
          flickr_images: elt[1].flickr_images[0],
          reserved: false,
        });
      });
      return newState;
    });
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
