import React from 'react';
import { render } from '@testing-library/react';
import Cart from '../Cart';

describe('Cart Component', () => {
  it('renders without crashing', () => {
    render(<Cart />);
  });

});
