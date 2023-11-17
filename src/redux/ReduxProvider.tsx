'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storePersistor from './store';

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={storePersistor.store}>
      <PersistGate persistor={storePersistor.persistor}>{children}</PersistGate>
    </Provider>
  );
}
