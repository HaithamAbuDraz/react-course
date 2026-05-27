import Navbar from "./Navbar";
// import "./Header.css";
import styles from "./Header.module.css";

const Header = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
    { title: "Profile", url: "/profile" },
  ];
  return (
    <header className={styles.header}>
      <a href='/'>Logo</a>
      <Navbar links={links} />
    </header>
  );
};

export default Header;
