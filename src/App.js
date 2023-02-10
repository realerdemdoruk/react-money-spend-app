import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import products from './products.json';
import Product from './components/Product';
import Basket from './components/Basket';

function App() {
  const clearBasket = () => {
    setBasket([]);
  };

  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div
      className="App"
      style={{
        // display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Header money={money} total={total} />
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        Market
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
        }}
      >
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              money={money}
              setMoney={setMoney}
              basket={basket}
              setBasket={setBasket}
              total={total}
              setTotal={setTotal}
            />
          );
        })}
      </div>
      <div>
        {total > 0 && (
          <Basket
            clearBasket={clearBasket}
            total={total}
            products={products}
            basket={basket}
          />
        )}
      </div>
    </div>
  );
}

export default App;
