export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
      <p>
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>
      <button
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
