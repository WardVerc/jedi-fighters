import CurrentTeamOverview from './CurrentTeamOverview';
import { fightersJS } from '../../../fighters';
import { useAppSelector } from '@/redux/hooks';

import { render } from '@testing-library/react';
import React from 'react';
import StoreProvider from '../../app/StoreProvider';
import '@testing-library/jest-dom';

jest.mock('@/redux/hooks', () => ({
  ...jest.requireActual('@/redux/hooks'),
  useAppSelector: jest.fn(),
}));

describe('CurrentTeamOverview', () => {
  test('renders team members correctly', () => {
    const wrapper = ({ children }) => <StoreProvider>{children}</StoreProvider>;
    const mockCurrentTeam = [fightersJS[0], fightersJS[1]];
    useAppSelector.mockReturnValueOnce(mockCurrentTeam);

    const { getByText } = render(<CurrentTeamOverview />, { wrapper });

    expect(getByText('Luke Skywalker')).toBeInTheDocument();
    expect(getByText('C-3PO')).toBeInTheDocument();
  });
});
