import { useEffect, useState } from "react";
import api from "../../services/api";
import "../../styles/Marketplace.css";

export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await api.get("/marketplace/");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await api.delete(`/marketplace/${id}`);
      loadProducts();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
  <div className="marketplace-page">
    <div className="market-header">
      <div>
        <h2>🛒 Marketplace</h2>
        <p>Manage all marketplace listings</p>
      </div>

      <button className="add-btn">+ Add Product</button>
    </div>

    <div className="market-grid">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <div className="product-image">
            🌾
          </div>

          <div className="product-info">
            <div className="title-row">
              <h3>{item.crop_name}</h3>

              <span className="price">
                ₹ {item.price}
              </span>
            </div>

            <div className="badge">
              Farmer #{item.farmer_id}
            </div>

            <div className="details">
              <p>📦 <strong>Quantity:</strong> {item.quantity} kg</p>
              <p>📍 <strong>Location:</strong> {item.location}</p>
              <p>📞 <strong>Contact:</strong> {item.contact}</p>
            </div>

            <div className="buttons">
              <button className="view-btn">
                View
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteProduct(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}