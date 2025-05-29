// src/pages/DestinationForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DestinationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here (e.g., dispatch to reducer, or save to backend)
    console.log("Destination submitted:", formData);
    navigate('/destination'); // Navigate back to destination list
  };

  const handleCancel = () => {
    navigate("/destination");
  };

  return (
    <div className="min-h-screen bg-[#f3f5ff] flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-xl w-full max-w-3xl shadow-lg border">
        <div className="bg-[#00493E] rounded-t-xl p-4">
          <h2 className="text-white font-semibold text-lg">Add New Destination</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00493E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL *</label>
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00493E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00493E]"
            />
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#00493E] text-white rounded-full hover:bg-[#00382C] cursor-pointer"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2.5 border border-[#00493E] text-[#00493E] rounded-full hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DestinationForm;
