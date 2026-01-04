export default function Cart({ cart, updateQty, removeFromCart }) {
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  if (cart.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>

          <input
            type="number"
            min="1"
            max={item.stock}
            value={item.qty}
            onChange={(e) =>
              updateQty(item.id, Number(e.target.value))
            }
          />

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ₹ {totalPrice.toFixed(2)}</h3>
    </div>
  );
}
