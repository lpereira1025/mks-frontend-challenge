import styles from './Header.module.css'; 
import Image from 'next/image'; 
import Mks from '../../../public/mks.png';
import Sistema from '../../../public/Sistemas.png';
import CartButton from '../CartButton/CartButton'

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
          <Image src={Mks} alt='Logotipo'/>
          <Image className={styles.imageSistem} src={Sistema} alt='Logotipo'/>
        </div>
        <CartButton/>
    </header>
  );
};

export default Header;
