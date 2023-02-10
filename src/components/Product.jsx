import React from 'react';

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
    <div
      style={{
        display: 'flex',
        padding: '1rem',
        width: '100px',
        height: '100px',
        borderRadius: '0.5rem',
        boxShadow: '0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: '1rem',
        flexDirection: 'column',
        backgroundColor: 'lightblue',
      }}
    >
      <div>
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {product.title}
        </p>
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          ${product.price}
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
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
