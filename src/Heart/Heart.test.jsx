import React from 'react';
import { render } from '@testing-library/react';
import Heart from './Heart';

it('should take a snapshot', () => {
  const { asFragment } = render(<Heart />);

  expect(asFragment(<Heart />)).toMatchSnapshot();
});
