import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

it('should take a snapshot', () => {
  const { asFragment } = render(<Spinner />);

  expect(asFragment(<Spinner />)).toMatchSnapshot();
});
