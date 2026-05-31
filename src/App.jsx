import { useEffect, useState } from 'react';
import './App.css';

const dummyData = [
  {
    id: 1,
    title:
      'HP OMEN 45L Gaming 5090 Desktop PC, Intel Core Ultra 9 285K, GeForce RTX 5090, 128GB DDR5, 4TB SSD, Support 4-Display 4K, Light Studio, HDMI, DP, Wi-Fi 6E, Windows 11 Pro, AI-Ready Workstation Desktop',
    img: '	https://m.media-amazon.com/images/I/517L5CH1lXL._AC_UY436_FMwebp_QL65_.jpg',
    rate: 3,
    price: 19891.86,
    insteadOf: 20145.86,
  },
  {
    id: 2,
    title:
      'HP Omen MAX 45L 5090 Gaming Desktop, AMD Ryzen 9 9900X3D 5.5GHz, Geforce RTX 5090, 64GB DDR5 RAM, 4TB SSD, Liquid Cooler, RGB Light Studio, 3X DP, Support 3-Monitor 4K, Windows 11 Pro, Black',
    img: 'https://m.media-amazon.com/images/I/61QYqlq7pJL._AC_UY436_FMwebp_QL65_.jpg',
    rate: 5,
    price: 17049.76,
    insteadOf: 18015.76,
  },
  {
    id: 3,
    title:
      'PCONLINE HP Omen MAX 45L 5090 Gaming Desktop, AMD Ryzen 9 9900X3D 5.5GHz, Geforce RTX 5090, 128GB DDR5 RAM, 8TB SSD, RGB Light Studio, LCD Liquid Cooler, DP, HDMI, Wi-Fi 7, Windows 11 Pro, Black',
    img: 'https://m.media-amazon.com/images/I/61QYqlq7pJL._AC_UY436_FMwebp_QL65_.jpg',
    rate: 4,
    price: 20744.49,
    insteadOf: 21745.86,
  },
];

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoadding(true);
      setProducts(dummyData);
      setIsLoadding(false);
    };
    getData();
  }, []);
  return (
    <>
      <h1>Hello React</h1>
      {isLoadding && <p>Loading...</p>}
      {!isLoadding && products && <p>{JSON.stringify(products)}</p>}
    </>
  );
};

export default App;
