import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fightersJS } from '../../../fighters';
import { Fighter } from '@/models/Fighter';

interface FightersState {
  fighters: Fighter[];
}

const initialState: FightersState = {
  fighters: [],
};

export const fightersSlice = createSlice({
  name: 'fighters',
  initialState,
  reducers: {
    setFighters: (state, action: PayloadAction<Fighter[]>) => {
      state.fighters = action.payload;
    },
  },
});

export const { setFighters } = fightersSlice.actions;

export default fightersSlice.reducer;
