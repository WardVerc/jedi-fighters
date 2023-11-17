import currentTeam from '@/redux/slices/currentTeam';
import fighters from '@/redux/slices/fighters';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  currentTeam: currentTeam,
  fighters: fighters,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
const storePersistor = { store, persistor };
export default storePersistor;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {currentTeam: CurrentTeamState, fighters: FightersState}
export type AppDispatch = typeof store.dispatch;
