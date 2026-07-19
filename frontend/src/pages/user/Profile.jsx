import { useState } from "react";
import {
  FaUserCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSeedling,
  FaEdit,
} from "react-icons/fa";
import "../../styles/profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [farmer, setFarmer] = useState({
    name: "",
    email: "",
    phone: "",
    village: "",
    taluk: "",
    district: "",
    state: "",
    pincode: "",
    land: "",
    crops: "",
    language: "",
    partnerId: "",
    memberSince: "",
    products: "",
    sold: "",
    earnings: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFarmer({
      ...farmer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Backend API will be added later
    setIsEditing(false);
  };

  const renderField = (label, name, icon = null) => (
    <div className="col-md-6 mb-3">
      {isEditing ? (
        <>
          <label className="form-label fw-semibold">{label}</label>
          <input
            type="text"
            className="form-control"
            name={name}
            value={farmer[name]}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          {icon} {label}: {farmer[name]}
        </>
      )}
    </div>
  );

  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4 fw-bold text-success">
        👤 Farmer Profile
      </h2>

      <div className="row">

        {/* Left Side */}
        <div className="col-md-4">
          <div className="card shadow border-0 rounded-4 text-center p-4">

            <FaUserCircle
              size={120}
              className="text-success mx-auto mb-3"
            />

            {isEditing ? (
              <input
                type="text"
                className="form-control text-center mb-3"
                name="name"
                placeholder="Farmer Name"
                value={farmer.name}
                onChange={handleChange}
              />
            ) : (
              <h3>{farmer.name}</h3>
            )}

            <p className="text-muted">
              Partner ID : {farmer.partnerId}
            </p>

            {!isEditing ? (
              <button
                className="btn btn-success mt-3"
                onClick={() => setIsEditing(true)}
              >
                <FaEdit /> Edit Profile
              </button>
            ) : (
              <div className="d-flex gap-2 justify-content-center mt-3">
                <button
                  className="btn btn-success"
                  onClick={handleSave}
                >
                  Save Changes
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-8">

          <div className="card shadow border-0 rounded-4 p-4">

            <h4 className="text-success mb-4">
              Personal Information
            </h4>

            <div className="row">

              {renderField(
                "Email",
                "email",
                <FaEnvelope className="text-success me-2" />
              )}

              {renderField(
                "Phone",
                "phone",
                <FaPhone className="text-success me-2" />
              )}

              {renderField(
                "Village",
                "village",
                <FaMapMarkerAlt className="text-success me-2" />
              )}

              {renderField("Taluk", "taluk")}

              {renderField("District", "district")}

              {renderField("State", "state")}

              {renderField("Pincode", "pincode")}

              {renderField(
                "Land",
                "land",
                <FaSeedling className="text-success me-2" />
              )}

              {renderField("Crops", "crops")}

              {renderField("Language", "language")}

              <div className="col-md-6 mb-3">
                <strong>Member Since :</strong> {farmer.memberSince}
              </div>

            </div>

          </div>

          {/* Statistics */}

          <div className="row mt-4">

            <div className="col-md-3">
              <div className="card text-center shadow border-0 p-3">
                <h5>🌾</h5>
                <h3>{farmer.products}</h3>
                <p>Products</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center shadow border-0 p-3">
                <h5>🛒</h5>
                <h3>{farmer.sold}</h3>
                <p>Sold</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center shadow border-0 p-3">
                <h5>💰</h5>
                <h3>{farmer.earnings}</h3>
                <p>Earnings</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center shadow border-0 p-3">
                <h5>⭐</h5>
                <h3>{farmer.rating}</h3>
                <p>Rating</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;