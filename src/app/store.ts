import currentTeam from '@/slices/currentTeam';
import fighters from '@/slices/fighters';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    currentTeam: currentTeam,
    fighters: fighters,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {currentTeam: CurrentTeamState, fighters: FightersState}
export type AppDispatch = typeof store.dispatch;
