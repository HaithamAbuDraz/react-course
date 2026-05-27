import Navbar from "./Navbar";
// import "./Header.css";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href='/'>Logo</a>
      <Navbar />
    </header>
  );
};

export default Header;
