import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import EditForm from "../components/EditForm";
import { useDispatch } from 'react-redux';
import { updateAdventure } from '../redux/adventuresSlice';

const EditAdventure = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Adventure Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    mapLink: Yup.string().url("Must be a valid URL").nullable(true).notRequired(),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required")
      .min(0, "Price must be positive")
      .max(99999, "Price is too high"),
    maxPersons: Yup.number()
      .typeError("Max Persons must be a number")
      .required("Max persons is required")
      .min(1, "Must be at least 1")
      .max(100, "Max persons must be 100 or less"),
    startTime: Yup.string()
      .required("Start time is required"),
    location: Yup.string()
      .required("Location is required"),
    contact: Yup.string()
      .required("Contact number is required")
      .matches(/^\d{10}$/, "Must be a valid 10-digit number"),
    extraHead: Yup.number()
      .typeError("Extra per head must be a number")
      .min(0, "Extra per head can't be negative")
      .nullable(true)
      .notRequired(),
    endTime: Yup.string()
      .required("Closing time is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch
  } = useForm({
    defaultValues: state?.adventure || {},
    resolver: yupResolver(validationSchema),
  });

  const adventureFields = [
    { name: 'name', label: 'Adventure Name', type: 'text', placeholder: 'Enter adventure name', required: true, column: 'left' },
    { name: 'mapLink', label: 'Location Map Link', type: 'text', placeholder: 'Enter map URL', column: 'left' },
    { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe the adventure', required: true, column: 'left' },
    { name: 'price', label: 'Price', type: 'number', placeholder: 'Enter price', required: true, column: 'left' },
    { name: 'maxPersons', label: 'Max Persons', type: 'number', placeholder: 'Enter maximum capacity', required: true, column: 'left' },
    { name: 'startTime', label: 'Start Time', type: 'time', defaultValue: '09:00', required: true, column: 'left' },
    { name: 'location', label: 'Location', type: 'text', placeholder: 'Enter location', required: true, column: 'right' },
    { name: 'contact', label: 'Contact Number', type: 'text', placeholder: 'Enter contact number', required: true, validation: { pattern: { value: /^\d{10}$/, message: 'Must be a valid 10-digit number' } }, column: 'right' },
    { name: 'extraHead', label: 'Extra per Head', type: 'number', placeholder: 'Enter additional cost', column: 'right' },
    { name: 'endTime', label: 'Closing Time', type: 'time', defaultValue: '13:00', required: true, column: 'right' }
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
