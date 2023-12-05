import { fightersJS } from '../../../fighters';
import FighterCard from './FighterCard';
import { render } from '@testing-library/react';
import React from 'react';
import StoreProvider from '../../app/StoreProvider';
import '@testing-library/jest-dom';

jest.mock('@/redux/hooks', () => ({
  ...jest.requireActual('@/redux/hooks'),
  useAppSelector: jest.fn(),
}));

describe('FighterCard', () => {
  test('renders fighter correctly', () => {
    const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>;

    const { getByText } = render(<FighterCard fighter={fightersJS[0]} />, {
      wrapper,
    });

    expect(getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
