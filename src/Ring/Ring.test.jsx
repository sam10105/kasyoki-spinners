import React from 'react';
import { render } from '@testing-library/react';
import Ring from './Ring';

it('should take a snapshot', () => {
  const { asFragment } = render(<Ring />);

  expect(asFragment(<Ring />)).toMatchSnapshot();
});
