import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Fighter } from '../../components/FighterCard';
import { fightersJS } from '../../../fighters';

interface FightersState {
  fighters: Fighter[];
}

const initialState: FightersState = {
  fighters: fightersJS as Fighter[],
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
