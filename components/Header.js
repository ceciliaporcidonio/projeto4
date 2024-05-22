// components/Header.js
import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <img src="/images/logo.png" alt="Logo" />
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#inicio" className={styles.navLink}>Início</a></li>
        <li className={styles.navItem}><a href="#sinopse" className={styles.navLink}>Sinopse</a></li>
        <li className={styles.navItem}><a href="#galeria" className={styles.navLink}>Galeria</a></li>
        <li className={styles.navItem}><a href="#onde-assistir" className={styles.navLink}>Onde Assistir</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
