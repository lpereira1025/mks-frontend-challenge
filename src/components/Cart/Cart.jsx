import React, { useContext } from 'react';
import Image from 'next/image'; 
import Close from '../../../public/Close_cart.png';
import styles from './Cart.module.css'; 
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';

function Cart() {
  const { cartItems, isCartVisible, setIsCartVisible, quantity } = useContext(AppContext);

  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + parseFloat(item.price * quantity), 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <section className={`${styles.cart} ${isCartVisible ? styles.cartActive : ''}`}>
      <div className={styles.divCart}>
        <h2 className={styles.firstDivCarth2}>
          Carrinho <br/>de compras
        </h2>
        <button 
          className={styles.firstDivCartClose}
          onClick={ () => setIsCartVisible(!isCartVisible) }
        >
          <Image src={Close} alt='Fechar'/>
        </button>
      </div>

      <div className={styles.cartItems}>
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      <div className={styles.divCart}>
        <span className={styles.divCartTotal}>Total: </span>
        <span className={styles.divCartTotal}>R$ {totalPrice.toFixed(2)}</span>
      </div>

      <button className={styles.divCartFinalizar}>
        Finalizar Compra
      </button>
    </section>
  );
}

export default Cart;
