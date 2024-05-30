import { useContext } from 'react';
import Image from 'next/image'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bag from '../../../public/shopping-bag.png';
import styles from './Products.module.css';
import AppContext from '../../context/AppContext';

const Products = ({ products }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = (product) => {
    const isInCart = cartItems.some(item => item.id === product.id);
    
    if (isInCart) {
      toast.error('O item já foi adicionado, para aumentar a quantidade, click no carrinho');
    } else {
      setCartItems([...cartItems, product]);
      toast.success('Item adicionado ao carrinho!');
    }
  };
  
  return (
    <>
      <ToastContainer />
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.photo} alt={product.name} className={styles.productImage} />
            <div className={styles.productNamePrice}>
              <h2 className={styles.productName}> {product.brand} {product.name}</h2>
              <span className={styles.productPrice}>
                <p>R$ {Math.round(parseFloat(product.price)).toFixed()}</p>
              </span>
            </div>
            <p className={styles.productDescription}>Redesigned from scratch and completely revised.</p>
            <button 
              className={styles.divBuy}
              onClick={() => handleAddCart(product)}
            >
              <Image src={Bag} alt='shopping-bag'/>
                COMPRAR
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
