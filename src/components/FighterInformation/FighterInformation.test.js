import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FighterInformation from './FighterInformation';
import { fightersJS } from '../../../fighters';

describe('FighterInformation', () => {
  test('renders fighter information correctly', () => {
    const { getByAltText, getByText } = render(
      <FighterInformation fighter={fightersJS[0]} />
    );

    expect(getByAltText('A star wars fighter')).toBeInTheDocument();
    expect(getByText('Name: Luke Skywalker')).toBeInTheDocument();
    expect(getByText('Height: 1.72m')).toBeInTheDocument();
    expect(getByText('Mass: 73kg')).toBeInTheDocument();
    expect(getByText('Affiliations:')).toBeInTheDocument();
    expect(getByText('Red Squadron')).toBeInTheDocument();
    expect(getByText('Jedi Order')).toBeInTheDocument();
  });

  test('does not render affiliations when affiliations array is empty', () => {
    const fighterWithoutAffiliations = {
      ...fightersJS[0],
      affiliations: [],
    };

    const { queryByText } = render(
      <FighterInformation fighter={fighterWithoutAffiliations} />
    );

    expect(queryByText('Affiliations:')).toBeNull();
  });
});
