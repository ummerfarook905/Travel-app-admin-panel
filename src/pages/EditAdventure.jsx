import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditAdventureForm from "../components/EditAdventureForm";

const EditAdventure = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(state?.adventure || {});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated data:", formData);
    navigate("/verified-adventures", {
      state: { message: "Adventure updated successfully!" }
    });
  };

  const handleCancel = () => {
    navigate("/verified-adventures");
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <EditAdventureForm
        adventureData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel} // ✅ This line enables the Cancel button
      />
    </div>
  );
};

export default EditAdventure;
