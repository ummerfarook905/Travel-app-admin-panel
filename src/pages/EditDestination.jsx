
// EditDestination.jsx
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm";

const EditDestination = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const adventure = state?.adventure || {};

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: adventure,
  });

  const destinationFields = [
    { name: 'name', label: 'Destination Name', type: 'text', placeholder: 'Enter name', required: true, column: 'left' },
    { name: 'location', label: 'Location', type: 'text', placeholder: 'Enter location', required: true, column: 'left' },
    { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe the destination', required: true, column: 'left' },
    { name: 'mapLink', label: 'Map Link', type: 'text', placeholder: 'Enter map URL', column: 'right' },
    { name: 'contact', label: 'Contact Number', type: 'text', placeholder: 'Enter contact', column: 'right' },
    { name: 'price', label: 'Price', type: 'number', placeholder: 'Enter price', column: 'right' },
    { name: 'maxPersons', label: 'Max Persons', type: 'number', placeholder: 'Enter max persons', column: 'right' },
    { name: 'extraHead', label: 'Extra per Head', type: 'number', placeholder: 'Enter extra cost', column: 'right' },
    { name: 'startTime', label: 'Start Time', type: 'time', column: 'left' },
    { name: 'endTime', label: 'End Time', type: 'time', column: 'right' },
  ];

  const onSubmit = (data) => {
    console.log("Updated destination data:", data);
    navigate(`/destination/${adventure.id}`, {
      state: { message: "Destination updated successfully" },
    });
  };

  const handleCancel = () => {
    navigate(`/destination/${adventure.id}`);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <EditForm
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        setValue={setValue}
        errors={errors}
        onCancel={handleCancel}
        formTitle="Edit Destination"
        fields={destinationFields}
        mediaOptions={{ photos: true, videos: false }}
      />
    </div>
  );
};

export default EditDestination;
