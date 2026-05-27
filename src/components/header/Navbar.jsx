import styles from './Header.modules.css';

function Navbar() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
