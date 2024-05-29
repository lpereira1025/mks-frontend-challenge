import Image from 'next/image'; 
import Bag from '../../../public/shopping-bag.png';
import styles from './Products.module.css';

const Products = ({ products }) => {
  return (
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
          <div className={styles.divBuy}>
            <Image src={Bag} alt='shopping-bag'/>
            <button className={styles.buttonBuy}>
              COMPRAR
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
