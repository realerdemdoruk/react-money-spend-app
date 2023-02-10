import React from 'react';
import '../App.css';

const Product = ({ product, basket, setBasket, total, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );

    if (currentBasket.amount == 0) {
      setBasket(basketWithoutCurrent);
    } else {
      currentBasket.amount -= 1;
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <div className="productContainer">
      <div>
        <p className="productTitle">
          <h5>{product.title}</h5>
        </p>
        <p className="productTitle">${product.price}</p>
      </div>
      <div className="productButtons">
        <button disabled={!basketItem} onClick={removeBasket}>
          Çıkar
        </button>
        <p>{basketItem ? basketItem.amount : 0}</p>
        <button disabled={total + product.price > money} onClick={addBasket}>
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Product;
