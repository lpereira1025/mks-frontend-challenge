import Image from 'next/image'; 
import ShoppingCar from '../../../public/Vector.png';

import styles from './CartButton.module.css';

const CartButton = () => {

  return (
    <button
      type="button"
      className={styles.cartButton}
    >
      <Image src={ShoppingCar} alt='CarShopping'/>
      <span className={styles.cartNumber}>0</span> 
    </button>
  );
}

export default CartButton;