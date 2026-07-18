import { Routes, Route } from "react-router-dom";

import AdminSidebar from "../pages/admin/AdminSidebar";
import AdminNavbar from "../pages/admin/AdminNavbar";

import Dashboard from "../pages/admin/Dashboard";
import ContactMessages from "../pages/admin/ContactMessages";
import Users from "../pages/admin/Users";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          minHeight: "100vh",
          background: "#f5f7fa",
        }}
      >
        <AdminNavbar />

        <div style={{ padding: "30px" }}>
          <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contact-messages" element={<ContactMessages />} />
          <Route path="users" element={<Users />} />
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;