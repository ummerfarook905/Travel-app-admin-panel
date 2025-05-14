import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/EditForm";

const EditDestination = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState(state?.adventure || {});

  const destinationFields = [
    { name: 'name', label: 'Destination Name', type: 'text', placeholder: 'Enter name', required: true, column: 'left' },
    { name: 'location', label: 'Location', type: 'text', placeholder: 'Enter location', required: true, column: 'left' },
    { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe the destination', required: true, column: 'left' },
    { name: 'mapLink', label: 'Map Link', type: 'text', placeholder: 'Enter map URL', column: 'right' },
    { name: 'contact', label: 'Contact Number', type: 'text', placeholder: 'Enter contact', column: 'right' },
    { name: 'price', label: 'Price', type: 'number', placeholder: 'Enter price', column: 'right' },
    { name: 'maxPersons', label: 'Max Persons', type: 'number', placeholder: 'Enter max persons', column: 'right' },
    { name: 'extraHead', label: 'Extra per Head', type: 'number', placeholder: 'Enter extra cost', column: 'right' },
    { name: 'startTime', label: 'Start Time', type: 'time', defaultValue: '09:00', column: 'left' },
    { name: 'endTime', label: 'End Time', type: 'time', defaultValue: '13:00', column: 'right' },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated destination data", formData);
    navigate(`/destination/${formData.id}`, {
      state: { message: "Destination updated successfully" },
    });
  };

  const handleCancel = () => {
    navigate(`/destination/${formData.id}`);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <EditForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        formTitle="Edit Destination"
        fields={destinationFields}
        mediaOptions={{ photos: true, videos: false }}
      />
    </div>
  );
};

export default EditDestination;
