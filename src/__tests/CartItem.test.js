import React from 'react';
import { render } from '@testing-library/react';
import CartItem from '../CartItem';

describe('CartItem Component', () => {
  it('renders without crashing', () => {
    const data = { id: 1, photo: 'example.jpg', name: 'Item 1', price: 10 };
    render(<CartItem data={data} />);
  });

});
