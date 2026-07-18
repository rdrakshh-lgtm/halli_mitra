import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        formData
      );

      if (response.data.role !== "admin") {
        alert("Access denied! This page is only for administrators.");
        return;
      }

      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("token_type", response.data.token_type);

      alert("Admin Login Successful!");

      navigate("/admin/dashboard");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.detail);
      } else {
        alert("Unable to connect to server.");
      }
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#eef5ef",
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "420px",
          borderRadius: "15px",
        }}
      >
        <h2 className="text-center text-success mb-3">
          🌾 Halli Mitra
        </h2>

        <h4 className="text-center mb-4">
          Admin Login
        </h4>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Login as Admin
          </button>

        </form>

        <p className="text-center mt-3">
          <Link to="/login">
            ← Back to User Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default AdminLogin;