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

  const [money, setMoney] = useState(100);
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
    <div className="App">
      <Header money={money} total={total} />
      <h1 className="title">Market</h1>
      <div className="products">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              basket={basket}
              setBasket={setBasket}
              total={total}
              money={money}
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
