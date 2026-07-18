import { useState } from "react";

const MyProducts = () => {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    cropName: "",
    category: "",
    quantity: "",
    unit: "Kg",
    price: "",
    village: "",
    harvestDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = () => {
    if (!form.cropName || !form.price || !form.quantity) {
      alert("Please fill all required fields.");
      return;
    }

    setProducts([
      ...products,
      {
        id: Date.now(),
        ...form,
        status: "Pending",
      },
    ]);

    setForm({
      cropName: "",
      category: "",
      quantity: "",
      unit: "Kg",
      price: "",
      village: "",
      harvestDate: "",
      description: "",
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🌾 My Products</h1>

      {/* Summary Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <div className="card">
          <h3>Total Products</h3>
          <h2>{products.length}</h2>
        </div>

        <div className="card">
          <h3>Active</h3>
          <h2>{products.filter((p) => p.status === "Active").length}</h2>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <h2>{products.filter((p) => p.status === "Pending").length}</h2>
        </div>

        <div className="card">
          <h3>Sold</h3>
          <h2>{products.filter((p) => p.status === "Sold").length}</h2>
        </div>
      </div>

      {/* Add Product */}

      <div className="card" style={{ marginTop: "30px", padding: "25px" }}>
        <h2>Add New Product</h2>

        <input
          type="text"
          name="cropName"
          placeholder="Crop Name"
          value={form.cropName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />

        <select
          name="unit"
          value={form.unit}
          onChange={handleChange}
        >
          <option>Kg</option>
          <option>Quintal</option>
          <option>Ton</option>
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="village"
          placeholder="Village"
          value={form.village}
          onChange={handleChange}
        />

        <input
          type="date"
          name="harvestDate"
          value={form.harvestDate}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <button
          className="save-btn"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>

      {/* Product List */}

      <div style={{ marginTop: "35px" }}>
        <h2>My Listed Products</h2>

        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="card"
              style={{
                marginTop: "15px",
                padding: "20px",
              }}
            >
              <h3>{product.cropName}</h3>

              <p>Category : {product.category}</p>

              <p>
                Quantity : {product.quantity} {product.unit}
              </p>

              <p>Price : ₹{product.price}</p>

              <p>Village : {product.village}</p>

              <p>Status : {product.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyProducts;