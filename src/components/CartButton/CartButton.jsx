import {useContext} from 'react';
import Image from 'next/image'; 
import ShoppingCar from '../../../public/Vector.png';
import AppContext from '../../context/AppContext';
import styles from './CartButton.module.css';

const CartButton = () => {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className={styles.cartButton}
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <Image src={ShoppingCar} alt='CarShopping'/>
      <span className={styles.cartNumber}>{cartItems.length > 0 ? cartItems.length : 0}</span>
    </button>
  );
}

export default CartButton;