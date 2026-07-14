import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import CropManagement from "./pages/CropManagement";
import Weather from "./pages/Weather";
import MarketPrices from "./pages/MarketPrices";
import AIAssistant from "./pages/AIAssistant";
import Profile from "./pages/Profile";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crops" element={<CropManagement />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/market" element={<MarketPrices />} />
          <Route path="/ai" element={<AIAssistant />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;