import React from 'react';
import { render } from '@testing-library/react';
import Roller from './Roller';

it('should take a snapshot', () => {
  const { asFragment } = render(<Roller />);

  expect(asFragment(<Roller />)).toMatchSnapshot();
});
