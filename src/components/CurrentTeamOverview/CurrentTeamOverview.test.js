import CurrentTeamOverview from './CurrentTeamOverview';
import { fightersJS } from '../../../fighters';
import { useAppSelector } from '@/redux/hooks';

import { render } from '@testing-library/react';
import React from 'react';
import ReduxProvider from '@/redux/ReduxProvider';
import storePersistor from '@/redux/store';
import '@testing-library/jest-dom';

jest.mock('@/redux/hooks', () => ({
  ...jest.requireActual('@/redux/hooks'),
  useAppSelector: jest.fn(),
}));

describe('CurrentTeamOverview', () => {
  test('renders team members correctly', () => {
    const store = storePersistor.store;
    const wrapper = ({ children }) => (
      <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
    );
    const mockCurrentTeam = [fightersJS[0], fightersJS[1]];
    useAppSelector.mockReturnValueOnce(mockCurrentTeam);

    const { getByText } = render(<CurrentTeamOverview />, { wrapper });

    expect(getByText('Luke Skywalker')).toBeInTheDocument();
    expect(getByText('C-3PO')).toBeInTheDocument();
  });
});
