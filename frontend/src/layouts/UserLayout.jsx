import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/user/Sidebar";
import Navbar from "../components/user/Navbar";

import Dashboard from "../pages/user/Dashboard";
import CropManagement from "../pages/user/CropManagement";
import Myproducts from "../pages/user/Myproducts";
import Marketplace from "../pages/user/Marketplace";
import AIAssistant from "../pages/user/AIAssistant";
import Profile from "../pages/user/Profile";

const UserLayout = () => {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Navbar />

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="crops" element={<CropManagement />} />
          <Route path="my-products" element={<Myproducts />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="ai" element={<AIAssistant />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserLayout;