import React from 'react';
import { render } from '@testing-library/react';
import DualRing from './DualRing';

it('should take a snapshot', () => {
  const { asFragment } = render(<DualRing />);

  expect(asFragment(<DualRing />)).toMatchSnapshot();
});
