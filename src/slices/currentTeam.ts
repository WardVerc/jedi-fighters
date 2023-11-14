import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { Fighter } from '../components/FighterCard';

// Define a type for the slice state
interface CurrentTeamState {
  currentTeam: Fighter[];
}

// Define the initial state using that type
const initialState: CurrentTeamState = {
  currentTeam: [],
};

export const currentTeamSlice = createSlice({
  name: 'currentTeam',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addFighter: (state, action: PayloadAction<Fighter>) => {
      state.currentTeam = [...state.currentTeam, action.payload];
    },
  },
});

export const { addFighter } = currentTeamSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.currentTeam;

export default currentTeamSlice.reducer;
