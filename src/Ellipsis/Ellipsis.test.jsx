import React from 'react';
import { render } from '@testing-library/react';
import Ellipsis from './Ellipsis';

it('should take a snapshot', () => {
  const { asFragment } = render(<Ellipsis />);

  expect(asFragment(<Ellipsis />)).toMatchSnapshot();
});
