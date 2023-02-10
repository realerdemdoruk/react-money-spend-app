import BasketItem from './BasketItem';

function Basket({ basket, products, total, clearBasket }) {
  return (
    <div style={{}}>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Sepetim
      </h1>
      <ul>
        {basket.map((item) => (
          <BasketItem
            product={products.find((p) => p.id === item.id)}
            item={item}
          />
        ))}
      </ul>
      Toplam: ${total}
      <button onClick={clearBasket}>Sepeti Temizle</button>
    </div>
  );
}

export default Basket;
