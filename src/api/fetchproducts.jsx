import axios from 'axios';

const fetchProducts = async () => {
  try {
    
    const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');

    
    if (response.status === 200) {
      const products = response.data.products; 
      console.log('Products:', products); 
      return products;
    } else {
      
      throw new Error('Failed to fetch products');
    }
  } catch (error) {
    
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default fetchProducts;