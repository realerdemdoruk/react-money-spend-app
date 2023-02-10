import BasketItem from './BasketItem';
import '../App.css';

function Basket({ basket, products, total, clearBasket }) {
  return (
    <div>
      <h1 className="basketTitle">Sepetim</h1>
      <ul className="basketProducts">
        {basket.map((item) => (
          <BasketItem
            product={products.find((p) => p.id === item.id)}
            item={item}
          />
        ))}
      </ul>
      <div className="totalMoney">
        <h3>Toplam: ${total}</h3>
        <button className="wasd" onClick={clearBasket}>
          Sepeti Temizle
        </button>
      </div>
    </div>
  );
}

export default Basket;
