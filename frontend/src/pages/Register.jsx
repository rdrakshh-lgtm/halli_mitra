import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    sponsor_code: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

    const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (!formData.agree) {
    alert("Please accept the Terms & Conditions.");
    return;
  }

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/auth/register",
      {
        full_name: formData.full_name,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
        sponsor_code: formData.sponsor_code || null,
      }
    );

    alert("Registration Successful!");

    console.log(response.data);

    navigate("/login");

  } catch (error) {
    console.error(error);

    if (error.response) {
      alert(error.response.data.detail);
    } else {
      alert("Server connection failed.");
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
          width: "450px",
          borderRadius: "15px",
        }}
      >
        <h2 className="text-center text-success mb-3">
          🌾 Halli Mitra
        </h2>

        <h4 className="text-center mb-4">
          Create Your Account
        </h4>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            placeholder="Full Name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            placeholder="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />

          

          <input
            className="form-control mb-3"
            placeholder="Sponsor Code (Optional)"
            name="sponsor_code"
            value={formData.sponsor_code}
            onChange={handleChange}
          />
          <input
            className="form-control mb-3"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="form-control mb-3"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />

            <label className="form-check-label">
              I agree to the Terms & Conditions
            </label>
          </div>

          <button className="btn btn-success w-100">
            Create Account
          </button>

        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;