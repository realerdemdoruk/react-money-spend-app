import React from 'react';

const BasketItem = ({ item, product }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2)',
        // alignItems: 'center',
        // justifyContent: 'center',
        gap: '1rem',
        backgroundColor: 'lightblue',
        flexDirection: 'column',
      }}
    >
      {product.title} X {item.amount}
    </div>
  );
};

export default BasketItem;
