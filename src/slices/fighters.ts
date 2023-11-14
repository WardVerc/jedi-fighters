import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { Fighter } from '../components/FighterCard';

// Define a type for the slice state
interface FightersState {
  fighters: Fighter[];
}

// Define the initial state using that type
const initialState: FightersState = {
  fighters: [],
};

export const fightersSlice = createSlice({
  name: 'fighters',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setFighters: (state, action: PayloadAction<Fighter[]>) => {
      state.fighters = action.payload;
    },
  },
});

export const { setFighters } = fightersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.fighters;

export default fightersSlice.reducer;
