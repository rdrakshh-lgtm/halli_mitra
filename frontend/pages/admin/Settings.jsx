import { useState } from "react";
import "../../styles/Settings.css";

export default function Settings() {
  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    mobile: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    alert("Profile update API will be connected next.");
  };

  const changePassword = () => {
    if (profile.newPassword !== profile.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password change API will be connected next.");
  };

  return (
    <div className="settings-container">
      <h2>⚙️ Admin Settings</h2>

      <div className="settings-card">
        <h3>Profile Information</h3>

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={profile.full_name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={profile.mobile}
          onChange={handleChange}
        />

        <button onClick={saveProfile}>Save Profile</button>
      </div>

      <div className="settings-card">
        <h3>Change Password</h3>

        <input
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          value={profile.currentPassword}
          onChange={handleChange}
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={profile.newPassword}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={profile.confirmPassword}
          onChange={handleChange}
        />

        <button onClick={changePassword}>
          Change Password
        </button>
      </div>
    </div>
  );
}