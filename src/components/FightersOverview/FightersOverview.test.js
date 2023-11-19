import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FightersOverview from './FightersOverview';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useGetFighters from '@/hooks/useGetFighters';
import usePagination from '@/hooks/usePagination';

jest.mock('@/redux/hooks', () => ({
  ...jest.requireActual('@/redux/hooks'),
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

jest.mock('@/hooks/useGetFighters', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('@/hooks/usePagination', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('@/models/Fighter', () => ({
  fightersJS: require('../../../fighters').fightersJS,
}));

describe('FightersOverview', () => {
  const mockDispatch = jest.fn();
  const mockUseAppSelector = useAppSelector;
  const mockUsePagination = usePagination;
  const mockUseGetFighters = useGetFighters;
  const mockUseAppDispatch = useAppDispatch;

  beforeEach(() => {
    jest.clearAllMocks();

    mockUseAppSelector.mockImplementation((selector) =>
      selector({ fighters: { fighters: [] } })
    );

    mockUsePagination.mockReturnValue({
      goToPage: jest.fn(),
      currentPageData: jest.fn(),
    });

    mockUseGetFighters.mockReturnValue({
      fetchedFighters: [],
      loading: false,
      error: '',
    });

    mockUseAppSelector.mockReturnValue([]);
    mockUseAppDispatch.mockReturnValue(mockDispatch);
  });

  test('renders fighters overview correctly', () => {
    render(<FightersOverview />);
    expect(screen.queryByText('Loading...')).toBeNull();
    expect(screen.queryByText('An error occurred:')).toBeNull();
    expect(screen.getByText('Choose your fighters!')).toBeInTheDocument();
    expect(screen.getByTestId('NavigateBeforeIcon')).toBeInTheDocument();
    expect(screen.getByTestId('NavigateNextIcon')).toBeInTheDocument();
    expect(screen.getByText('My Team')).toBeInTheDocument();
  });
});
