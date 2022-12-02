import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dragonsURL = 'https://api.spacexdata.com/v3/dragons';
const dragonsList = [
  {
    id: '0',
    dragon_name: 'Initial Dragon',
    type: 'Initial Dragon type.',
    flickr_images: 'https://i.imgur.com/9fWdwNv.jpg',
  },
];

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const resp = await axios.get(dragonsURL);
  if (resp.data) {
    return resp.data;
  }
  return [];
});

const dragonSlice = createSlice({
  name: 'dragons',
  initialState: dragonsList,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchDragons.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          id: element[1].id,
          dragon_name: element[1].name,
          type: element[1].type,
          flickr_images: element[1].flickr_images[0],
        });
      });
      return newState;
    });
  },
});

export default dragonSlice.reducer;
