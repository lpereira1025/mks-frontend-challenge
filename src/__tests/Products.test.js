import React from 'react';
import { render } from '@testing-library/react';
import Products from '../Products';

describe('Products Component', () => {
  it('renders without crashing', () => {
    render(<Products products={[]} />);
  });

  it('displays the correct number of products', () => {
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    const { getAllByRole } = render(<Products products={products} />);
    const productItems = getAllByRole('product');
    expect(productItems).toHaveLength(products.length);
  });

});
