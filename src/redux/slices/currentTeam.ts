import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Fighter } from '../../components/FighterCard';

interface CurrentTeamState {
  currentTeam: Fighter[];
}

const initialState: CurrentTeamState = {
  currentTeam: [],
};

export const currentTeamSlice = createSlice({
  name: 'currentTeam',
  initialState,
  reducers: {
    addFighter: (state, action: PayloadAction<Fighter>) => {
      state.currentTeam = [...state.currentTeam, action.payload];
    },
    removeFighterById: (state, action: PayloadAction<number>) => {
      state.currentTeam = state.currentTeam.filter(
        (fighter) => fighter.id !== action.payload
      );
    },
  },
});

export const { addFighter, removeFighterById } = currentTeamSlice.actions;

export default currentTeamSlice.reducer;
