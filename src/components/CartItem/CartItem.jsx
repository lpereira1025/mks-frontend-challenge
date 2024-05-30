import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';
import Image from 'next/image'; 
import Close from '../../../public/Close_cart.png';
import styles from './CartItem.module.css';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, photo, name, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return (
    <section className={styles.cartItemCarClose}>
      <div className={styles.cartItem}>
        <img src={photo} alt="imagem do produto" className={styles.cartItemImage}/>

        <h3 className={styles.cartItemTitle}>{name}</h3>

        <div className={styles.cartItemCount}>
          <span className={styles.cartItemDivQtd}>Qtd:</span>
          <div className={styles.cartItemDivButtons}>
            <button className={styles.cartItemDivButtonsSinals}>
              -
            </button>
            <span className={styles.cartItemDivButtonsNumber}>
              1
            </span>
            <button className={styles.cartItemDivButtonsSinals}>
              +
            </button>
          </div>
        </div>

        <h3 className={styles.cartItemPrice}>R$ {Math.round(parseFloat(price)).toFixed()}</h3>

        <button
          type="button"
          className={styles.buttonRemoveItem}
          onClick={ handleRemoveItem }
        >
          <Image src={Close} alt='Fechar' className={styles.buttonRemoveItemImg}/>
        </button>
      </div>

    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.shape({ // Ajuste aqui para propTypes
    id: propTypes.number.isRequired,
    photo: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired
  }).isRequired,
};

export default CartItem;
