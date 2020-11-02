import React from 'react';
import { render } from '@testing-library/react';
import Circle from './Circle';

it('should take a snapshot', () => {
  const { asFragment } = render(<Circle />);

  expect(asFragment(<Circle />)).toMatchSnapshot();
});
