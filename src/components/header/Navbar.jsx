import styles from "./Header.module.css";

function Navbar({ links }) {
  return (
    <nav>
      <ul className={styles.list}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
