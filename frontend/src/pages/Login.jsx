import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
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
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem(
        "access_token",
        response.data.access_token
      );

      localStorage.setItem(
        "token_type",
        response.data.token_type
      );

      alert("Login Successful!");

      if (response.data.role === "admin") {
       navigate("/admin/dashboard");
       } else {
       navigate("/user/dashboard");
      }

    } catch (error) {
      console.error(error);

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
        background: "#f4f7f6",
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
          Login
        </h4>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
        <p className="text-center mt-2">
          <Link
            to="/admin-login"
            style={{ color: "#198754", fontWeight: "600" }}
          >
            🔒 Admin Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;