import React from 'react';
import { render } from '@testing-library/react';
import Facebook from './Facebook';

it('should take a snapshot', () => {
  const { asFragment } = render(<Facebook />);

  expect(asFragment(<Facebook />)).toMatchSnapshot();
});
