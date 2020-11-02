import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';

it('should take a snapshot', () => {
  const { asFragment } = render(<Grid />);

  expect(asFragment(<Grid />)).toMatchSnapshot();
});
