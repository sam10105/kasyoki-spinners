import React from 'react';
import { render } from '@testing-library/react';
import Ripple from './Ripple';

it('should take a snapshot', () => {
  const { asFragment } = render(<Ripple />);

  expect(asFragment(<Ripple />)).toMatchSnapshot();
});
