import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm";

const EditAdventure = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(state?.adventure || {});

  const adventureFields = [
    // Left Column Fields
    { 
      name: 'name', 
      label: 'Adventure Name', 
      type: 'text', 
      placeholder: 'Enter adventure name', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'mapLink', 
      label: 'Location Map Link', 
      type: 'text', 
      placeholder: 'Enter map URL', 
      column: 'left' 
    },
    { 
      name: 'description', 
      label: 'Description', 
      type: 'textarea', 
      placeholder: 'Describe the adventure', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'price', 
      label: 'Price', 
      type: 'number', 
      placeholder: 'Enter price', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'maxPersons', 
      label: 'Max Persons', 
      type: 'number', 
      placeholder: 'Enter maximum capacity', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'startTime', 
      label: 'Start Time', 
      type: 'time', 
      defaultValue: '09:00', 
      required: true, 
      column: 'left' 
    },
    
    // Right Column Fields
    { 
      name: 'location', 
      label: 'Location', 
      type: 'text', 
      placeholder: 'Enter location', 
      required: true, 
      column: 'right' 
    },
    { 
      name: 'contact', 
      label: 'Contact Number', 
      type: 'text', 
      placeholder: 'Enter contact number', 
      required: true, 
      column: 'right' 
    },
    { 
      name: 'extraHead', 
      label: 'Extra per Head', 
      type: 'number', 
      placeholder: 'Enter additional cost', 
      column: 'right' 
    },
    { 
      name: 'endTime', 
      label: 'Closing Time', 
      type: 'time', 
      defaultValue: '13:00', 
      required: true, 
      column: 'right' 
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated adventure data:", formData);
    navigate("/verified-adventures", {
      state: { message: "Adventure updated successfully!" }
    });
  };

  const handleCancel = () => {
    navigate("/verified-adventures");
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <EditForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        formTitle="Adventure Details"
        fields={adventureFields}
        mediaOptions={{ photos: true, videos: true }}
      />
    </div>
  );
};

export default EditAdventure;