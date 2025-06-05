import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import EditForm from "../components/EditForm";
import { useDispatch } from 'react-redux';
import { updateAdventure } from '../redux/adventuresSlice';

const EditAdventure = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    control,
    setValue,
    watch
  } = useForm({
    defaultValues: state?.adventure || {}
  });

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
      validation: {
        pattern: {
          value: /^\d{10}$/,
          message: 'Must be a valid 10-digit number'
        }
      },
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

  const onSubmit = (data) => {
    dispatch(updateAdventure({
      id: data.id,
      updatedData: data
    }));
    console.log("Updated adventure data:", data);
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
        register={register}
        control={control}
        errors={errors}
        setValue={setValue}
        watch={watch}
        handleSubmit={handleSubmit(onSubmit)}
        onCancel={handleCancel}
        formTitle="Adventure Details"
        fields={adventureFields}
        mediaOptions={{ photos: true, videos: true }}
      />
    </div>
  );
};

export default EditAdventure;