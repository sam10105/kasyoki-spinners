import React from 'react';
import { render } from '@testing-library/react';
import HourGlass from './HourGlass';

it('should take a snapshot', () => {
  const { asFragment } = render(<HourGlass />);

  expect(asFragment(<HourGlass />)).toMatchSnapshot();
});
