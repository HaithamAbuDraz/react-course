import Navbar from "./Navbar";

const Header = () => {
  return (
    <header style={{display: "flex", justifyContent: "space-around"}}>
      <a href='/'>Logo</a>
      <Navbar />
    </header>
  );
};

export default Header;
