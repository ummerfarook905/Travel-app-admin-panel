import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm"; // Reusing the same EditForm component

const EditHotel = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(state?.hotel || {}); // hotel data

  const hotelFields = [
    // Left Column Fields
    { 
      name: 'name', 
      label: 'Hotel Name', 
      type: 'text', 
      placeholder: 'Enter hotel name', 
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
      placeholder: 'Describe the hotel', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'pricePerNight', 
      label: 'Price per Night', 
      type: 'number', 
      placeholder: 'Enter nightly rate', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'roomsAvailable', 
      label: 'Rooms Available', 
      type: 'number', 
      placeholder: 'Enter number of rooms', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'checkInTime', 
      label: 'Check-in Time', 
      type: 'time', 
      defaultValue: '14:00', 
      required: true, 
      column: 'left' 
    },

    // Right Column Fields
    { 
      name: 'location', 
      label: 'Location', 
      type: 'text', 
      placeholder: 'Enter city/location', 
      required: true, 
      column: 'right' 
    },
    { 
      name: 'contact', 
      label: 'Contact Number', 
      type: 'text', 
      placeholder: 'Enter hotel contact number', 
      required: true, 
      column: 'right' 
    },
    { 
      name: 'extraBedPrice', 
      label: 'Extra Bed Price', 
      type: 'number', 
      placeholder: 'Enter cost for extra bed', 
      column: 'right' 
    },
    { 
      name: 'checkOutTime', 
      label: 'Check-out Time', 
      type: 'time', 
      defaultValue: '11:00', 
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
    console.log("Updated hotel data:", formData);
    navigate("/verified-hotels", {
      state: { message: "Hotel updated successfully!" }
    });
  };

  const handleCancel = () => {
    navigate("/verified-hotels");
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <EditForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        formTitle="Hotel Details"
        fields={hotelFields}
        mediaOptions={{ photos: true, videos: true }}
      />
    </div>
  );
};

export default EditHotel;
