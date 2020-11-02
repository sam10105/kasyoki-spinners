import React from 'react';
import { render } from '@testing-library/react';
import Default from './Default';

it('should take a snapshot', () => {
  const { asFragment } = render(<Default />);

  expect(asFragment(<Default />)).toMatchSnapshot();
});
