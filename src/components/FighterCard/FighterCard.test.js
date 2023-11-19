import { fightersJS } from '../../../fighters';
import FighterCard from './FighterCard';
import { render } from '@testing-library/react';
import React from 'react';
import ReduxProvider from '@/redux/ReduxProvider';
import storePersistor from '@/redux/store';
import '@testing-library/jest-dom';

jest.mock('@/redux/hooks', () => ({
  ...jest.requireActual('@/redux/hooks'),
  useAppSelector: jest.fn(),
}));

describe('FighterCard', () => {
  test('renders fighter correctly', () => {
    const store = storePersistor.store;
    const wrapper = ({ children }) => (
      <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
    );

    const { getByText } = render(<FighterCard fighter={fightersJS[0]} />, {
      wrapper,
    });

    expect(getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
