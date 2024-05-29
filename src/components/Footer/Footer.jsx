import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={styles.paragraph}>
            MKS sistemas © Todos os direitos reservados
        </p>
    </footer>
  );
};

export default Footer;
