import styles from "./Header.module.css";

function Navbar() {
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
    { title: "Profile", url: "/profile" },
  ];
  console.log(links);
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
