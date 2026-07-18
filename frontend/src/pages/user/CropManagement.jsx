import { useEffect, useState } from "react";
import api from "../../services/api";

const CropManagement = () => {
  const [cropName, setCropName] = useState("");
  const [variety, setVariety] = useState("");
  const [area, setArea] = useState("");
  const [season, setSeason] = useState("");
  const [sowingDate, setSowingDate] = useState("");

  const [crops, setCrops] = useState([]);
  const [editingId, setEditingId] = useState(null);
const [isEditing, setIsEditing] = useState(false);

  // Load crops from backend
  const loadCrops = async () => {
    try {
      const response = await api.get("/crops/");
      setCrops(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load crops.");
    }
  };

  useEffect(() => {
    loadCrops();
  }, []);

  // Add crop
  const addCrop = async () => {
    try {
      await api.post("/crops/", {
        farmer_id: 1,
        crop_name: cropName,
        variety: variety,
        area: area,
        season: season,
        sowing_date: sowingDate,
      });

      setCropName("");
      setVariety("");
      setArea("");
      setSeason("");
      setSowingDate("");

      loadCrops();
    } catch (error) {
      console.error(error);
      alert("Unable to add crop.");
    }
  };

  const deleteCrop = async (id) => {
  try {
    await api.delete(`/crops/${id}`);

    alert("Crop deleted successfully.");

    loadCrops();
  } catch (error) {
    console.error(error);
    alert("Failed to delete crop.");
  }
};

const editCrop = (crop) => {
  setEditingId(crop.id);

  setCropName(crop.crop_name);
  setVariety(crop.variety);
  setArea(crop.area);
  setSeason(crop.season);
  setSowingDate(crop.sowing_date);

  setIsEditing(true);
};

const updateCrop = async () => {
  try {
    await api.put(`/crops/${editingId}`, {
      farmer_id: 1,
      crop_name: cropName,
      variety: variety,
      area: area,
      season: season,
      sowing_date: sowingDate,
    });

    alert("Crop updated successfully.");

    setEditingId(null);
    setIsEditing(false);

    setCropName("");
    setVariety("");
    setArea("");
    setSeason("");
    setSowingDate("");

    loadCrops();
  } catch (error) {
    console.error(error);
    alert("Unable to update crop.");
  }
};
  return (
    <div style={{ padding: 30 }}>
      <h2 style={{ color: "red", fontSize: "40px" }}>
  THIS IS THE NEW PAGE 🚀
</h2>

      <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    marginTop: "20px",
    marginBottom: "25px",
  }}
>
      
        <input
          placeholder="Crop Name"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
        />

        <input
          placeholder="Variety"
          value={variety}
          onChange={(e) => setVariety(e.target.value)}
        />

        <input
          placeholder="Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />

        <input
          placeholder="Season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        />

        <input
          type="date"
          value={sowingDate}
          onChange={(e) => setSowingDate(e.target.value)}
        />

        <button onClick={isEditing ? updateCrop : addCrop}>
         {isEditing ? "Update Crop" : "Add Crop"}
        </button>
      </div>

      <table width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Crop</th>
            <th>Variety</th>
            <th>Area</th>
            <th>Season</th>
            <th>Sowing Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {crops.map((crop) => (
            <tr key={crop.id}>
              <td>{crop.id}</td>
              <td>{crop.crop_name}</td>
              <td>{crop.variety}</td>
              <td>{crop.area}</td>
              <td>{crop.season}</td>
              <td>{crop.sowing_date}</td>

            <td>
              <button
                onClick={() => editCrop(crop)}
                style={{
                  background: "#1976d2",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteCrop(crop.id)}
                style={{
                  background: "#e53935",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CropManagement;